var script = document.createElement('script');
script.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
document.head.appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(element);

var plpSecondaryImages = setInterval(function () {
    var productWraps = document.querySelectorAll('.grid-product__wrapper') // get product cards
    if (!productWraps.length) {
        return
    }
    clearInterval(plpSecondaryImages)
    productWraps.forEach(function (productWrap) {
        var pdpLink = productWrap.querySelector('.grid-product__image-link').href // get PDP links
        let request = jQuery.getJSON(`${pdpLink}.json`); // request the product's JSON
        request.done(function () {
            var productDetails = request.responseJSON;
            console.log(productDetails)
            var images = productDetails.product.images // gets all the product images
            if (!images || images.length < 1) { // If there aren't any secondary images then don't bother making it a carousel
                return
            }
            var imagesHtml = ``
            for(var i = 0; i < images.length && i < 4; i++) { // Can increase or decrease the number here to get more or less images in the carousel. BEWARE THAT MORE IMAGES = SLOWER LOAD TIMES!
                imagesHtml += `<a href="${pdpLink}"><img src="${images[i].src}" /></a>` // wrap the images in links so they can click each slide of the carousel
            }

            var imageWrapper = productWrap.querySelector('.grid-product__image-wrapper') // get the element currently wrapping the image
            imageWrapper.innerHTML = imagesHtml
            $(imageWrapper).slick({
                arrows: true, // Make sure to test that the arrows are easily clickable and that they aren't wrapped by a link. I.e. if they're wrapped by a link then when you try to click them you'll end up triggering the link instead
                dots: true
            })

        })
        // Make sure that any details below the carousel still link to the PDP. I.e. they usually have the product name and the price below the images and we still want those to be clickable
        // $(productWrap).find('.product-details').wrap(`<a href="${pdpLink}"></a>`)
    })
}, 250)
