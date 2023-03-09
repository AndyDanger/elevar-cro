window.elevarCart = ""
let cartPromoInterval = setInterval(() => {
    let cartValue = localStorage.getItem(`___ELEVAR_GTM_SUITE--cart`)
    if (!cartValue || cartValue == window.elevarCart || !document.querySelector(`#free-shipping-message`)) return
    window.elevarCart = cartValue
    let cartPromoMessage = document.querySelector(`#cartPromoMessage`)
    if (!cartPromoMessage) {
        cartPromoMessage = document.createElement(`div`)
        cartPromoMessage.id = `cartPromoMessage`
        let freeShippingMessage = document.querySelector(`#free-shipping-message`)
        freeShippingMessage.parentElement.insertBefore(cartPromoMessage, freeShippingMessage)
    }

    let cart = jQuery.getJSON('/cart.js');
    cart.done(function () {
        window.cartResponse = cart.responseJSON;
        let subTotal = window.cartResponse.total_price
        if (subTotal < 12500) {
            cartPromoMessage.innerText = `You are $${(12500 - subTotal) / 100} away from $25 off your order and free shipping`
        } else if (subTotal < 25000) {
            cartPromoMessage.innerText = `You are $${(25000 - subTotal) / 100} away from $50 off your order and free shipping`
        } else if (subTotal < 30000) {
            cartPromoMessage.innerText = `You are $${(30000 - subTotal) / 100} away from $75 off your order and free shipping`
        } else {
            cartPromoMessage.innerText = `Congrats! You've received $75 off your order!`
        }
    })
}, 250)