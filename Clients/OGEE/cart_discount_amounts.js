var discountAmountInterval = setInterval(function() {
    var cartSubtotal = document.querySelector('.cart_subtotal')
    if (!cartSubtotal) {
        return
    }
    var cartDiscount = document.querySelector('#cartDiscount')
    if (!cartDiscount) {
        cartDiscount = cartSubtotal.cloneNode(true)
        cartDiscount.id = "cartDiscount"
        cartDiscount.querySelector('.font-helvetica').innerText = "Savings"
        cartDiscount.querySelector('.money').classList.add('savingsTotal')
        cartDiscount.querySelector('.money').classList.remove('money')
        cartSubtotal.parentElement.insertBefore(cartDiscount, cartSubtotal)
    }

    var discountsTotal = 0
        // var cartItems = document.querySelectorAll('.CartItem__Title')
        // cartItems.forEach(function(item) {
        //     var matches = item.innerText.match(/(\d+) value/i)
        //     if (matches && matches.length) {
        //         discountsTotal += parseFloat(matches[1])
        //     }
        // })
    var cartItems = document.querySelectorAll('.CartItem')
    cartItems.forEach(function(item) {
        var originalPrice = item.querySelector('.CartItem__OriginalPrice')
        if (originalPrice) {
            var newPrice = item.querySelector('.CartItem__Price')
            var quantity = item.querySelector('.QuantitySelector__CurrentQuantity').value
            discountsTotal += (parseFloat(originalPrice.innerText.replace('$', '')) - parseFloat(newPrice.innerText.replace('$', ''))) * quantity
        }
    })
    var priceString = "-$" + discountsTotal.toFixed(2).replace('.00', '')
    var savingsTotal = cartDiscount.querySelector('.savingsTotal')
    if (savingsTotal.innerText != priceString) {
        savingsTotal.innerText = priceString
    }
}, 250)