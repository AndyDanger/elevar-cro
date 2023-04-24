let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);


let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    let counter = 0
    let newInterval = setInterval(function () {
        let gridthree = document.querySelectorAll('.product-grid .grid__item')
        if (!gridthree.length || typeof $ !== "function") {
            if (counter++ >= 60) {
                clearInterval(newInterval)
            }
            return
        }
        clearInterval(newInterval);
        $(`<li class="grid__item carouselAdded makeRelative">
            <a class="machineUpsellLink" href="/products/the-bartesian">
                <div id="machineupsell-img">
                    <img src="https://i.imgur.com/983gPNx.jpg">
                    <div>"Makes cocktails as easy as a cup of coffee"</div>
                </div>
                <div class="upsellbtn-container">
                    <div>Learn More</div>
                </div>
            </a>
        </li>`).insertBefore(".product-grid .grid__item:nth-of-type(3)");
    }, 250)
}

let variant2 = () => {
    console.log(`variant2`)
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
        $(`<li class="grid__item carouselAdded">
            <a class="machineUpsellLink" href="/products/the-bartesian">
                <div id="machineupsell-img">
                    <video src="https://cdn.shopify.com/videos/c/o/v/06bf47c6f61f41208f2f40999aabfcc7.mp4" autoplay loop muted playsinline></video>
                    <div class="upsellbtn-container">
                        <div>Learn More</div>
                    </div>
                </div>
            </a>
        </li>`).insertBefore(".product-grid .grid__item:nth-of-type(3)");
    }, 250)
}

let variant3 = () => {
    console.log(`variant3`)
}

let variants = [control, variant1, variant2, variant3]

let main = () => {
    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`test_variant`)
    if (variant) {
        sessionStorage.setItem(`test_variant`, variant)
    }
    let storageVariant = sessionStorage.getItem(`test_variant`) || 1 // default to variant 1
    variants[storageVariant]() // call the variant's function
}

main()