var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(element);

var plpSecondaryImages = setInterval(function () {
    var productWraps = document.querySelectorAll('.product-list > .thumbnail > .product-wrap')
    if (!productWraps.length) {
        return
    }
    clearInterval(plpSecondaryImages)
    productWraps.forEach(function (productWrap) {
        var pdpLink = productWrap.querySelector('a[itemprop]').href
        let request = jQuery.getJSON(`${pdpLink}.json`);
        request.done(function () {
            var productDetails = request.responseJSON;
            console.log(productDetails)
            var images = productDetails.product.images
            if (!images || images.length < 1) {
                return
            }
            var imagesHtml = ``
            for(var i = 0; i < images.length && i < 4; i++) {
                imagesHtml += `<a href="${pdpLink}"><img src="${images[i].src}" /></a>`
            }

            var imageWrapper = productWrap.querySelector('.AspectRatio')
            imageWrapper.innerHTML = imagesHtml
            $(imageWrapper).slick({
                arrows: true,
                dots: true
            })

        })
        $(productWrap).find('.product-details').wrap(`<a href="${pdpLink}"></a>`)
    })
}, 250)
