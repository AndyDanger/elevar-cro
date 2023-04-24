var currentUrl = ''
var pdpLifestyleInterval = setInterval(function () {
    var url = window.location.href
    if (url == currentUrl) {
        return
    }
    currentUrl = url
    if (url.indexOf('products/coffee/caramel-waffle-super-coffee/') != -1 ||
        url.indexOf('products/coffee/blueberry-latte-super-coffee/') != -1 ||
        url.indexOf('products/coffee/cinnamon-roll-super-coffee/') != -1) {
        console.log('trying to swap')
        var productTitle = document.querySelector('.pdp-hero h1').innerText
        var waitForUpdateInterval = setInterval(function () {
            var thumbnails = document.querySelectorAll('.thumbnail')
            if (thumbnails.length < 4 || document.querySelector('.thumbnails .preload')) {
                return
            }
            clearInterval(waitForUpdateInterval)
            doStuff(thumbnails)
        }, 250)
    }

}, 250)

function doStuff(thumbnails) {
    console.log('swap complete')
    thumbnails[0].classList.remove('active')
    thumbnails[3].classList.add('active')
    thumbnails[0].parentElement.insertBefore(thumbnails[3], thumbnails[0])

    thumbnails = document.querySelectorAll('.thumbnail')
    var slides = document.querySelectorAll('.featured-image img')

    slides.forEach(function (slide, index) {
        slide.src = thumbnails[index].querySelector('img').src
    })

}


var pdpLifestyleInterval = setInterval(function () {
    var thumbnails = document.querySelectorAll('.thumbnail')
    if (thumbnails.length < 4 || document.querySelector('.thumbnails .preload') || thumbnails[3].querySelector('img').alt.length > 0) {
        return
    }
    thumbnails[0].classList.remove('active')
    thumbnails[3].classList.add('active')
    thumbnails[0].parentElement.insertBefore(thumbnails[3], thumbnails[0])

    thumbnails = document.querySelectorAll('.thumbnail')
    var slides = document.querySelectorAll('.featured-image img')

    slides.forEach(function (slide, index) {
        console.log(index)
        if (index > 3) {
            return
        }
        slide.src = thumbnails[index].querySelector('img').src
    })

}, 250)

