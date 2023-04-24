var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);

var pdpSwipeInterval = setInterval(function() {
    var productInfoWrapper = document.querySelector('.Product__InfoWrapper')
    if (!productInfoWrapper || document.querySelector('#swipeIconsWrapper')) {
        return
    }
    clearInterval(pdpSwipeInterval)
    var swipeIconsWrapper = document.createElement('div')
    swipeIconsWrapper.id = 'swipeIconsWrapper'
    swipeIconsWrapper.innerHTML = `<div id="arrowIconsWrapper"><i class="fas fa-arrow-left"></i><i class="fas fa-arrow-right"></i></div><i class="fas fa-hand-pointer"></i><div id="swipeForMore">Swipe For More</div>`
    productInfoWrapper.parentElement.insertBefore(swipeIconsWrapper, productInfoWrapper)
}, 250)