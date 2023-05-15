if (!window.slickScriptLoaded) {
    window.slickScriptLoaded = true
    let jqueryScript = document.createElement('script')
    jqueryScript.type = "text/javascript"
    jqueryScript.addEventListener("load", function (event) {
        let slickScript = document.createElement('script')
        slickScript.type = "text/javascript"
        slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
        document.head.appendChild(slickScript)
    })
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js'
    document.getElementsByTagName('head')[0].appendChild(jqueryScript)

    let slickCss = document.createElement("link")
    slickCss.setAttribute("rel", "stylesheet")
    slickCss.setAttribute("type", "text/css")
    slickCss.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css")
    document.getElementsByTagName("head")[0].appendChild(slickCss)
}

window.currentVariantUrl = ``

let pdpThumbnailsInterval = setInterval(() => {
    let imageWrapper = document.querySelector(`.image-pane--desktop:not(.carousel-nav)`)
    if (!imageWrapper || window.currentVariantUrl == window.location.pathname || typeof jQuery == `undefined` || !$().slick) return
    // clearInterval(pdpThumbnailsInterval)
    window.currentVariantUrl = window.location.pathname

    if (imageWrapper.classList.contains(`carousel-main`)) {
        $(imageWrapper).slick('unslick')
        document.querySelector(`.carousel-nav`) ? document.querySelector(`.carousel-nav`).remove() : null
    }

    let thumbnailsWrapper = imageWrapper.cloneNode(true)
    imageWrapper.parentElement.insertBefore(thumbnailsWrapper, imageWrapper)
    imageWrapper.classList.add(`carousel-main`)
    thumbnailsWrapper.classList.add(`carousel-nav`)
    thumbnailsWrapper.classList.remove(`carousel-main`)

    $(imageWrapper).slick({
        arrows: false,
        asNavFor: '.carousel-nav',
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $(thumbnailsWrapper).slick({
        slidesToShow: thumbnailsWrapper.querySelectorAll(`img`).length - 1,
        slidesToScroll: 1,
        asNavFor: '.carousel-main',
        dots: false,
        // centerMode: true,
        focusOnSelect: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
    })


}, 250)