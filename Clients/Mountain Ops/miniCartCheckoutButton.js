var miniCartCheckoutButtonInterval = setInterval(function () {
    var buttons = document.querySelector('.widget_shopping_cart_content .buttons')
    if (!buttons || document.querySelector('a.checkout')) {
        return
    }
    clearInterval(miniCartCheckoutButtonInterval)
    // do something with buttons
    var checkoutButton = document.createElement('a')
    checkoutButton.id = "checkoutButton"
    checkoutButton.className = "button"
    checkoutButton.href = "https://mtnops.com/checkout"
    checkoutButton.innerText = "Checkout"
    buttons.append(checkoutButton)
}, 250)
