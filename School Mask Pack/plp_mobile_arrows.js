var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);
window.touchstartX = 0
window.touchendX = 0

var mobileProductCardsInterval = setInterval(function() {
    var productCards = document.querySelectorAll('.product-grid-item')
    productCards.forEach(function(card) {
        if (card.querySelector('.fa-circle') || !card.querySelector('.collection__image__bottom')) {
            return
        }
        $(card).find('.collection__image__bottom').addClass('transparent')
        $(card).find(".lazy-image").closest('div').append('<i class="fas fa-chevron-left"></i><i class="fas fa-chevron-right"></i>')
        var circles = document.createElement('div')
        circles.className = "circles"
        circles.innerHTML = '<i class="fas fa-circle active"></i><i class="fas fa-circle"></i>'
        card.querySelector('.figcaption').insertBefore(circles, card.querySelector('.figcaption > a'))
        card.querySelector('.collection__image__bottom').addEventListener('touchstart', e => {
            window.touchstartX = e.changedTouches[0].screenX
        })

        card.querySelector('.collection__image__bottom').addEventListener('touchend', e => {
            window.touchendX = e.changedTouches[0].screenX
            console.log(window.touchstartX)
            console.log(window.touchendX)
            if (Math.abs(window.touchstartX - window.touchendX) > 45) {
                $(e.target).closest('.collection__image__bottom').toggleClass('opaque').toggleClass('transparent')
                $(e.target).closest('.product-grid-item').find('.fa-circle').toggleClass('active')
            }
        })
    })

    var circles = document.querySelectorAll('.fa-circle')
    circles.forEach(function(circle) {
        if (circle.className.indexOf('click-added') !== -1) {
            return
        }
        circle.className += ' click-added'
        $(circle).click(function() {
            if ($(this).hasClass('active')) {
                return
            }
            var circleSibling = $(this).siblings()
            var productImage = $(this).closest('.product-grid-item').find('.collection__image__bottom')
            productImage.toggleClass('opaque').toggleClass('transparent')
            circleSibling.toggleClass('active')
            $(this).toggleClass('active')
        })

    })

    var chevrons = document.querySelectorAll('.fa-chevron-left, .fa-chevron-right')
    chevrons.forEach(function(chevron) {
        if (chevron.className.indexOf('click-added') !== -1) {
            return
        }
        chevron.className += ' click-added'
        $(chevron).click(function() {
            var circles = $(this).closest('.product-grid-item').find('.fa-circle')
            var productImage = $(this).closest(".product-grid-item").find('.collection__image__bottom')
            circles.toggleClass('active')
            if (circles[0].className.indexOf('active') !== -1) {
                productImage.removeClass('opaque').addClass('transparent')
            } else {
                productImage.addClass('opaque').removeClass('transparent')
            }
        })

    })

}, 200)