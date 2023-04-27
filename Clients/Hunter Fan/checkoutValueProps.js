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
        <div class="valuePropsTitle">We've Got You Covered</div>
        <div class="valuePropsWrapper">
            <div>
                <img src="https://i.imgur.com/BibhWJ2.png" />
                <div class="valuePropsDiv">Free Shipping $199+</div>
            </div>
            <div>
                <img src="https://i.imgur.com/aKYH98v.png" />
                <div class="valuePropsDiv">Hassle-Free Returns</div>
            </div>
            <div>
                <img src="https://i.imgur.com/A6Nnueb.png" />
                <div class="valuePropsDiv">Limited Lifetime Warranty</div>
            </div>
        </div>
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
        <div><div class="stars">★★★★★</div>“Amazing product and super quick shipping!!” -Jessica G.</div>
        <div><div class="stars">★★★★★</div>“Love my fan!! Keep my entire house cool!” -Nicole A.</div>
        <div><div class="stars">★★★★★</div>“So happy with my purchase, will 100% buy more” -JJ</div>
        <div><div class="stars">★★★★★</div>“I am obsessed with Hunter Fan, not only for their fans but also for their amazing lights.” -Ashley</div>
    `
    orderSummary.append(desktopTestimonialsDiv)
    let mobileTestimonialsDiv = desktopTestimonialsDiv.cloneNode(true)
    mobileTestimonialsDiv.id = `mobileTestimonialsDiv`
    document.querySelector(`.main__content`).append(mobileTestimonialsDiv)
    $(desktopTestimonialsDiv).slick(slickSettings)
    $(mobileTestimonialsDiv).slick(slickSettings)
}