let pdpFreeShippingCalloutInterval = setInterval(() => {
    let addToCartButton = document.querySelector(`button[name="add"]`)
    if (!addToCartButton) return
    clearInterval(pdpFreeShippingCalloutInterval)
    let freeShippingDiv = document.createElement(`div`)
    freeShippingDiv.id = `freeShippingDiv`
    freeShippingDiv.innerText = `🚛 This item ships free!`
    addToCartButton.parentElement.append(freeShippingDiv)
}, 250)