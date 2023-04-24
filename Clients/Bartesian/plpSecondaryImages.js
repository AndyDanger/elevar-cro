let jqueryInterval = setInterval(() => {
    if (typeof jQuery !== "function") return
    clearInterval(jqueryInterval)
    let slickScript = document.createElement('script');
    slickScript.type = "text/javascript";
    slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    document.head.appendChild(slickScript);

    let slickCss = document.createElement("link");
    slickCss.setAttribute("rel", "stylesheet");
    slickCss.setAttribute("type", "text/css");
    slickCss.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
    document.getElementsByTagName("head")[0].appendChild(slickCss);

    let plpSecondaryImagesInterval = setInterval(function () {
        let productWraps = document.querySelectorAll('.product-grid .grid__item:not(.carouselAdded)') // get product cards
        if (!productWraps.length || typeof jQuery !== "function" || typeof $().slick !== "function") return
        // clearInterval(plpSecondaryImages)
        productWraps.forEach(function (productWrap, index) {
            if (index > 4) return
            let pdpLink = productWrap.querySelector('.card-wrapper > a') // get PDP links
            let request = jQuery.getJSON(`${pdpLink.href}.json`); // request the product's JSON
            productWrap.classList.add(`carouselAdded`)
            request.done(function () {
                let productDetails = request.responseJSON;
                console.log(productDetails)
                let images = productDetails.product.images // gets all the product images
                if (!images || images.length < 2) { // If there aren't any secondary images then don't bother making it a carousel
                    return
                }

                let imagesHtml = ``
                for (let i = 0; i < images.length && i < 4; i++) { // Can increase or decrease the number here to get more or less images in the carousel. BEWARE THAT MORE IMAGES = SLOWER LOAD TIMES!
                    imagesHtml += `<a href="${pdpLink.href}"><img src="${images[i].src}" /></a>` // wrap the images in links so they can click each slide of the carousel
                }

                let imageWrapper = productWrap.querySelector('.card__inner') // get the element currently wrapping the image
                imageWrapper.innerHTML = imagesHtml
                $(imageWrapper).slick({
                    arrows: true, // Make sure to test that the arrows are easily clickable and that they aren't wrapped by a link. I.e. if they're wrapped by a link then when you try to click them you'll end up triggering the link instead
                    dots: true,
                    mobileFirst: true
                }).slick(`setPosition`)
                pdpLink.removeAttribute(`href`)

            })
            // Make sure that any details below the carousel still link to the PDP. I.e. they usually have the product name and the price below the images and we still want those to be clickable
            // $(productWrap).find('.product-details').wrap(`<a href="${pdpLink}"></a>`)
        })

    }, 250)
}, 250)