let variants = [
    {
        info: true,
        shipping: true,
        payment: true
    },
    {
        info: false,
        shipping: false,
        payment: false
    },
    {
        info: true,
        shipping: true,
        payment: false
    },
    {
        info: false,
        shipping: true,
        payment: true
    }
]
let checkoutOrderSummaryInterval = setInterval(() => {
    let orderSummaryToggle = document.querySelector(`.order-summary-toggle`)
    if (!orderSummaryToggle || !document.querySelector(`#order-summary`)) return
    clearInterval(checkoutOrderSummaryInterval)
    let url = new URL(window.location.href)
    let step = url.searchParams.get(`step`)
    let variant = url.searchParams.get(`variant`)
    if (variant) {
        sessionStorage.setItem(`orderSummaryVariant`, variant)
    }
    let storageVariant = sessionStorage.getItem(`orderSummaryVariant`)
    let selectedVariant = storageVariant ? variants[storageVariant] : variants[1]
    let shouldCollapse = true
    if (!step || step.includes(`info`)) {
        shouldCollapse = selectedVariant.info
    } else if (step.includes(`shipping_method`)) {
        shouldCollapse = selectedVariant.shipping
    } else if (step.includes(`payment_method`)) {
        shouldCollapse = selectedVariant.payment
    }
    if ((shouldCollapse && orderSummaryToggle.classList.contains(`order-summary-toggle--hide`)) || (!shouldCollapse && orderSummaryToggle.classList.contains(`order-summary-toggle--show`))) {
        orderSummaryToggle.click()
    }

}, 250)