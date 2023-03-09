var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);
window.touchstartX = 0
window.touchendX = 0

var mobileProductCardsInterval = setInterval(function() {
    var productCards = document.querySelectorAll('.product-wrap')
    productCards.forEach(function(card) {
        var images = card.querySelectorAll('img')
        if (card.querySelector('.fa-circle') || images[0].src == images[1].src) {
            return
        }
        var circles = document.createElement('div')
        circles.className = "circles"
        circles.innerHTML = '<i class="fas fa-circle active"></i><i class="fas fa-circle"></i>'
        card.insertBefore(circles, card.querySelector('.product-info__caption'))
        card.querySelector('.product_image').addEventListener('touchstart', e => {
            window.touchstartX = e.changedTouches[0].screenX
        })

        card.querySelector('.product_image').addEventListener('touchend', e => {
            window.touchendX = e.changedTouches[0].screenX
            console.log(window.touchstartX)
            console.log(window.touchendX)
            if (Math.abs(window.touchstartX - window.touchendX) > 45) {
                $(e.target).closest('.product_image').toggleClass('toggle-images')
                $(e.target).closest('.product-wrap').find('.fa-circle').toggleClass('active')
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
            var productImage = $(this).closest('.product-wrap').find('.product_image')
            productImage.toggleClass('toggle-images')
            circleSibling.toggleClass('active')
            $(this).toggleClass('active')
        })
    })
}, 200)