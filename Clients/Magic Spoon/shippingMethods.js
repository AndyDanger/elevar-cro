let counter = 0
let newInterval = setInterval(function () {
    let shippingMethods = document.querySelectorAll('[for*=shipping_methods]')
    if (!shippingMethods.length) {
        if (counter++ >= 25) {
            clearInterval(newInterval)
        }
        return
    }
    clearInterval(newInterval)
    // do something with buttons

    let [dhlShipping, testShipping] = shippingMethods[0].innerText.includes(`DHL`) ? [shippingMethods[0], shippingMethods[1]] : [shippingMethods[1], shippingMethods[0]]

    dhlShipping.parentElement.style.display = 'none'
    testShipping.parentElement.style.borderRadius = '5px';
    let radioButton = testShipping.querySelector(`input[type="radio"]`)
    radioButton.click()
}, 250)