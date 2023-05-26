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

type SubconfigCommon = {
    live: boolean;
};

type ConnectorConfig = SubconfigCommon & ConfigSettings;

type ConfigSettings = {
    name: string;
    measurementId: string;
    optionalParameters?: {
        accessToken?: string;
        apiVersion?: string;
        testCode?: string | null;
    }
    enabledEvents: Partial<Events>;
};

type UAConfigSettings = {
    measurementId: string;
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

type TikTokConfigSettings = {
    accessToken: string;
    apiVersion: string;
    pixelId: string;
    testCode: string | null;
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
        configs: Array<ConnectorConfig>;
    };
};

/* ============================================================= */



type Payload = {
    cid?: string;
    uid?: string;
    en: string;
};

const eventMap: Record<DlEventName, EventKey> = {
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

const buildPayload = (context: Context): Payload => {
    return {
        cid: context.message.attributes._ga,
        uid: context.message.attributes.user_id,
        en: context.message.event_name.replace(/^(dl)?_/, ""),
        // Other event parameters would go here
    };
};

const ignoreEventReason = (
    context: Context,
    payload: Payload
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

const sendEvent = (context: Context, config: ConnectorConfig, payload: Payload) => {
    if (!context || !config) return
    console.log(
        `Sending event to ${config.name} for property ${config.measurementId}`,
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
    context.config.configs.forEach(config => {
        const isEnabled = Boolean(
            config && config.live && config.measurementId
        );
        if (!isEnabled) {
            return;
        }

        const shouldProcessEvent =
            config.enabledEvents[eventMap[context.message.event_name]];
        if (!shouldProcessEvent) {
            return;
        }

        const payload = buildPayload(context);
        const ignorePayloadReason = ignoreEventReason(context, payload);
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
        },
    },
    config: {
        consentRequired: false,
        configs: [
            {
                name: "ua",
                live: false,
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
            },
            {
                name: "tiktok",
                measurementId: "321321",
                live: false,
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
            }
        ]
    },
};
processEvents(sampleContext);