let addBuyNowButtonInterval = setInterval(() => {
    if (!window.location.href.includes(`/products/`) || document.querySelector(`.buyNowButton`)) return
    let buyNowButton = document.createElement(`button`)
    buyNowButton.className = `buyNowButton`
    buyNowButton.innerHTML = `<span>Buy Now with <img src="https://i.imgur.com/UV4Xkpp.png" style="width: 82px; margin-left: 5px;"></span>`
    document.querySelector(`[data-comp="AddToCart"]`).append(buyNowButton)
    buyNowButton.addEventListener(`click`, window.doThing)
}, 250)

window.doThing = function () {
    let rawCartItem = localStorage.getItem(`Cart|sand-cloud`)
    if (!rawCartItem) return
    document.querySelector(`.spinnerOverlay`).classList.add(`triggered`)
    setTimeout(() => {
        document.querySelector(`.spinnerOverlay`).classList.remove(`triggered`)
    }, 5000)
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
            window.location.href = `${checkoutUrl}?buy_now_redirect=shop_pay`
        }
    }, 100)
        var tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-59546458-1') // insert their UA number here
    if (tracker) {
        tracker.send('event', 'pdp', 'buy now button', window.location.href) // replace event category and event action
    }
    document.querySelector(`[data-comp="AddToCart"] button`).click()
}

if (window.location.href.includes(`buy_now_redirect=shop_pay`)) {
    window.location.pathname = `${window.location.pathname}/buy_with_shop_pay`
    // let checkoutInterval = setInterval(() => {
    //     let shopPayButton = document.querySelector(`.dynamic-checkout__buttons [role="button"]`)
    //     if (!shopPayButton) return
    //     clearInterval(checkoutInterval)
    //     shopPayButton.click()
    // }, 100)
}
