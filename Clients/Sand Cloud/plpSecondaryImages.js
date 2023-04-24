if (!window.scriptsAdded) {
    window.scriptsAdded = true
    let jQueryScript = document.createElement('script');
    jQueryScript.type = "text/javascript";
    jQueryScript.addEventListener("load", function (event) {
        let slickScript = document.createElement('script');
        slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
        document.head.appendChild(slickScript);
    });
    jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.getElementsByTagName('head')[0].appendChild(jQueryScript);

    let slickCss = document.createElement("link");
    slickCss.setAttribute("rel", "stylesheet");
    slickCss.setAttribute("type", "text/css");
    slickCss.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
    document.getElementsByTagName("head")[0].appendChild(slickCss);
}

// let plpSecondaryImages = setInterval(function () {
let productWraps = document.querySelectorAll('[data-comp="ProductItem"]:not(.inserted)') // get product cards
if (!productWraps.length || typeof $ == "undefined" || !$().slick) {
    return
}
// clearInterval(plpSecondaryImages)
let count = 0
productWraps.forEach(function (productWrap) {
    if (count > 3) return
    let imgSrc = productWrap.querySelector(`[data-comp="PictureSource"]`)
    if (imgSrc.srcset.includes(`default-image.svg`) || productWrap.innerText.includes(`SOLD OUT`)) return
    count++
    let pdpLink = productWrap.querySelector('a[data-comp="Image"]').href // get PDP links
    let request = jQuery.getJSON(`${pdpLink}.json`); // request the product's JSON
    productWrap.classList.add(`inserted`)
    request.done(function () {
        let productDetails = request.responseJSON;
        // console.log(productDetails)
        let images = productDetails.images // gets all the product images
        if (!images || images.length < 1) { // If there aren't any secondary images then don't bother making it a carousel
            return
        }
        let imagesHtml = ``
        for (let i = 0; i < images.length && i < 2; i++) { // Can increase or decrease the number here to get more or less images in the carousel. BEWARE THAT MORE IMAGES = SLOWER LOAD TIMES!
            imagesHtml += `<a href="${pdpLink}"><img src="${images[i].src}" /></a>` // wrap the images in links so they can click each slide of the carousel
        }

        let imageWrapper = productWrap.querySelector('[data-comp="Image"]') // get the element currently wrapping the image
        imageWrapper.outerHTML = `<div class="slickWrapper">${imagesHtml}</div>`
        $(productWrap.querySelector(`.slickWrapper`)).not('.slick-initialized').slick({
            arrows: false, // Make sure to test that the arrows are easily clickable and that they aren't wrapped by a link. I.e. if they're wrapped by a link then when you try to click them you'll end up triggering the link instead
            dots: true,
            lazyLoad: 'ondemand',
            mobileFirst: true,
        })

    })
    // Make sure that any details below the carousel still link to the PDP. I.e. they usually have the product name and the price below the images and we still want those to be clickable
    // $(productWrap).find('.product-details').wrap(`<a href="${pdpLink}"></a>`)
})
// }, 250)
