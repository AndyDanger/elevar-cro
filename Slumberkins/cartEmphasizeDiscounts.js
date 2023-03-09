let cartDiscountInterval = setInterval(function () {
    let products = document.querySelectorAll('.ajaxcart__product')
    let total = 0
    products.forEach(product => {
        if (product.hasAttribute(`priceDifference`)) {
            total += parseFloat(product.getAttribute(`priceDifference`))
            return
        }
        let pdpLink = product.querySelector('a').href // get PDP link
        let request = jQuery.getJSON(`${pdpLink}.json`) // request the product's JSON
        request.done(function () {
            let productDetails = request.responseJSON
            // console.log(productDetails)
            let compareAtPrice = productDetails.product.variants[0].compare_at_price
            if (!compareAtPrice) return
            let price = productDetails.product.variants[0].price
            let quantity = product.querySelector(`[aria-label="quantity"]`).value
            let priceDifference = (compareAtPrice - price) * quantity
            total += priceDifference
            product.setAttribute(`priceDifference`, priceDifference)
            product.classList.add(`discountLabelAdded`)
            let priceDiv = product.querySelector(`.ajaxcart__price`)
            let clonedPriceDiv = product.querySelector(`.discountedPrice`) || priceDiv.cloneNode(true)
            clonedPriceDiv.classList.add(`discountedPrice`)
            clonedPriceDiv.innerText = `$${compareAtPrice}`
            priceDiv.parentElement.insertBefore(clonedPriceDiv, priceDiv)
        })
    })

    let cartSubtotal = document.querySelector(`.ajaxcart__footer .grid--full`)
    if (!cartSubtotal) return
    console.log(total)
    let subTotalClone = document.querySelector(`.subTotalClone`) || cartSubtotal.cloneNode(true)
    subTotalClone.classList.add(`subTotalClone`)
    cartSubtotal.parentElement.insertBefore(subTotalClone, cartSubtotal)
    subTotalClone.querySelector(`.two-thirds p`).innerText = `Discounts`
    subTotalClone.querySelector(`.one-third p`).innerText = `$${(Math.round(total * 100) / 100).toFixed(2)}`
}, 250)