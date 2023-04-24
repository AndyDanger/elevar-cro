var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);

var cartFreeShippingProgressInterval = setInterval(function() {
    var subtotal = parseInt(document.querySelector('.gip-cart-subtotal .money').innerText.replace('.', '').match(/(\d+)/))
    var threshold = 6900
    if (subtotal > threshold) {
        $('.plus-free-shipping--progress-bar').css('width', '100%')
        $('.plus-free-shipping--message').text("Congrats! You've qualified for free shipping!").css('color', 'black')
    } else {
        $('.plus-free-shipping--progress-bar').css('width', Math.round(subtotal / threshold * 100) + '%')
        $('.plus-free-shipping--message').text("Spend another $" + Math.round(threshold - subtotal) / 100 + " and receive free shipping!").css('color', '#f6501f')
    }
}, 250)