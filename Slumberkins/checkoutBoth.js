let checkoutValuePropsInterval = setInterval(() => {
    let testimonials = document.querySelector(`#desktopTestimonialsDiv`)
    if (!testimonials) return
    clearInterval(checkoutValuePropsInterval)
    valueProps(testimonials)
}, 250)


function valueProps(testimonials) {
    let desktopValuePropsDiv = document.createElement(`div`)
    desktopValuePropsDiv.id = `desktopValuePropsDiv`
    desktopValuePropsDiv.innerHTML =
        `
        <div>🚛 Free U.S. Shipping on orders $75+</div>
        <div>🔁 Free & Easy Returns and Exchanges</div>
        <div>👍 Customer Satisfaction Guaranteed</div>
    `
    testimonials.parentElement.insertBefore(desktopValuePropsDiv, testimonials)
    let mobileValuePropsDiv = desktopValuePropsDiv.cloneNode(true)
    mobileValuePropsDiv.id = `mobileValuePropsDiv`
    let mobileTestimonials = document.querySelector(`#mobiletestimonialsDiv`)
    mobileTestimonials.parentElement.insertBefore(mobileValuePropsDiv, mobileTestimonials)
}