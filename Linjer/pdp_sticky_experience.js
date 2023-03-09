var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);

var pdpStickyInterval = setInterval(function() {
    var image = $('div[data-slick-index="0"] .ProductImg-product')
    if (!image.length || !image.attr('data-srcset')) {
        return
    }
    var title = $('.product__title')
    var color = $('.swatch__value')
    var split = title.text().split(' - ')
    var size = $('[data-option-name="size"] .swatch__item.active')

    var content = title.text() + color.text() + split[split.length - 1] + size.text()

    if (content != window.stickyContent) {
        window.stickyContent = content
        var stickyWrapper = document.querySelector('#stickyWrapper') || document.createElement('div')
        stickyWrapper.id = 'stickyWrapper'
        var newHTML =
            `<div id='stickyElement'><div class='leftDiv'><img src='${image.attr('data-srcset')}' /></div>
         <div class='middleDiv'>
            <div class='topDiv'>${split[split.length - 1]}</div>
            <div class='bottomDiv'>${color.text()}${size.text().trim() ? '<br>Size ' + size.text().trim() : ''}</div>
         </div>
         <div class='rightDiv'><div class='btn--black'>ADD TO CART</div></div></div>`

        stickyWrapper.innerHTML = newHTML
        document.body.append(stickyWrapper)
        $('#stickyWrapper .btn--black').on('click', function() {
            $('.add-to-cart-wrapper .addToCart').click()
        })
    }

}, 250)

function scrolledBelow(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom < 0;
}

document.addEventListener('scroll', function() {
    var atcButton = document.querySelector('.add-to-cart-wrapper .addToCart');

    var shouldShow = scrolledBelow(atcButton)
    console.log(shouldShow)
    if (shouldShow) {
        $('#stickyWrapper').slideDown()
    } else {
        $('#stickyWrapper').slideUp()
    }

}, {
    passive: true
});