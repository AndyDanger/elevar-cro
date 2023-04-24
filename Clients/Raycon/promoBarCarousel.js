let jqueryScript = document.createElement('script');
jqueryScript.type = "text/javascript";
jqueryScript.addEventListener("load", function (event) {
    let slickScript = document.createElement('script');
    slickScript.type = "text/javascript";
    slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    document.head.appendChild(slickScript);
});
jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.32/jquery.form.min.js';
document.getElementsByTagName('head')[0].appendChild(jqueryScript);

let slickCss = document.createElement("link");
slickCss.setAttribute("rel", "stylesheet");
slickCss.setAttribute("type", "text/css");
slickCss.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(slickCss);

let promoBarCarouselInterval = setInterval(() => {
    let promoBar = document.querySelector(`#shopify-section-info-bar .rte`)
    if (!promoBar || typeof jQuery != `function` || !$().slick) return
    clearInterval(promoBarCarouselInterval)
    promoBar.innerHTML = `
        <a href="https://rayconglobal.com/products/the-fitness-earbuds">FREE U.S. SHIPPING AND RETURNS</a>
        <a href="https://rayconglobal.com/products/the-fitness-earbuds">SITE WIDE SALE! GET 20% OFF TODAY</a>
        <a href="https://rayconglobal.com/products/the-fitness-earbuds">ADDITIONAL $10 OFF THE FITNESS EARBUDS</a>
    `
    $(promoBar).slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 1,
        arrows: true,
        dots: false
    })

}, 250)