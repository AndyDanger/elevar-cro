let script = document.createElement('script');
script.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
document.head.appendChild(script);

let element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(element);

let plpSecondaryImages = setInterval(function () {
    let productWraps = document.querySelectorAll('.product-grid-item') // get product cards
    if (!productWraps.length) {
        return
    }
    clearInterval(plpSecondaryImages)
    productWraps.forEach(function (productWrap) {
        let pdpLink = productWrap.querySelector('.product-element-top > a').href // get PDP links
        let swatches = productWrap.querySelectorAll('.swatch-on-grid')
        let images = Array.from(swatches).map(swatch => swatch.getAttribute('data-bgset'))

        if (!images || images.length < 1) { // If there aren't any secondary images then don't bother making it a carousel
            return
        }
        let imagesHtml = ``
        for (let i = 0; i < 4; i++) { // Can increase or decrease the number here to get more or less images in the carousel. BEWARE THAT MORE IMAGES = SLOWER LOAD TIMES!
            imagesHtml += `<a href="${pdpLink}"><img src="${images[i]}" /></a>` // wrap the images in links so they can click each slide of the carousel
        }

        let imageWrapper = productWrap.querySelector('.product-element-top') // get the element currently wrapping the image
        imageWrapper.innerHTML = imagesHtml
        $(imageWrapper).slick({
            arrows: true, // Make sure to test that the arrows are easily clickable and that they aren't wrapped by a link. I.e. if they're wrapped by a link then when you try to click them you'll end up triggering the link instead
            dots: true,
            // lazyLoad: 'progressive'
        })


    })

    // $('.swatch-on-grid').on('click', function () {
    //     let background = $(this).attr('data-bgset')
    //     let carousel = $(this).closest('.product-grid-item').find('.slick-slider')
    //     let link = carousel.find('a')
    //     $(carousel).slick('slickRemove', 0)
    //     $(carousel).slick('slickAdd', `<a href="${link.attr('href')}"><img src="${background}" /></a>`, 0, true)
    //     $(carousel).slick('slickGoTo', 0)
    // })

}, 250)
