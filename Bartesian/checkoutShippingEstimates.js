
let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)

    let message = `Standard Shipping (delivers within 7 business days)`
    let checkoutShippingInterval = setInterval(() => {
        let shippingLabel = document.querySelector(`[data-shipping-method-label-title="Standard Shipping"]`)
        if (!shippingLabel) return
        clearInterval(checkoutShippingInterval)
        shippingLabel.innerText = message
    }, 250)

    let checkoutShippingInterval2 = setInterval(() => {
        let shippingLabel = document.querySelector(`[data-review-section="shipping-cost"]`)
        if (!shippingLabel) return
        clearInterval(checkoutShippingInterval2)
        if (!shippingLabel.innerText.includes(`Standard Shipping`)) return
        shippingLabel.firstChild.textContent = message
    }, 250)
}

let variant2 = () => {
    console.log(`variant2`)

    let message = `Standard Shipping (delivers within 5-7 business days)`
    let checkoutShippingInterval = setInterval(() => {
        let shippingLabel = document.querySelector(`[data-shipping-method-label-title="Standard Shipping"]`)
        if (!shippingLabel) return
        clearInterval(checkoutShippingInterval)
        shippingLabel.innerText = message
    }, 250)

    let checkoutShippingInterval2 = setInterval(() => {
        let shippingLabel = document.querySelector(`[data-review-section="shipping-cost"]`)
        if (!shippingLabel) return
        clearInterval(checkoutShippingInterval2)
        if (!shippingLabel.innerText.includes(`Standard Shipping`)) return
        shippingLabel.firstChild.textContent = message
    }, 250)
}

let variant3 = () => {
    console.log(`variant3`)
}

let variants = [control, variant1, variant2, variant3]

let main = () => {
    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`test_variant`)
    if (variant) {
        sessionStorage.setItem(`test_variant`, variant)
    }
    let storageVariant = sessionStorage.getItem(`test_variant`) || 1 // default to variant 1
    variants[storageVariant]() // call the variant's function
}

main()