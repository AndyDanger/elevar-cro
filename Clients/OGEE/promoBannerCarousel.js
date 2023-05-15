let jqueryScript = document.createElement('script');
jqueryScript.type = "text/javascript";
jqueryScript.addEventListener("load", function (event) {
    let slickScript = document.createElement('script');
    slickScript.type = "text/javascript";
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

let promoBannerCarouselInterval = setInterval(() => {
    let promoBanner = document.querySelector(`.announcement-bar__message`)
    if (!promoBanner || typeof $ == "undefined" || !$().slick) return
    clearInterval(promoBannerCarouselInterval)

    let spans = promoBanner.querySelectorAll(`span`)
    spans.forEach(span => {
        span.className = `line_1`
        $(span).wrap(`<a href="https://ogee.com/collections/gift-sets"></a>`)
    })
    let newMessage = document.createElement(`a`)
    newMessage.href = "https://ogee.com/collections/new-products"
    newMessage.innerHTML = `<span class="line_1">SHOP NEW ARRIVALS</span>`
    promoBanner.append(newMessage)
    promoBanner.querySelector(`br`).remove()
    $(`.announcement-bar__message a`).wrapAll(`<div id="promoBarCarouselW"></div>`)
    $(`#promoBarCarouselW`).slick({
        arrows: false,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500
    })
}, 250)