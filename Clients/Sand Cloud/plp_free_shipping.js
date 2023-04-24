var plpShippingInterval = setInterval(function () {
    var productCards = document.querySelectorAll('[data-comp="ProductItem"]:not(.freeShippingInserted)')
    if (!productCards.length) {
        return
    }
    productCards.forEach(function (card) {
        var priceDiv = card.querySelector('[data-comp="Locale.Variant"] > div > p:nth-child(2), [data-comp="Locale.Variant"] > p')
        if (!priceDiv) {
            return
        }
        var price = parseFloat(priceDiv.innerText.replace('$', ''))
        if (price > 100) {
            var freeShippingDiv = document.createElement('div')
            freeShippingDiv.className = "freeShippingDiv"
            freeShippingDiv.innerText = "🚛 This item ships free!"
            card.querySelector('[data-comp="Locale.Variant"]').parentElement.insertBefore(freeShippingDiv, card.querySelector('[data-comp="Locale.Variant"]'))
            card.classList.add('freeShippingInserted')
        }
    })

}, 500)