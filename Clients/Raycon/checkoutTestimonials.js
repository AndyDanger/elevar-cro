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

let checkoutStylingInterval = setInterval(() => {
    let breadcrumbs = document.querySelector(`nav`)
    let button = document.querySelector(`#continue_button`)
    let orderSummary = document.querySelector(`.sidebar__content`)
    if (!breadcrumbs || !button || !orderSummary) return
    clearInterval(checkoutStylingInterval)
    let clone = breadcrumbs.cloneNode(true)
    orderSummary.parentElement.insertBefore(clone, orderSummary)
    let buttonClone = button.cloneNode(true)
    buttonClone.classList.add(`clonedButton`)
    orderSummary.parentElement.append(buttonClone)
    buttonClone.addEventListener(`click`, function () {
        button.click()
    })
}, 250)

let checkoutValuePropsInterval = setInterval(() => {
    let orderSummary = document.querySelector(`.order-summary__sections`)
    if (!orderSummary || typeof $ == `undefined` || !$().slick) return
    clearInterval(checkoutValuePropsInterval)
    testimonials(orderSummary)
}, 250)


function testimonials2(orderSummary) {
    let slickSettings = {
        arrows: true,
        // autoplay: true,
        dots: false,
        infinite: false,
    }
    let desktopTestimonialsDiv = document.createElement(`div`)
    desktopTestimonialsDiv.id = `desktopTestimonialsDiv`
    desktopTestimonialsDiv.innerHTML =
        `<div class="testimonialHeader">OUR CUSTOMERS HAVE SPOKEN</div>
        <div class="testimonialWrapper">
            <div class="testimonialDiv">
                <div class="testimonialTitle">STEFANA</div>
                "I'm very happy with these earbuds they do their job for what I need it. I'm very happy!"
            </div>
            <div class="testimonialDiv">
                <div class="testimonialTitle">TIFFANEY</div>
                "Absolutely LOVE these!!! Superb sound quality and battery life is amazing"
            </div>
            <div class="testimonialDiv">
                <div class="testimonialTitle">CHASE</div>
                "Love these ear buds. Great comfort and sound quality. They work so great I'm looking forward to getting more rayon products"
            </div>
        </div>
    `
    let desktopFooter = orderSummary.querySelector(`.total-line-table__footer`)
    desktopFooter.parentElement.insertBefore(desktopTestimonialsDiv, desktopFooter)
    // let mobileTestimonialsDiv = desktopTestimonialsDiv.cloneNode(true)
    // mobileTestimonialsDiv.id = `mobileTestimonialsDiv`
    // document.querySelector(`.main__content`).append(mobileTestimonialsDiv)
    $(`#desktopTestimonialsDiv .testimonialWrapper`).slick(slickSettings)
    // $(`#mobileTestimonialsDiv .testimonialWrapper`).slick(slickSettings)
}

function testimonials(orderSummary) {
    let slickSettings = {
        arrows: true,
        autoplay: true,
        dots: false,
        infinite: true,
    }
    let desktopTestimonialsDiv = document.createElement(`div`)
    desktopTestimonialsDiv.id = `desktopTestimonialsDiv`
    desktopTestimonialsDiv.innerHTML =
        `
        <div class="testimonialHeader">OUR CUSTOMERS HAVE SPOKEN</div>
        <div class="testimonialWrapper">
            <div class="testimonialDiv">
                <div class="testimonialTitle">STEFANA</div>
                "I'm very happy with these earbuds they do their job for what I need it. I'm very happy!"
            </div>
            <div class="testimonialDiv">
                <div class="testimonialTitle">TIFFANEY</div>
                "Absolutely LOVE these!!! Superb sound quality and battery life is amazing"
            </div>
            <div class="testimonialDiv">
                <div class="testimonialTitle">CHASE</div>
                "Love these ear buds. Great comfort and sound quality. They work so great I'm looking forward to getting more rayon products"
            </div>
        </div>
    `
    orderSummary.append(desktopTestimonialsDiv)
    $(`#desktopTestimonialsDiv .testimonialWrapper`).slick(slickSettings)
}