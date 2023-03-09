var moveUpCheckoutInterval = setInterval(function() {

    var checkoutButton = document.querySelector('.checkout-button')
    if (!checkoutButton) {
        return
    }
    clearInterval(moveUpCheckoutInterval)
    var form = document.querySelector('.shopify-cart-form')
    form.insertBefore(checkoutButton, form.querySelector('.responsive-table'))

    $('.rewards-toggle-btn').click(function() {
        $(this).toggleClass('active')
    })
}, 250)