/**
 * Below are examples of real types and code taken from our app.
 * Our shopify-event-connector is a service that accepts data layer events
 * from the browser and if configured, will send them to destinations.
 */

type DlEventName =
    | "dl_add_payment_info"
    | "dl_add_shipping_info"
    | "dl_add_to_cart"
    | "dl_begin_checkout"
    | "dl_login"
    | "dl_purchase"
    | "_refund"
    | "dl_remove_from_cart"
    | "dl_select_item"
    | "dl_sign_up"
    | "dl_subscription_purchase"
    | "dl_user_data"
    | "dl_view_cart"
    | "dl_view_item"
    | "dl_view_item_list"
    | "dl_view_search_results";

type EventKey =
    | "addPaymentInfo"
    | "addShippingInfo"
    | "addToCart"
    | "beginCheckout"
    | "completePayment"
    | "login"
    | "pageView"
    | "purchase"
    | "refund"
    | "removeFromCart"
    | "signUp"
    | "selectItem"
    | "subscriptionPurchase"
    | "viewCart"
    | "viewItem"
    | "viewItemList"
    | "viewSearchResults";

type Events = Record<EventKey, boolean>;

/**
 * Each channel has configuration. We access this configuration often when we process events.
 * Below shows examples of TikTok and Universal Analytics configuration.
 */

type ConnectorConfig = {
    live: boolean;
    name: string;
    measurementId: string; // measurementId or pixelId
    optionalParameters?: {
        accessToken?: string;
        apiVersion?: string;
        testCode?: string | null;
    }
    eventMap: Record<DlEventName, EventKey>;
    payloadBuilder: Function;
    ignoreEventReason: Function
};

type UAEventsConnectorConfig = ConnectorConfig & {
    enabledEvents: Pick<
        Events,
        | "addPaymentInfo"
        | "addShippingInfo"
        | "addToCart"
        | "beginCheckout"
        | "login"
        | "pageView"
        | "purchase"
        | "refund"
        | "removeFromCart"
        | "signUp"
        | "selectItem"
        | "subscriptionPurchase"
        | "viewCart"
        | "viewItem"
        | "viewItemList"
        | "viewSearchResults"
    >;
};

type TikTokEventsConnectorConfig = ConnectorConfig & {
    enabledEvents: Pick<
        Events,
        | "addPaymentInfo"
        | "addToCart"
        | "beginCheckout"
        | "completePayment"
        | "purchase"
        | "signUp"
        | "subscriptionPurchase"
        | "viewItem"
        | "viewSearchResults"
    >;
};


/**
 * The context contains information about the message and 
 * is married with additional data (like configuration) to prevent data from being fetched multiple times.
 */

type Context = {
    message: {
        event_name: DlEventName;
        attributes: {
            user_id?: string;
            _ga?: string;
            ttclid?: string;
            consentGranted?: boolean;
        };
    };
    config: {
        consentRequired: boolean;
        configs: { // Was going to make this an array of generic connectors, but I think we should define which events are enabled
            ua?: UAEventsConnectorConfig | null;
            tiktok?: TikTokEventsConnectorConfig | null;
        }
    };
};

/* ============================================================= */

type Payload =
    | UAPayload
    | TikTokPayload

type UAPayload = {
    cid?: string;
    uid?: string;
    en: string;
};

type TikTokPayload = {
    ttid: string; // Event shouldn't be sent if missing ttid
    event: "AddToCart" | "Login";
};

const uaEventMap: Record<DlEventName, EventKey> = {
    dl_add_payment_info: "addPaymentInfo",
    dl_add_shipping_info: "addShippingInfo",
    dl_add_to_cart: "addToCart",
    dl_begin_checkout: "beginCheckout",
    dl_login: "login",
    dl_purchase: "purchase",
    _refund: "refund",
    dl_remove_from_cart: "removeFromCart",
    dl_select_item: "selectItem",
    dl_sign_up: "signUp",
    dl_subscription_purchase: "subscriptionPurchase",
    dl_user_data: "pageView",
    dl_view_cart: "viewCart",
    dl_view_item: "viewItem",
    dl_view_item_list: "viewItemList",
    dl_view_search_results: "viewSearchResults",
};

const tikTokEventMap: Record<DlEventName, EventKey> = { // This is currently the same as UA but these events could be changed as necessary
    dl_add_payment_info: "addPaymentInfo",
    dl_add_shipping_info: "addShippingInfo",
    dl_add_to_cart: "addToCart",
    dl_begin_checkout: "beginCheckout",
    dl_login: "login",
    dl_purchase: "purchase",
    _refund: "refund",
    dl_remove_from_cart: "removeFromCart",
    dl_select_item: "selectItem",
    dl_sign_up: "signUp",
    dl_subscription_purchase: "subscriptionPurchase",
    dl_user_data: "pageView",
    dl_view_cart: "viewCart",
    dl_view_item: "viewItem",
    dl_view_item_list: "viewItemList",
    dl_view_search_results: "viewSearchResults",
};

const buildPayload = (context: Context): UAPayload => {
    return {
        cid: context.message.attributes._ga,
        uid: context.message.attributes.user_id,
        en: context.message.event_name.replace(/^(dl)?_/, ""),
        // Other event parameters would go here
    };
};

const buildTikTokPayload = (context: Context): TikTokPayload => {
    return {
        ttid: context.message.attributes.ttclid ?? "", // Event shouldn't be sent if missing ttid
        event: "AddToCart",
        // Other event parameters would go here
    };
};

const ignoreUAEventReason = ( // This could be fleshed out to have specific ignore conditions for each platform. I.e. if the TikTok API version is too low, don't send.
    context: Context,
    payload: UAPayload
): string | undefined => {
    if (
        context.config.consentRequired &&
        !context.message.attributes.consentGranted
    ) {
        return "Consent not granted";
    } else if (!payload.uid && !payload.cid) {
        return "Missing user identifier";
    }
};

const ignoreTikTokEventReason = ( // This could be fleshed out to have specific ignore conditions for each platform. I.e. if the TikTok API version is too low, don't send.
    context: Context,
    payload: TikTokPayload
): string | undefined => {
    if (
        context.config.consentRequired &&
        !context.message.attributes.consentGranted
    ) {
        return "Consent not granted";
    } else if (!payload.ttid) {
        return "Missing Tiktok ID";
    } else if (!payload.event) {
        return "Missing Tiktok Event Name";
    }

};

const sendEvent = (context: Context, config: ConnectorConfig, payload: Payload) => {
    if (!context || !config) return
    console.log(
        `Sending event to ${config.name} for property ${config.measurementId}`, // Could have specific messaging for each platform.
        payload
    );
};

/* ============================================================= */

/**
 * This code is very linear and really is only setup to handle UA. Ideally, it can support TikTok and UA.
 * 
 * Please create a "plugin manager" that can support both UA and TikTok with minimal duplication and special casing. 
 * 
 * Ideally, we can use this as a framework for adding more integrations.
 * 
 * Feel free to modify code, types as needed. If you get stuck because of a type, just keep moving on.
 * This should only be worked on for a couple hours max.
 */

const processEvents = (context: Context) => {
    const keys = Object.keys(context.config.configs) as Array<keyof typeof context.config.configs> // Type coercion so I can loop through configs
    keys.forEach(key => {
        const config = context.config.configs[key]
        const isEnabled = Boolean(
            config && config.live && config.measurementId
        );
        if (!isEnabled) {
            return;
        }

        const shouldProcessEvent =
            config && config.eventMap[context.message.event_name] && Object.values(config.enabledEvents)[Object.keys(config.enabledEvents).indexOf(config.eventMap[context.message.event_name])]; // Type coercion so I can check if the event is enabled. Couldn't directly check the property on the Pick.
        if (!shouldProcessEvent) {
            return;
        }

        const payload = config.payloadBuilder(context);
        const ignorePayloadReason = config.ignoreEventReason(context, payload);
        if (ignorePayloadReason) {
            console.log(`Ignoring ${config.name} Event:`, ignorePayloadReason);
            return;
        }

        sendEvent(context, config, payload);
    })
};

const sampleContext: Context = {
    message: {
        event_name: "dl_add_to_cart",
        attributes: {
            _ga: "1234567.1234567",
            user_id: "user_123",
            ttclid: "123"
        },
    },
    config: {
        consentRequired: false,
        configs: {
            ua:
            {
                name: "ua",
                live: true,
                measurementId: "UA-12345-6",
                enabledEvents: {
                    addPaymentInfo: true,
                    addShippingInfo: true,
                    addToCart: true,
                    beginCheckout: true,
                    login: true,
                    pageView: true,
                    purchase: true,
                    removeFromCart: true,
                    refund: true,
                    selectItem: true,
                    signUp: true,
                    subscriptionPurchase: true,
                    viewCart: true,
                    viewItem: true,
                    viewItemList: true,
                    viewSearchResults: true,
                },
                eventMap: uaEventMap,
                payloadBuilder: buildPayload,
                ignoreEventReason: ignoreUAEventReason

            },
            tiktok:
            {
                name: "tiktok",
                measurementId: "321321",
                live: true,
                optionalParameters: {
                    accessToken: "123123",
                    apiVersion: "v1.2",
                    testCode: "123",
                },
                enabledEvents: {
                    addPaymentInfo: true,
                    addToCart: true,
                    beginCheckout: true,
                    completePayment: true,
                    purchase: true,
                    signUp: true,
                    subscriptionPurchase: true,
                    viewItem: true,
                    viewSearchResults: true,
                },
                eventMap: tikTokEventMap,
                payloadBuilder: buildTikTokPayload,
                ignoreEventReason: ignoreTikTokEventReason

            }
        }
    },
};
processEvents(sampleContext);