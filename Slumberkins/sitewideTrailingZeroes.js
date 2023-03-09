var removeZerosInterval = setInterval(function () {
    var priceDivs = document.querySelectorAll('.grid-product__price-wrap > span > span, #ProductPrice, .ajaxcart__price, .ajaxcart__subtotal, .free-shipping-message span, .saso-cart-item-line-price, .saso-cart-original-total, .money, .afterpay-text1')
    priceDivs.forEach(function (div) {
        if (div.innerHTML.indexOf(".00") !== -1) {
            div.innerHTML = div.innerHTML.replace(".00", "")
        }
    })
}, 250)