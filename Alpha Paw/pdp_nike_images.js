window.nikeImages = []

var nikeImagesInterval = setInterval(function() {
    var images = document.querySelectorAll('[id*="tns1-item"] img:not(.zpa-lazysizes-blurup)')
    if (!images.length || images.length === window.nikeImages.length && Array.from(images).every(function(value, index) { return value.src === window.nikeImages[index].src })) {
        return
    }
    window.nikeImages = images
    console.log(window.firstImage)
    var newDiv = document.querySelector('.nikeImagesDiv') || document.createElement('div')
    newDiv.className = "nikeImagesDiv"
    var html = ""
    images.forEach(function(image) {
        html += image.outerHTML
    })
    newDiv.innerHTML = html

    document.querySelector('.zpa-mobile-offset-bottom-xsm').append(newDiv)
        //document.querySelector('.product-single__meta').parentElement.insertBefore(document.querySelector('#accordionGroupA'), document.querySelector('.product-single__meta').nextSibling)

}, 250)