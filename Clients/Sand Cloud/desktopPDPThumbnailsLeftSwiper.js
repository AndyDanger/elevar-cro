if (!window.swiperScriptAdded) {
    window.swiperScriptAdded = true

    let jqueryScript = document.createElement('script');
    jqueryScript.type = "text/javascript";
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.getElementsByTagName('head')[0].appendChild(jqueryScript);

    let swiperScript = document.createElement('script')
    swiperScript.type = "text/javascript"
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'
    document.getElementsByTagName('head')[0].appendChild(swiperScript)

    let swiperCss = document.createElement("link");
    swiperCss.setAttribute("rel", "stylesheet");
    swiperCss.setAttribute("type", "text/css");
    swiperCss.setAttribute("href", "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css");
    document.getElementsByTagName("head")[0].appendChild(swiperCss);

}

let swiperInterval = setInterval(() => {
    let thumbnailsWrapper = document.querySelector(`[data-comp="ProductImagesThumbs"]:not(.main-carousel)`)
    if (!thumbnailsWrapper || !Swiper) return
    thumbnailsWrapper.classList.add(`main-carousel`)
    let thumbnails = document.querySelectorAll(`[data-comp="ProductImageThumb"]`)
    $(thumbnails).wrapAll(`<div class="swiper-wrapper"></div>`)
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.add(`swiper-slide`)
    })

    let swiper = new Swiper(`[data-comp="ProductImagesThumbs"].main-carousel`, {
        // direction: `vertical`,
        freeMode: false,
        slidesPerView: 4,
    })

}, 250)