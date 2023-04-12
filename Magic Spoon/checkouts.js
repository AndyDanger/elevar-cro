
let counter = 0
let newInterval = setInterval(function () {
    let shippingMethods = document.querySelectorAll('.content-box__row')
    if (shippingMethods.length < 3) {
        if (counter++ >= 25) {
            clearInterval(newInterval)
        }
        return
    }
    clearInterval(newInterval)


    if (!document.title.includes("Payment") && !shippingMethods[1].innerText.includes('4.98')) {
        let [dhlShipping, testShipping] = shippingMethods[1].innerText.includes(`4.99`) ? [shippingMethods[1], shippingMethods[2]] : [shippingMethods[2], shippingMethods[1]]
        dhlShipping.style.display = 'none'
        let radioButton = testShipping.querySelector(`input[type="radio"]`)
        radioButton.click()
    } else if (!document.title.includes("Payment") && shippingMethods[1].innerText.includes('4.98')) {
        for (let i = 2; i < shippingMethods.length; i++) {
            shippingMethods[i].style.display = 'none';
        }
    }



}, 250)

let counter1 = 0
let newInterval1 = setInterval(function () {
    let shippingMethods = document.getElementsByClassName('shipping-option')
    let radioButtons = document.querySelectorAll(`.shipping-option input:not([disabled])`)
    if (shippingMethods.length < 2 || radioButtons.length < 2) {
        if (counter1++ >= 25) {
            clearInterval(newInterval1)
        }
        return
    }
    clearInterval(newInterval1)

    console.log(`clicking radio button`)

    if (document.documentURI.includes("/r/pay") && !shippingMethods[0].innerText.includes('4.98')) {

        let [dhlShipping, testShipping] = shippingMethods[0].innerText.includes(`4.99`) ? [shippingMethods[0], shippingMethods[1]] : [shippingMethods[1], shippingMethods[0]]

        dhlShipping.style.display = 'none'
        let radioButton2 = testShipping.querySelector(`input[type="radio"]`)
        radioButton2.click()
    } else if (document.documentURI.includes("/r/pay") && shippingMethods[0].innerText.includes('4.98')) {
        for (let i = 1; i < shippingMethods.length; i++) {
            shippingMethods[i].style.display = 'none';
        }
    }
}, 250)