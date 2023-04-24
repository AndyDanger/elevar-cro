var navigationProductImages = setInterval(function () {
    var mobileNavItems = document.querySelectorAll('.mobile-nav__item')
    if (!mobileNavItems.length) {
        return
    }
    clearInterval(navigationProductImages)
    // do something with buttons
    mobileNavItems.forEach(function (navItem) {
        var link = navItem.querySelector('a')
        let request = jQuery.getJSON(`${link.href}.json`)
        request.done(function () {
            var productDetails = request.responseJSON;
            if (!productDetails.collection || !productDetails.collection.image || !productDetails.collection.image.src) {
                return
            }
            console.log(productDetails.collection.image.src)
        })
    })
}, 250)