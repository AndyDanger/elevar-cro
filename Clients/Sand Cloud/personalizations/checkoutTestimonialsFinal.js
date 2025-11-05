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

    testimonials(orderSummary)

}, 250)


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
        <div><div class="stars">★★★★★</div>“Love my towel!! It's lightweight, gorgeous colors and has multiple uses!” -Nicole A.</div>
        <div><div class="stars">★★★★★</div>“So happy with my purchase, will 100% buy more and as gifts.” -JJ</div>
        <div><div class="stars">★★★★★</div>“I am obsessed with Sand Cloud, not only for their mission but also for their amazing products.” -Ashley</div>
    `
    orderSummary.append(desktopTestimonialsDiv)
    let mobileTestimonialsDiv = desktopTestimonialsDiv.cloneNode(true)
    mobileTestimonialsDiv.id = `mobileTestimonialsDiv`
    document.querySelector(`.main__content`).append(mobileTestimonialsDiv)
    $(desktopTestimonialsDiv).slick(slickSettings)
    $(mobileTestimonialsDiv).slick(slickSettings)
}