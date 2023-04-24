let jqueryScript = document.createElement('script');
jqueryScript.type = "text/javascript";
jqueryScript.addEventListener("load", function (event) {
    let slickScript = document.createElement('script');
    slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    document.head.appendChild(slickScript);
});
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(jqueryScript);

let slickCss = document.createElement("link");
slickCss.setAttribute("rel", "stylesheet");
slickCss.setAttribute("type", "text/css");
slickCss.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(slickCss);

let checkoutValuePropsInterval = setInterval(() => {
    let orderSummary = document.querySelector(`.order-summary__sections`)
    if (!orderSummary || typeof $ == `undefined` || !$().slick) return
    clearInterval(checkoutValuePropsInterval)

    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`variant`)
    if (variant) {
        sessionStorage.setItem(`valuePropsVariant`, variant)
    }
    let storageVariant = sessionStorage.getItem(`valuePropsVariant`)
    if (storageVariant) {
        testimonials(orderSummary)
        return
    }
    valueProps(orderSummary)
}, 250)


function valueProps(orderSummary) {
    let desktopValuePropsDiv = document.createElement(`div`)
    desktopValuePropsDiv.id = `desktopValuePropsDiv`
    desktopValuePropsDiv.innerHTML =
        `
        <div>🚛 Free U.S. Shipping on orders $75+</div>
        <div>🔁 Free & Easy Returns and Exchanges</div>
        <div>👍 Customer Satisfaction Guaranteed</div>
    `
    orderSummary.append(desktopValuePropsDiv)
    let mobileValuePropsDiv = desktopValuePropsDiv.cloneNode(true)
    mobileValuePropsDiv.id = `mobileValuePropsDiv`
    document.querySelector(`.main__content`).append(mobileValuePropsDiv)
}

function testimonials(orderSummary) {
    let slickSettings = {
        arrows: false,
        autoplay: true,
        dots: false,
        infinite: true, 
    }
    let desktopTestimonialsDiv = document.createElement(`div`)
    desktopTestimonialsDiv.id = `desktopTestimonialsDiv`
    desktopTestimonialsDiv.innerHTML =
        `
        <div>⭐⭐⭐⭐⭐</br>“CUUP is the best! Do not hesitate." -Laurie</div>
        <div>⭐⭐⭐⭐⭐</br>"I'm blown away by the additional resources this company provides to customers and would-be customers. " -Julie</div>
        <div>⭐⭐⭐⭐⭐</br>"Customer service was incredible." -Jade</div>
    `
    orderSummary.append(desktopTestimonialsDiv)
    let mobiletestimonialsDiv = desktopTestimonialsDiv.cloneNode(true)
    mobiletestimonialsDiv.id = `mobiletestimonialsDiv`
    document.querySelector(`.main__content`).append(mobiletestimonialsDiv)
    $(desktopTestimonialsDiv).slick(slickSettings)
    $(mobiletestimonialsDiv).slick(slickSettings)
}