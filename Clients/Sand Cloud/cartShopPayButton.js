window.shopPayRedirect = function () {
    let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-59546458-1') // insert their UA number here
    if (tracker) {
        tracker.send('event', 'cart', 'buy now button click', window.location.href) // replace event category and event action
    }
    let rawCartItem = localStorage.getItem(`Cart|sand-cloud`)
    if (!rawCartItem) return
    let cartItem = JSON.parse(rawCartItem)
    let checkoutUrl = cartItem.checkoutUrl
    window.location.href = `${checkoutUrl}?buy_now_redirect=shop_pay`
}

if (window.location.href.includes(`buy_now_redirect`)) {
    let metaTag = document.querySelector(`[name="shopify-checkout-authorization-token"]`)
    let metaContent = metaTag ? metaTag.getAttribute(`content`) : ``
    let url = new URL(window.location.href)
    url.search = ``
    url.searchParams.set(`key`, metaContent)
    url.pathname = `${window.location.pathname}/buy_with_shop_pay`
    window.location.href = url.href
} else {
    setInterval(() => {
        let checkoutButton = document.querySelector(`[data-comp="Totals"] button`)
        if (!checkoutButton) return
        let shopPayButton = document.querySelector(`.cartShopPayButton`)
        if (shopPayButton) {
            shopPayButton.disabled = checkoutButton.disabled
            return
        }
        let cartShopPayButton = document.createElement(`button`)
        cartShopPayButton.className = `cartShopPayButton`
        cartShopPayButton.innerHTML = `<span>Checkout Now with <img src="https://i.imgur.com/UV4Xkpp.png" style="width: 82px; margin-left: 5px;"></span>`
        checkoutButton.parentElement.insertBefore(cartShopPayButton, checkoutButton.nextElementSibling)
        cartShopPayButton.addEventListener(`click`, window.shopPayRedirect)
    }, 250)
}

// https://shop.sandcloud.com/cart/c/f5a46381cd2f0a51efab047796befc15/buy_with_shop_pay
// <meta name="shopify-checkout-authorization-token" content="536ed1b952c87aa4ecd63ed11679f9e9">
// ShopifyPay.transactionParams