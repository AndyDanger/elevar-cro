var lineItemsInterval = setInterval(function () {
    var subtotal = document.querySelector('.grow-aov__cart-total')
    if (!subtotal) {
        return
    }
    // var shipping = document.querySelector('.grow-aov__cart-shipping') || subtotal.cloneNode(true)
    // shipping.className = 'grow-aov__cart-shipping'
    var beforeSavings = document.querySelector('.grow-aov__cart-before-savings') || subtotal.cloneNode(true)
    beforeSavings.className = 'grow-aov__cart-before-savings'
    // shipping.querySelector('dt > div').innerText = "Shipping"
    // shipping.querySelector('dd span').innerText = "FREE"
    beforeSavings.querySelector('dt > div').innerText = "Before Savings"
    var saving = parseFloat(document.querySelector('.grow-aov__checkout-final-savings').innerText.replace(/you're saving \$/i, '').replace(',', ''))
    var total = parseFloat(document.querySelector('.grow-aov__checkout-final-total').innerText.replace('$', '').replace(',', ''))
    beforeSavings.querySelector('dd span').innerText = '$' + (Math.round((saving + total) * 100) / 100)

    subtotal.parentElement.insertBefore(beforeSavings, subtotal)
    // subtotal.parentElement.insertBefore(shipping, subtotal.nextSibling)
    // total > 40 ? shipping.style.display = "flex" : shipping.style.display = "none"

}, 250)