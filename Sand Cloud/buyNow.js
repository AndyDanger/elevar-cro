let paymentMethods = [{
    enabled: true,
    key: true,
    name: `amazon_pay`,
    text: `Amazon Pay`,
    url: `amazon_payments/store`,
}, {
    enabled: false,
    name: `apple_pay`,
    url: ``,
}, {
    enabled: false,
    name: `google_pay`,
    url: ``,
}, {
    enabled: false,
    name: `meta_pay`,
    url: ``,
}, {
    enabled: false,
    key: true,
    name: `pay_pal`,
    text: `Pay Pal`,
    url: `/paypal/tokens`,
}, {
    enabled: false,
    key: false,
    name: `shop_pay`,
    text: `Shop Pay`,
    url: `buy_with_shop_pay`,
}]

let addBuyNowButtonInterval = setInterval(() => {
    if (!window.location.href.includes(`/products/`) || document.querySelector(`.buyNowButton`)) return
    paymentMethods.forEach(paymentMethod => {
        let buyNowButton = document.createElement(`button`)
        buyNowButton.className = `buyNowButton`
        buyNowButton.innerText = `Buy Now with ${paymentMethod.text}`
        document.querySelector(`[data-comp="AddToCart"]`).append(buyNowButton)
        buyNowButton.addEventListener(`click`, window.doThing(paymentMethod))
    })
}, 250)

window.doThing = function (paymentMethod) {
    let rawCartItem = localStorage.getItem(`Cart|sand-cloud`)
    if (!rawCartItem) return
    let cartItem = JSON.parse(rawCartItem)
    let originalUpdatedTime = cartItem.updatedAt
    let checkoutUrl = cartItem.checkoutUrl
    let updateInterval = setInterval(() => {
        console.log(`waiting`)
        let rawCartItem = localStorage.getItem(`Cart|sand-cloud`)
        if (!rawCartItem) return
        let cartItem = JSON.parse(rawCartItem)
        let newUpdatedTime = cartItem.updatedAt
        if (originalUpdatedTime != newUpdatedTime) {
            clearInterval(updateInterval)
            console.log(`done`)
            window.location.href = `${checkoutUrl}?buy_now_redirect=${paymentMethod.name}`
        }
    }, 100)
    document.querySelector(`[data-comp="AddToCart"] button`).click()
}

if (window.location.href.includes(`buy_now_redirect`)) {
    let paymentMethod = paymentMethods.find(paymentMethod => window.location.href.includes(paymentMethod.name))
    if (!paymentMethod) return
    let metaTag = document.querySelector(`[name="shopify-checkout-authorization-token"]`)
    let metaContent = metaTag ? metaTag.getAttribute(`content`) : ``
    let url = new URL(window.location.href)
    url.search= ``
    url.searchParams.set(`key`, metaContent)
    url.pathname = `${window.location.pathname}/${paymentMethod.url}`
    window.location.href = url.href
    // let checkoutInterval = setInterval(() => {
    //     let shopPayButton = document.querySelector(`.dynamic-checkout__buttons [role="button"]`)
    //     if (!shopPayButton) return
    //     clearInterval(checkoutInterval)
    //     shopPayButton.click()
    // }, 100)
}

// https://shop.sandcloud.com/cart/c/f5a46381cd2f0a51efab047796befc15/buy_with_shop_pay
// https://shop.sandcloud.com/8199793/checkouts/a177d631de95e3945bf9d7c3052c33b1/amazon_payments/store?key=536ed1b952c87aa4ecd63ed11679f9e9
// <meta name="shopify-checkout-authorization-token" content="536ed1b952c87aa4ecd63ed11679f9e9">
// ShopifyPay.transactionParams