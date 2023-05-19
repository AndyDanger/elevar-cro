if (!window.slickScriptAdded) {
    window.slickScriptAdded = true

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

}

let slickInterval = setInterval(() => {
    let thumbnailsWrapper = document.querySelector(`[data-comp="ProductImagesThumbs"]`)
    if (!thumbnailsWrapper || typeof jQuery == `undefined` || !$().slick) return

    let thumbnails = document.querySelectorAll(`[data-comp="ProductImageThumb"]`)
    thumbnails.forEach(thumbnail => {
       $(thumbnail).wrap(`<div class='thumbnailWrapper'></div>`)
    })


    clearInterval(slickInterval)
    $(thumbnailsWrapper).slick({
        arrows:true,
        dots: false,
        slidesToShow: 5,
        vertical: true,
        verticalSwiping: true
    });

}, 250)