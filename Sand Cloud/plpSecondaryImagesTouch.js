if (!window.scriptsAdded) {
    window.scriptsAdded = true
    let jQueryScript = document.createElement('script');
    jQueryScript.type = "text/javascript";
    jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.getElementsByTagName('head')[0].appendChild(jQueryScript);
}

// let plpSecondaryImagesTouchInterval = setInterval(function () {
let productWraps = document.querySelectorAll('[data-comp="ProductItem"]:not(.inserted)') // get product cards
if (!productWraps.length || typeof $ == "undefined") {
    return
}
// clearInterval(plpSecondaryImages)
productWraps.forEach(function (productWrap, index) {
    if (index > 3) return
    let imgSrc = productWrap.querySelector(`[data-comp="PictureSource"]`)
    if (imgSrc.srcset.includes(`default-image.svg`)) return
    let pdpLink = productWrap.querySelector('a[data-comp="Image"]').href // get PDP links
    let request = jQuery.getJSON(`${pdpLink}.json`); // request the product's JSON
    productWrap.classList.add(`inserted`)
    request.done(function () {
        let productDetails = request.responseJSON;
        let images = productDetails.images // gets all the product images
        if (!images || images.length < 1) { // If there aren't any secondary images then don't bother making it a carousel
            return
        }
        $(productWrap).on(`touchstart`, () => {
            $(productWrap).find(`img`).attr(`src`, images[1].src)
        })
        $(productWrap).on(`touchend`, () => {
            $(productWrap).find(`img`).attr(`src`, images[0].src)
        })

    })

})
// }, 250)
