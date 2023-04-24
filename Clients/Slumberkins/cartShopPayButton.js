let cartShopPayButtoninterval = setInterval(() => {
    if (window.location.href.includes(`checkouts`) || document.querySelector(`.buyNowButton`)) return
    let checkoutButton = document.querySelector(`button.cart__checkout`)
    if (!checkoutButton) return
    let buyNowButton = document.createElement(`button`)
    buyNowButton.className = `buyNowButton`
    buyNowButton.innerHTML = `<span>Checkout Now with <img src="https://i.imgur.com/UV4Xkpp.png" style="width: 82px; margin-left: 5px;"></span>`
    checkoutButton.parentElement.append(buyNowButton)
    buyNowButton.addEventListener(`click`, window.buyNow)
}, 250)

window.buyNow = function (event) {
    event.preventDefault()
    event.stopPropagation()
    fetch(`https://slumberkins.com/cart`, {
        body: JSON.stringify({ checkout: 'Check Out' }),
        credentials: "same-origin",
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" },
    })
        .then((response) => response)
        .then((response) => {
            window.location.href = `${response.url}?buy_now_redirect=shop_pay`
        })
    document.querySelector(`.spinnerOverlay`).classList.add(`triggered`)
    setTimeout(() => {
        document.querySelector(`.spinnerOverlay`).classList.remove(`triggered`)
    }, 5000)

    let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-109175710-1') // insert their UA number here
    if (tracker) {
        tracker.send('event', 'pdp', 'buy now button', window.location.href) // replace event category and event action
    }
}

if (window.location.href.includes(`buy_now_redirect=shop_pay`)) {
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