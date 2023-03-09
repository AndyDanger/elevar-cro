window.nikeImages = []
var nikeImagesInterval = setInterval(function() {
    var images = document.querySelectorAll('#my-gallery .viewer-wrap img')
    if (!images.length || images.length === window.nikeImages.length && Array.from(images).every(function(value, index) { return value.src === window.nikeImages[index].src })) {
        return
    }
    window.nikeImages = images
    var newDiv = document.querySelector('.nikeImagesDiv') || document.createElement('div')
    newDiv.className = "nikeImagesDiv"
    var html = ""
    images.forEach(function(image) {
        html += image.outerHTML
    })
    newDiv.innerHTML = html
    document.querySelector('#my-gallery').parentElement.insertBefore(newDiv, document.querySelector('#my-gallery'))
    document.querySelector('.product-single__meta').parentElement.insertBefore(document.querySelector('#accordionGroupA'), document.querySelector('.product-single__meta').nextSibling)

}, 250)