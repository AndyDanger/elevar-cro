var script = document.createElement('script');
script.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
document.head.appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(element);

var pdpCarouselInterval = setInterval(function() {
    var thumbnails = document.querySelectorAll('.pdp__product-image picture figure img, .pdp__product-visuals #pdp-video')
    if (thumbnails.length <= 1 || !$().slick) {
        return
    }
    clearInterval(pdpCarouselInterval)
    var productGallery = $('.pdp__product-visuals')
    var newDiv = document.querySelector('#newDiv')
    if (!newDiv) {
        newDiv = document.createElement('div')
        newDiv.id = "newDiv"
        $(newDiv).insertBefore(productGallery)
    }

    newDiv.id = "newDiv"
    newDiv.innerHTML = ''
    thumbnails.forEach(function(thumbnail) {
        $(newDiv).append(thumbnail.cloneNode(true))
    })

    $(newDiv).slick({
        dots: true,
        arrows: true,
    })
}, 250)