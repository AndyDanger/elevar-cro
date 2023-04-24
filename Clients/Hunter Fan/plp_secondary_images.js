var script = document.createElement('script');
script.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
document.head.appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(element);
var initialized = false

var plpSecondaryImages = setInterval(function () {
    var productWraps = document.querySelectorAll('.grid-view-item') // get product cards
    if (!productWraps.length) {
        return
    }
    // clearInterval(plpSecondaryImages)
    var variants = []
    window.meta.products.forEach(product => product.variants.forEach(variant => variants.push(variant)))
    productWraps.forEach(function (productWrap) {
        var showVariantImg = productWrap.querySelector('.showVariantImg')
        if (initialized && !showVariantImg) {
            return
        }
        showVariantImg ? showVariantImg.classList.remove('showVariantImg') : null
        var newImageWrapper = productWrap.querySelector('.newImageWrapper')
        if (newImageWrapper) {
            $(newImageWrapper).slick('unslick')
            newImageWrapper.remove()
        }

        var pdpLink = productWrap.querySelector('.grid-view-item__title').href // get PDP links
        var ogImage = productWrap.querySelector('.grid-view-item__link img.variantImg')
        var swatches = productWrap.querySelectorAll('.swatches li')
        var selectedSwatch = Array.from(swatches).find(swatch => ogImage.src.indexOf(swatch.getAttribute('rel')) != -1)
        var productId = selectedSwatch ? selectedSwatch.getAttribute('data-var') : productWrap.querySelector('[data-variant-id]').getAttribute('data-variant-id')
        var sku = variants.find(variant => variant.id == productId).sku
        let request = jQuery.getJSON(`https://image.hunterfan.com/image/list/${sku}.json`); // request the product's JSON
        request.done(function () {
            var productDetails = request.responseJSON;
            var images = productDetails.resources.map(resource => `https://image.hunterfan.com/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_400,q_auto,w_400/c_pad,h_400,w_400/${resource.public_id}?pgw=1`) // gets all the product images
            images = images.filter(image => !/detail|zeal|body|crop|dimensions|included/.test(image) && image.indexOf(sku) != -1)
            if (!images || images.length < 1) { // If there aren't any secondary images then don't bother making it a carousel
                return
            }
            console.log(images)
            var mainVariantImgSrc = productWrap.querySelector('.variantImg').getAttribute('src') || productWrap.querySelector('.grid-view-item__link img').getAttribute('src')
            var imagesHtml = mainVariantImgSrc ? `<a href="${pdpLink}"><img src="${mainVariantImgSrc.replace('_50x', '_320x')}" /></a>` : ``
            for (var i = 0; i < images.length && i < 3; i++) { // Can increase or decrease the number here to get more or less images in the carousel. BEWARE THAT MORE IMAGES = SLOWER LOAD TIMES!
                imagesHtml += `<a href="${pdpLink}"><img src="${images[i]}" /></a>` // wrap the images in links so they can click each slide of the carousel
            }

            var imageWrapper = productWrap.querySelector('.grid-view-item__link') // get the element currently wrapping the image
            var newImageWrapper = imageWrapper.cloneNode(true)
            newImageWrapper.className = 'newImageWrapper'
            newImageWrapper.innerHTML = imagesHtml
            imageWrapper.style.display = "none"
            newImageWrapper.style.display = "block"
            newImageWrapper.onclick = function () { }
            imageWrapper.parentElement.insertBefore(newImageWrapper, imageWrapper)
            $(productWrap.querySelector('.newImageWrapper')).slick({
                arrows: true, // Make sure to test that the arrows are easily clickable and that they aren't wrapped by a link. I.e. if they're wrapped by a link then when you try to click them you'll end up triggering the link instead
                dots: true
            })
            $(productWrap.querySelector('.newImageWrapper')).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-58551094-7') // insert their UA number here
                if (tracker) {
                    tracker.send('event', 'collection page', 'carousel interaction', window.location.href) // replace event category and event action
                }
            });

        })
        // Make sure that any details below the carousel still link to the PDP. I.e. they usually have the product name and the price below the images and we still want those to be clickable
        // $(productWrap).find('.product-details').wrap(`<a href="${pdpLink}"></a>`)
    })
    initialized = true
}, 250)
