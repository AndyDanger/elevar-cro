var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);
var script2 = document.createElement('script');
script2.src = "//cdn.stamped.io/cdn/js/slick.min.js";
document.head.appendChild(script2);
var css = document.createElement('link');
css.rel = "stylesheet"
css.type = "text/css"
css.href = "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css";
document.head.appendChild(css);

window.touchstartX = 0
window.touchendX = 0


var images = document.querySelectorAll('.product-5444164354205 .image__container')
images.forEach(function(image) {
    var src = image.querySelector('img').src
    image.innerHTML = "<img src='" + src + "' />"
})



// var mobileProductCardsInterval = setInterval(function() {

//     var productCards = document.querySelectorAll('.product_image')
//         // productCards.forEach(function(card) {
//         //     if ($(card).find('.slick-slider').length) {
//         //         return
//         //     }
//         //     $(card).find('.image__container').slick({
//         //         dots: true,
//         //         arrows: false,
//         //     })
//         // })
//     if (card.querySelector('.fa-chevron-left')) {
//         return
//     }
//     $(card).append('<i class="fas fa-chevron-left"></i><i class="fas fa-chevron-right"></i>')

//     card.addEventListener('touchstart', e => {
//         window.touchstartX = e.changedTouches[0].screenX
//     })

//     card.addEventListener('touchend', e => {
//         window.touchendX = e.changedTouches[0].screenX
//         console.log(window.touchstartX)
//         console.log(window.touchendX)
//         if (Math.abs(window.touchstartX - window.touchendX) > 45) {
//             $(e.target).closest('.product_image').toggleClass('toggle-images')
//         }
//     })
// })

// var chevrons = document.querySelectorAll('.fa-chevron-left, .fa-chevron-right')
// chevrons.forEach(function(chevron) {
//     if (chevron.className.indexOf('click-added') !== -1) {
//         return
//     }
//     chevron.className += ' click-added'
//     $(chevron).click(function() {
//         $(this.parentElement).toggleClass('toggle-images')
//     })

// }, 200)