var cartSavingsInterval = setInterval(function () {
    var cartSubtotal = document.querySelector('[data-comp="Locale.CartTotals"]')
    if (!cartSubtotal) {
        return
    }
    var cartDiscount = document.querySelector('#cartDiscount')
    if (!cartDiscount) {
        cartDiscount = cartSubtotal.cloneNode(true)
        cartDiscount.id = "cartDiscount"
        cartSubtotal.parentElement.insertBefore(cartDiscount, cartSubtotal)
        cartDiscount.querySelector('p').innerText = "Savings"
    }

    var discountsTotal = 0
    var cartItems = document.querySelectorAll('[data-comp="Locale.CartLine"]')
    cartItems.forEach(function (item) {
        var prices = item.querySelectorAll('div > p')
        if (prices.length > 2) {
            var savings = prices[1]
            savings.classList.add('redSavings')
            discountsTotal += parseFloat(savings.innerText.replace('$', ''))
        }
    })
    var priceString = discountsTotal.toFixed(2).replace('.00', '').replace('-', '-$')
    var savingsTotal = cartDiscount.querySelector('p:nth-child(2)')
    if (savingsTotal.innerText != priceString) {
        savingsTotal.innerText = priceString
        savingsTotal.classList.add('redSavings')
    }
    if (discountsTotal < 0) {
        cartDiscount.classList.remove('hide')
    } else {
        cartDiscount.classList.add('hide')
    }
}, 250)