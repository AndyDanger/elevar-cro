let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);

let counter = 0
let newInterval = setInterval(function () {
    let gridthree = document.querySelectorAll('.product-grid .grid__item')
    if (!gridthree.length || typeof $ !== "function") {
        if (counter++ >= 60) {
            clearInterval(newInterval)
        }
        return
    }
    clearInterval(newInterval)
$('<li class="grid__item carouselAdded"><div id="machineupsell-img"><video src="https://cdn.shopify.com/videos/c/o/v/06bf47c6f61f41208f2f40999aabfcc7.mp4" autoplay loop muted playsinline></video><div class="upsellbtn-container"><a class="button button--primary button-full" href="/products/the-bartesian">Learn More</a></div></div></li>').insertBefore(".product-grid .grid__item:nth-of-type(3)");
$("#machineupsell-img").wrap('<a href="/products/the-bartesian" />');
}, 250)