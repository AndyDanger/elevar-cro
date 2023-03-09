var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);

var mobileProductCardsInterval = setInterval(function() {
    var productCards = document.querySelectorAll('.product_image')
    productCards.forEach(function(card) {
        if (card.querySelector('.fa-search-minus')) {
            return
        }
        $(card).append('<i class="fas fa-search-minus"></i><i class="fas fa-search-plus"></i>')
    })

    var minusIcons = document.querySelectorAll('.fa-search-minus')
    var plusIcons = document.querySelectorAll('.fa-search-plus')
    minusIcons.forEach(function(icon) {
        if (icon.className.indexOf('click-added') !== -1) {
            return
        }
        icon.className += ' click-added'
        $(icon).click(function() {
            var product_image = $(this).closest('.product_image')
            if (window.debugger) {
                debugger
            }
            var image = $(product_image).find('img')[0]
            var scale = parseFloat(parseFloat(image.style.transform.replaceAll(/scale\(|\)/g, '')).toFixed(2))
            console.log(scale)
            var newScale = isNaN(scale) ? 1 : scale <= 1.5 ? 1 : scale - 0.5
            console.log(newScale)
            if (window.preventchange) {
                return
            }
            $(image).css('transform', 'scale(' + newScale + ')')
            $(product_image).removeClass('toggle-images')
        })
    })

    plusIcons.forEach(function(icon) {
        if (icon.className.indexOf('click-added') !== -1) {
            return
        }
        icon.className += ' click-added'
        $(icon).click(function() {
            var product_image = $(this).closest('.product_image')
            if (window.debugger) {
                debugger
            }
            var image = $(product_image).find('img')[0]
            var scale = parseFloat(parseFloat(image.style.transform.replaceAll(/scale\(|\)/g, '')).toFixed(2))
            console.log(scale)
            var newScale = isNaN(scale) ? 1.5 : scale + 0.5
            console.log(newScale)
            if (window.preventchange) {
                return
            }
            $(image).css('transform', 'scale(' + newScale + ')')
            $(product_image).removeClass('toggle-images')
        })
    })

}, 200)