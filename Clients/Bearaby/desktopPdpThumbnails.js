if (!window.slickScriptLoaded) {  // Load jQuery and Slick
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

window.desktopPdpThumbnailsVariant = `` // Keep track of the current variant so if they switch color or size we can update the carousels

let pdpThumbnailsInterval = setInterval(() => {
    let imageWrapper = document.querySelector(`.product-gallery-grid:not(.carousel-nav)`)
    if (!imageWrapper || window.desktopPdpThumbnailsVariant == window.location.href || typeof jQuery == `undefined` || !$().slick) return
    // clearInterval(pdpThumbnailsInterval)
    console.log(`inserting thumbnails`)
    window.desktopPdpThumbnailsVariant = window.location.href

    if (imageWrapper.classList.contains(`carousel-main`)) { // If the carousel already exists, we need to remove it and create a new one. This happens when they switch colors.
        console.log(`swapped variants`)
        $(imageWrapper).slick('unslick')
        document.querySelector(`.carousel-nav`) ? document.querySelector(`.carousel-nav`).remove() : null
    }

    imageWrapper.querySelectorAll(`img, video`).forEach(element => { // Prevent modal functionality
        element.setAttribute(`onclick`, `console.log("clicked")`)
    })

    let thumbnailsWrapper = imageWrapper.cloneNode(true)
    thumbnailsWrapper.classList.remove(`carousel-main`)
    imageWrapper.classList.add(`carousel-main`)
    thumbnailsWrapper.classList.add(`carousel-nav`)
    imageWrapper.parentElement.insertBefore(thumbnailsWrapper, imageWrapper)

    $(imageWrapper).slick({
        arrows: false,
        asNavFor: '.carousel-nav',
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

    $(thumbnailsWrapper).slick({
        slidesToShow: thumbnailsWrapper.querySelectorAll(`img`).length < 5 ? thumbnailsWrapper.querySelectorAll(`img`).length - 1 : 5,
        slidesToScroll: 1,
        asNavFor: '.carousel-main',
        dots: false,
        // centerMode: true,
        focusOnSelect: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
    })

    window.dispatchEvent(new Event('resize')); // Refresh the window and the carousels to make sure they size correctly
    document.querySelector(`.carousel-nav`).slick.refresh()
    document.querySelector(`.carousel-main`).slick.refresh()

}, 250)

everyday_earbuds_pageview