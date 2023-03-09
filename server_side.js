const claimRequest = require("claimRequest");
const encodeUriComponent = require("encodeUriComponent");
const getContainerVersion = require("getContainerVersion");
const getRequestHeader = require("getRequestHeader");
const getRequestBody = require("getRequestBody");
const getRequestPath = require("getRequestPath");
const getRequestQueryParameters = require("getRequestQueryParameters");
const getType = require("getType");
const JSON = require("JSON");
const logToConsole = require("logToConsole");
const makeString = require("makeString");
const makeNumber = require("makeNumber");
const parseUrl = require("parseUrl");
const returnResponse = require("returnResponse");
const sendEventToGoogleAnalytics = require("sendEventToGoogleAnalytics");
const sendHttpGet = require("sendHttpGet");
const setPixelResponse = require("setPixelResponse");
const setResponseBody = require("setResponseBody");

const notesPrefix = "_elevar_";

const shouldTrace = false;

/****************** UTILITIES ******************/

const log = args => {
    if (data.debug) {
        logToConsole("Shopify Webhook Event:", args);
    }
};

const trace = args => {
    if (shouldTrace) {
        logToConsole("Shopify Webhook Event:", args);
    }
};

const serialize = obj => {
    let str = [];
    for (const objKey in obj) {
        if (obj[objKey] || obj[objKey] === 0) {
            str.push(
                encodeUriComponent(makeString(objKey)) +
                "=" +
                encodeUriComponent(makeString(obj[objKey]))
            );
        }
    }
    return str.join("&");
};

const getMappedConfig = (source, field) => {
    return source ? source.map(s => s[field]) : [];
};

const getReducedValue = (subject, field) => {
    return subject ?
        subject.reduce(
            (acc, refundLineItem) => acc + makeNumber(refundLineItem[field]),
            0
        ) :
        0;
};

/*************** END UTILITIES ****************/

/************* HELPER FUNCTIONS ***************/

const getGatewayTagsBlacklist = () => {
    trace("In getGatewayTagsBlacklist");
    return getMappedConfig(data.gatewaysBlacklist, "gateway");
};

const getOrderTagsBlacklist = () => {
    trace("In getOrderTagsBlacklist");
    return getMappedConfig(data.orderTagsBlacklist, "order_tags");
};

const getChannelBlacklist = () => {
    trace("In getChannelBlacklist");
    return getMappedConfig(data.channelBlacklist, "channel");
};

const hasMatchingTags = payload => {
    trace("In hasMatchingTags");
    if (
        payload.tags &&
        payload.tags.length === 0 &&
        getOrderTagsBlacklist().length
    ) {
        return false;
    }
    const orderTags = payload.tags ? payload.tags.split(", ") : [];
    const matchingOrderTags = getOrderTagsBlacklist().filter(blacklistedTag => {
        return orderTags.indexOf(blacklistedTag) > -1;
    });
    if (matchingOrderTags.length > 0) {
        log(
            "Ignored payload with tags " +
            payload.tags +
            " has matching gateway " +
            JSON.stringify(getOrderTagsBlacklist())
        );
    }
    return matchingOrderTags.length > 0;
};

const hasMatchingGateways = payload => {
    trace("In hasMatchingGateways");
    const matchingGateways = getGatewayTagsBlacklist().filter(
        blacklistedGateway => {
            return (
                payload.payment_gateway_names &&
                payload.payment_gateway_names.indexOf(blacklistedGateway) > -1
            );
        }
    );
    if (matchingGateways.length > 0) {
        log(
            "Ignored payload with gateways " +
            JSON.stringify(payload.payment_gateway_names) +
            " has matching gateway " +
            JSON.stringify(getGatewayTagsBlacklist())
        );
    }
    return matchingGateways.length > 0;
};

const hasMatchingChannels = payload => {
    trace("In hasMatchingChannels");
    const hasMatchingChannels =
        getChannelBlacklist().indexOf(payload.source_name) > -1;
    if (hasMatchingChannels) {
        log(
            "Ignored payload with channel " +
            payload.source_name +
            " has matching channels " +
            JSON.stringify(getChannelBlacklist())
        );
    }
    return hasMatchingChannels;
};

const isOrder = () => {
    trace("In isOrder");
    return getRequestHeader("X-Shopify-Topic") === "orders/create";
};

const isDraftOrder = () => {
    trace("In isDraftOrder");
    return getRequestHeader("X-Shopify-Topic") === "draft_orders/create";
};

const isRefund = () => {
    trace("In isRefund");
    return getRequestHeader("X-Shopify-Topic") === "refunds/create";
};

const shouldSendIfDraftOrder = () => {
    trace("in shouldSendIfDraftOrder");
    if (isDraftOrder()) {
        return data.sendDraftOrdersToGA;
    }
    return true;
};

const shouldSendIfRefund = () => {
    trace("in shouldSendIfRefund");
    if (isRefund()) {
        return data.sendRefundsToGA;
    }
    return true;
};

const shouldSendOrder = payload => {
    trace("in shouldSendOrder");
    return !(
        hasMatchingTags(payload) ||
        hasMatchingGateways(payload) ||
        hasMatchingChannels(payload)
    );
};

const getInvalidParams = event => {
    trace("in getInvalidParams");
    return "Invalid";
};

const getProductIdentifier = () => {
    trace("in getProductIdentifier");
    const productIdentifierMap = {
        product_sku: "sku",
        product_id: "product_id",
        variant_id: "variant_id"
    };
    return productIdentifierMap[data.productAttributeForIdentifying];
};

const buildLineItems = currency => lineItem => ({
    item_id: lineItem[getProductIdentifier()],
    item_name: lineItem.title,
    quantity: lineItem.quantity,
    discount: lineItem.total_discount,
    item_brand: lineItem.vendor,
    item_variant: lineItem.variant_title,
    price: makeNumber(lineItem.price),
    currency: currency
});

const getGaClientId = payload =>
    payload.note_attributes.filter(note => note.name === notesPrefix + "_ga");

const getGa4ClientId = payload =>
    payload.note_attributes.filter(
        note =>
        note.name ===
        notesPrefix +
        "_ga_" +
        data.ga4measurementId.replace("G-", "").toUpperCase()
    );

const getSID = payload => {
    trace("In getSID");
    const ga4ClientId = getGa4ClientId(payload);
    if (ga4ClientId && ga4ClientId.length > 0) {
        const gaCookieVal = ga4ClientId[0].value.split(".");
        if (gaCookieVal.length === 7) {
            return gaCookieVal[2];
        }
        return ga4ClientId[0].value;
    }
    return undefined;
};

const getClientId = payload => {
    trace("In getClientId");
    const gaClientId = getGaClientId(payload);
    if (gaClientId && gaClientId.length > 0) {
        const gaCookieVal = gaClientId[0].value.split(".");
        if (gaCookieVal.length === 4) {
            return gaCookieVal.slice(-2).join(".");
        }
        return gaClientId[0].value;
    }
    return payload.customer.id;
};

const utmParamKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "gclsrc"
];

const isString = value => getType(value) === "string";

const getUtmParamsFromObject = container => {
    if (utmParamKeys.some(param => isString(container[param]))) {
        return utmParamKeys.reduce((params, param) => {
            params[param] = container[param];
            return params;
        }, {});
    }
};

const getParamsFromNotes = payload => {
    trace("In getParamsFromNotes");
    const matchingNote = payload.note_attributes.filter(
        note => note.name === notesPrefix + "visitor_info"
    );

    if (matchingNote.length > 0) {
        const visitorInfo = JSON.parse(matchingNote[0].value);
        if (visitorInfo) {
            return getUtmParamsFromObject(visitorInfo);
        }
    }
};

const getQueryParamsFromLandingPage = payload => {
    trace("In getQueryParamsFromLandingPage");
    const parsedUrl = parseUrl(
        "https://test.com" + (payload.landing_site ? payload.landing_site : "")
    );

    if (parsedUrl && parsedUrl.searchParams) {
        return getUtmParamsFromObject(parsedUrl.searchParams);
    }
};

const getClientDetails = (payload, key) => {
    trace("In getClientDetails");
    if (payload.client_details && payload.client_details[key]) {
        return payload.client_details[key];
    }
    return "";
};

const getEventName = () => {
    trace("In getEventName");
    if (isDraftOrder() || isOrder()) return "purchase";
    if (isRefund()) return "refund";
};

const getRefundCurrencyCode = refund => {
    trace("In getRefundCurrencyCode");
    return refund.refund_line_items[0].subtotal_set.shop_money.currency_code;
};

const translateLineItems = payload => {
    trace("In translateLineItems");
    if (isOrder() || isDraftOrder()) {
        return payload.line_items.map(buildLineItems(payload.currency));
    }

    if (isRefund()) {
        return payload.refund_line_items
            .map(refundItem => refundItem.line_item)
            .map(buildLineItems(getRefundCurrencyCode(payload)));
    }
};

const getCustomerId = payload => {
    trace("In getCustomerId");
    if (isOrder() || isDraftOrder()) {
        return payload.customer.id;
    }

    if (isRefund()) {
        return payload["user_id"] || "";
    }
};

const getTransactionId = payload => {
    trace("In getTransactionId");
    if (isOrder() || isDraftOrder()) {
        return payload[data.orderAttributeForIdentifying];
    }
    if (isRefund()) {
        return payload["order_id"] || payload["id"];
    }
};

const getValue = payload => {
    trace("In getValue");
    if (isOrder() || isDraftOrder()) {
        return payload.total_price;
    }
    if (isRefund()) {
        return getReducedValue(payload.refund_line_items, "subtotal") * -1;
    }
};

const getShipping = payload => {
    return isRefund() ?
        getReducedValue(payload.shipping_lines, "price") * -1 :
        getReducedValue(payload.shipping_lines, "price");
};

const getTax = payload => {
    trace("In getTax");
    if (isOrder() || isDraftOrder()) {
        return payload.total_tax;
    }
    if (isRefund()) {
        return getReducedValue(payload.refund_line_items, "total_tax") * -1;
    }
};

const getLanguage = payload => {
    trace("In getLanguage");
    const language = getClientDetails(payload, "accept_language");
    if (language.length > 0) {
        return language.split(",")[0];
    }
    return "";
};

const getPageViewLocation = order => {
    const parsedOrderStatusPageUrl = parseUrl(order.order_status_url);
    if (parsedOrderStatusPageUrl) {
        return parsedOrderStatusPageUrl.origin + order.landing_site;
    }
};

const getUtmParams = payload => {
    trace("in getUtmParam");
    if (data.useLastUtmParams) {
        return (
            getParamsFromNotes(payload) || getQueryParamsFromLandingPage(payload)
        );
    } else {
        return (
            getQueryParamsFromLandingPage(payload) || getParamsFromNotes(payload)
        );
    }
};

const sendPageViewEvent = (measurementId, version, payload) => {
    if (isOrder()) {
        const event = buildBaseEvent(measurementId, version, payload);
        event["event_name"] = "page_view";
        sendEventToGoogleAnalytics(event, response => {
            log(
                "Response from " + version + " Analytics:" + JSON.stringify(response)
            );
            if (!response.success) {
                log("Error response from Google Analytics");
            }
        });
    }
};

const buildBaseEvent = (measurementId, version, payload) => {
    trace("In buildBaseEvent");
    const event = {
        "x-ga-measurement_id": measurementId,
        "x-ga-protocol_version": version,
        screen_resolution: getClientDetails(payload, "browser_width") +
            "x" +
            getClientDetails(payload, "browser_height"),
        user_agent: getClientDetails(payload, "user_agent"),
        language: getLanguage(payload),
        page_location: isOrder() ? getPageViewLocation(payload) : "",
        ip_override: getClientDetails(payload, "browser_ip"),
        user_data: {
            user_id: getCustomerId(payload)
        }
    };

    let utmSource, utmMedium, utmCampaign, utmTerm, utmContent, gclid, gclsrc;

    if (isDraftOrder()) {
        if (data.draftOrderSource) utmSource = data.draftOrderSource;
        if (data.draftOrderMedium) utmMedium = data.draftOrderMedium;
        if (data.draftOrderCampaign) utmCampaign = data.draftOrderCampaign;
    }

    trace("In buildEvent after draft order check");

    if (isOrder()) {
        const matchingSource = data.channelOrderSourceMedium ?
            data.channelOrderSourceMedium.filter(
                conf => payload.source_name === conf.channel
            ) :
            [];

        const orderTags = payload.tags ? payload.tags.split(", ") : [];
        const matchingTags = data.tagOrderSourceMedium ?
            data.tagOrderSourceMedium.filter(
                conf => orderTags.indexOf(conf.tag) > -1
            ) :
            [];

        if (matchingSource.length > 0) {
            if (
                isString(matchingSource[0]["source"]) ||
                isString(matchingSource[0]["medium"]) ||
                isString(matchingSource[0]["campaign"])
            ) {
                utmSource = matchingSource[0].source;
                utmMedium = matchingSource[0].medium;
                utmCampaign = matchingSource[0].campaign;
            }
        } else if (matchingTags.length > 0) {
            if (
                isString(matchingTags[0]["source"]) ||
                isString(matchingTags[0]["medium"]) ||
                isString(matchingTags[0]["campaign"])
            ) {
                utmSource = matchingTags[0].source;
                utmMedium = matchingTags[0].medium;
                utmCampaign = matchingTags[0].campaign;
            }
        } else {
            const utmParams = getUtmParams(payload);
            if (utmParams) {
                utmSource = utmParams.utm_source;
                utmMedium = utmParams.utm_medium;
                utmCampaign = utmParams.utm_campaign;
                utmTerm = utmParams.utm_term;
                utmContent = utmParams.utm_content;
                gclid = utmParams.gclid;
                if (!data.useLastUtmParams) {
                    gclsrc = utmParams.gclsrc;
                }
            }
        }

        event["client_id"] = getClientId(payload);

        if (version === "2") {
            const ga4ClientId = getSID(payload);
            if (ga4ClientId) {
                event["ga_session_id"] = ga4ClientId;
            }
        }
    }
    trace("In buildEvent after isOrder if");

    if (isRefund()) {
        event["client_id"] = payload["user_id"] || "";
        event["x-ga-mp1-ni"] = "1";
    }

    const campaign = {};
    if (utmSource) campaign["source"] = utmSource;
    if (utmMedium) campaign["medium"] = utmMedium;
    if (utmCampaign) campaign["name"] = utmCampaign;

    event["campaign"] = campaign;

    const prefix = "x-ga-mp" + version + "-";
    if (utmSource) event[prefix + "cs"] = utmSource;
    if (utmMedium) event[prefix + "cm"] = utmMedium;
    if (utmCampaign) event[prefix + "cn"] = utmCampaign;
    if (utmTerm) event[prefix + "ck"] = utmTerm;
    if (utmContent) event[prefix + "cc"] = utmContent;
    if (gclid) event["gclid"] = gclid;
    if (gclsrc) event["gclsrc"] = gclsrc;
    if (version === "1") {
        event["event_category"] = "elevar enhanced ecommerce";
    }

    return event;
};

const buildEvent = (measurementId, version, payload) => {
    trace("In buildEvent");
    const event = buildBaseEvent(measurementId, version, payload);

    event["payment_type"] =
        payload.gateway === "paypal" ? "Paypal" : "Credit Card";
    event["event_name"] = getEventName();
    event["coupon"] =
        payload.discount_codes && payload.discount_codes.length ?
        payload.discount_codes[0].code :
        "";
    event["ip_override"] = getClientDetails(payload, "browser_ip");
    event["currency"] =
        isDraftOrder() || isOrder() ?
        payload.currency :
        getRefundCurrencyCode(payload);
    event["items"] = translateLineItems(payload);
    event["transaction_id"] = getTransactionId(payload);
    event["shipping"] = getShipping(payload);
    event["tax"] = getTax(payload);
    event["value"] = getValue(payload);
    if (version === "1") {
        event["x-ga-mp1-pa"] = getEventName();
        event["x-ga-mp1-tr"] = payload.total_price;
        event["event_action"] = getEventName();
    }

    trace("In buildEvent after params");

    log("Outgoing request to GA is " + JSON.stringify(event));

    return event;
};
const sendEventToGA = (event, payload, gaType) => {
    trace("In sendEventToGA");
    sendEventToGoogleAnalytics(event, response => {
        log("Response from " + gaType + " Analytics:" + JSON.stringify(response));
        if (!response.success) {
            logResult(response.failure, payload, response.success, event, gaType);
        } else {
            const invalidValuesMessage = getInvalidParams(event);
            let error;
            if (invalidValuesMessage) {
                error = {
                    code: -1,
                    error_user_title: invalidValuesMessage
                };
            }
            logResult("", payload, response.success, event, gaType);
        }
    });
};

const getTypeOfWebhook = () => {
    trace("In getTypeOfWebhook");
    if (isOrder()) return "Order";
    if (isDraftOrder()) return "Draft Order";
    if (isRefund()) return "Refund";
};

/*********** END HELPER FUNCTIONS *************/

/************* MONITORING FUNCTIONS ***************/

const getLoggingEventName = () => {
    trace("In getLoggingEventName");
    if (isRefund()) return "Refund";
    if (isOrder()) return "Purchase";
    if (isDraftOrder()) return "Draft Order";
};

const getBaseLoggingData = (
    errorResponse,
    order,
    successful,
    event,
    channel
) => {
    trace("In getBaseLoggingData");
    const containerVersion = getContainerVersion();
    const params = {
        successful: successful ? "1" : "0",
        ss_client_id: containerVersion["containerId"],
        web_client_id: "Webhook",
        channel: channel,
        event_name: getLoggingEventName(),
        page_url: "",
        consent: "",
        utm_source: event["x-ga-mp1-cs"] || event["x-ga-mp2-cs"],
        utm_medium: event["x-ga-mp1-cm"] || event["x-ga-mp2-cm"],
        utm_campaign: event["x-ga-mp1-cn"] || event["x-ga-mp2-cn"],
        utm_term: event["x-ga-mp1-ck"] || event["x-ga-mp2-ck"],
        utm_content: event["x-ga-mp1-cc"] || event["x-ga-mp2-cc"],
        gclid: event.gclid
    };
    if (order) {
        params.order_id = order.id;
        params.revenue = order.total_price;
        params.currency = order.currency;
        params.request_url =
            "https://" + getRequestHeader("host") + getRequestPath();
        params.customer_order_count = order.customer ?
            order.customer.orders_count :
            0;
        params.customer_total_spent = order.customer ?
            order.customer.total_spent :
            0;
    }
    if (errorResponse) {
        params.error_code = errorResponse.error_subcode || errorResponse.code;
        params.error_message =
            errorResponse.error_user_title || errorResponse.message;
        params.attempted_request = JSON.stringify(event);
    }
    return params;
};

const createLoggingUrl = (errorResponse, order, successful, event, channel) => {
    trace("In createLoggingUrl");
    const params = getBaseLoggingData(
        errorResponse,
        order,
        successful,
        event,
        channel
    );
    return data.monitoringEndpoint + "?" + serialize(params);
};

const logResult = (errorResponse, order, successful, event, channel) => {
    trace("In logResult");
    if (!data.monitoringEndpoint) return;
    sendHttpGet(
        createLoggingUrl(errorResponse, order, successful, event, channel),
        (statusCode, __, ___) => {}, {
            method: "GET",
            timeout: 5000
        }
    );
};

/*********** END MONITORING FUNCTIONS *************/
const params = getRequestQueryParameters();
if (
    getRequestPath().indexOf("/shopify-orders.gif") === 0 &&
    params &&
    params["test"] === "1"
) {
    claimRequest();
    setResponseBody("<h1>Hooray from Elevar!</h1>");
    returnResponse();
}

if (
    getRequestPath().indexOf("/shopify-orders.gif") === 0 &&
    JSON.parse(getRequestBody())
) {
    claimRequest();
    const payload = JSON.parse(getRequestBody());

    log(getTypeOfWebhook() + "from Shopify:" + JSON.stringify(payload));

    if (
        shouldSendOrder(payload) &&
        shouldSendIfDraftOrder() &&
        shouldSendIfRefund()
    ) {
        trace("After claim request main if for sending payload");
        if (data.enableGa3Events && data.ga3measurementId) {
            sendPageViewEvent(data.ga3measurementId, "1", payload);
            const event = buildEvent(data.ga3measurementId, "1", payload);
            sendEventToGA(event, payload, "Universal Analytics");
        }

        if (data.enableGa4Events && data.ga4measurementId) {
            sendPageViewEvent(data.ga4measurementId, "2", payload);
            const event = buildEvent(data.ga4measurementId, "2", payload);
            sendEventToGA(event, payload, "GA4");
        }
    }

    setPixelResponse();
    returnResponse();
}