let cartShopPayButtoninterval = setInterval(() => {
    if (window.location.href.includes(`checkouts`) || document.querySelector(`#cart-notification form[action="/checkout"] .buyNowButton`)) return
    let checkoutButton = document.querySelector(`#cart-notification form[action="/checkout"] input[value="checkout" i]`)
    if (!checkoutButton) return
    let buyNowButton = document.createElement(`button`)
    buyNowButton.className = `buyNowButton`
    buyNowButton.innerHTML = `<span>Checkout Now with <img src="https://i.imgur.com/UV4Xkpp.png" style="width: 82px; margin-left: 5px;"></span>`
    checkoutButton.parentElement.append(buyNowButton)
    buyNowButton.addEventListener(`click`, window.buyNowCancelEvents)
}, 250)


let cartShopPayButtoninterval2 = setInterval(() => {
    if (window.location.href.includes(`checkouts`) || document.querySelector(`#customer_login .buyNowButton`)) return
    let checkoutButton = document.querySelector(`#cart-notification #customer_login > div`)
    if (!checkoutButton) return
    let buyNowButton = document.createElement(`button`)
    buyNowButton.className = `buyNowButton`
    buyNowButton.innerHTML = `<span>Checkout Now with <img src="https://i.imgur.com/UV4Xkpp.png" style="width: 82px; margin-left: 5px;"></span>`
    checkoutButton.parentElement.insertBefore(buyNowButton, checkoutButton)
    buyNowButton.addEventListener(`click`, window.validateBuyNow)
}, 250)

window.validateBuyNow = function() {
    if (!document.querySelector("#customer_login").checkValidity()) return
    sessionStorage.setItem(`buy_now_redirect`, true)
    document.querySelector(`#customer_login input[value="Checkout"]`).click()
    window.buyNow()
}

window.buyNowCancelEvents = function(event) {
    event.preventDefault()
    event.stopPropagation()
    window.buyNow()
}

window.buyNow = function () {
    document.querySelector(`.spinnerOverlay`).classList.add(`triggered`)
    setTimeout(() => {
        document.querySelector(`.spinnerOverlay`).classList.remove(`triggered`)
    }, 5000)

    window.location.href = `https://ogee.com/checkout?buy_now_redirect=shop_pay`

    let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-79943963-1') // insert their UA number here
    if (tracker) {
        tracker.send('event', 'cart', 'shop pay button', window.location.href) // replace event category and event action
    }
}

if (window.location.href.includes(`buy_now_redirect=shop_pay`) || sessionStorage.getItem(`buy_now_redirect`)) {
    sessionStorage.removeItem(`buy_now_redirect`)
    window.location.pathname = `${window.location.pathname}/buy_with_shop_pay`
    let spinnerOverlayInterval = setInterval(() => {
        let spinnerOverlay = document.querySelector(`.spinnerOverlay`)
        if (!spinnerOverlay) return
        clearInterval(spinnerOverlayInterval)
        console.log(`spinner overlay found`)
        spinnerOverlay.classList.add(`triggered`)
        setTimeout(() => {
            spinnerOverlay.classList.remove(`triggered`)
        }, 5000)
    }, 200)
}
