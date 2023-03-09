var script = document.createElement('script');
script.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
document.head.appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(element);

window.colorTitle = ''

function doStuff() {
    var title = $('.product_gallery .slick-active .gallery-cell').data('title')

    if (!title.length || title == window.colorTitle) {
        return
    }

    window.colorTitle = title
    var thumbnailGallery = $('.product_gallery_nav')
    var thumbnails = document.querySelectorAll(`.product_gallery_nav [data-title="${title}"]`)
    var newDiv = document.querySelector('#newDiv')
    if (!newDiv) {
        newDiv = document.createElement('div')
        newDiv.id = "newDiv"
        $(newDiv).insertBefore(thumbnailGallery)
    }

    if ($(newDiv).get(0).slick) {
        $(newDiv).slick('slickUnfilter')
        $(newDiv).slick('unslick')
    }

    newDiv.id = "newDiv"
    newDiv.innerHTML = ''
    thumbnails.forEach(function(thumbnail) {
        $(newDiv).append(thumbnail.cloneNode(true))
    })

    $(newDiv).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_gallery',
        focusOnSelect: true,
        arrows: false,
        centerMode: false,
        infinite: false,
        centerPadding: '0px'
    })

    var productGallery = $(".product_gallery")
    productGallery.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $(newDiv).slick("slickGoTo", nextSlide)
    });
}

var carouselInterval = setInterval(doStuff, 250)