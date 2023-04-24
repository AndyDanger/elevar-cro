var script = document.createElement('script');
script.type = "text/javascript";
script.addEventListener("load", function (event) {
    var script2 = document.createElement('script');
    script2.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    document.head.appendChild(script2);
});
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(element);

var plpSecondaryImages = setInterval(function () {
    var productWraps = document.querySelectorAll('.product-grid-item')
    if (!productWraps.length || typeof $ == "undefined" || !$().slick) {
        return
    }
    clearInterval(plpSecondaryImages)
    productWraps.forEach(function (productWrap) {
        var pdpLink = productWrap.querySelector('a').href
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

            let productBadge = productWrap.querySelector(`.product__badge`)
            let productBadgeHtml = productBadge.outerHTML

            var imageWrapper = productWrap.querySelector('.product__grid__image')
            imageWrapper.innerHTML = imagesHtml
            $(imageWrapper).slick({
                arrows: true,
                dots: true
            })

            if (productBadgeHtml) {
                let newBadge = document.createElement('div')
                newBadge.innerHTML = productBadgeHtml
                imageWrapper.append(newBadge)
            }

        })
        // $(productWrap).find('.product-details').wrap(`<a href="${pdpLink}"></a>`)
    })
}, 250)