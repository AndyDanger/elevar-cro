var script = document.createElement('script');
script.type = "text/javascript";
script.addEventListener("load", function (event) {
    var script2 = document.createElement('script');
    script2.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    document.head.appendChild(script2);
});
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(element);

var products = {
    "6791495975092": "pawramp",
    "6791506821300": "dachramp",
    "6791498498228": "magic-dog-pee-pads",
    "6791506133172": "cozy-calming-bed-for-dogs",
    "6791507247284": "magic-pee-pads-xl",
    "6791497646260": "scratchyramp",
    "6791509344436": "pawproof-throw-blanket",
    "6791508295860": "all-natural-dog-treats",
    "6791509475508": "cozy-calming-blanket",
    "6791492862132": "natural-vitality-dachshund-food",
    "6791507083444": "dog-car-safety-seat",
    "6791508361396": "car-ramp-for-dogs",
    "6791506067636": "cozy-calming-bed-for-cats",
    "6935529390260": "alpha-paw-tennis-ball",
    "6791508197556": "magic-mouthwash-for-dogs",
    "6791495778484": "scratchyramp-replacement-carpet",
    "6791493189812": "dentalicious-doggy-bones",
    "6791499841716": "alpha-paw-car-safety-seat-belt",
    "6791504789684": "15-in-1-multi-chews",
    "6791507312820": "omega-chews",
    "6791508099252": "hot-dog-bed",
    "6791509246132": "pet-nail-grinder",
    "6791510196404": "collapsible-water-bowls",
    "6791510327476": "pawproof-car-seat-cover",
    "6791509803188": "american-flag-dog-collar",
    "6952917172404": "orthopaw-memory-foam-rug",
    "6791509049524": "custom-personalized-photo-keychain",
    "6791508000948": "dachshund-ice-tray",
    "6791508852916": "personalized-dog-bone-pendant-necklace",
    "6791507902644": "dachshund-cookie-cutters",
    "6791509737652": "magic-pet-fur-remover",
    "6791505739956": "cat-l-lysine",
    "6916762009780": "bouncy-fish-toy",
    "6791508525236": "genius-litter",
    "6791510786228": "antibacterial-antifungal-medicated-wipes",
    "6942177525940": "natural-vitality-dog-food",
    "6791493583028": "dog-bandanas",
    "6791509213364": "limited-edition-personalized-dog-paw-pendant-necklace",
    "6791509278900": "replacement-grinder-head",
    "6791510622388": "antibacterial-antifungal-medicated-ear-flush",
    "6791508918452": "personalized-bone-charm-bangle-bracelet",
    "6791511310516": "tennis-balls",
    "6791508951220": "hollow-heart-paw-stud-earrings",
    "6791510982836": "antibacterial-antifungal-medicated-shampoo",
    "6791492305076": "allergy-itch-relief-shampoo",
    "6791510687924": "antibacterial-antifungal-medicated-spray",
    "6952924479668": "expandable-pet-carrier",
    "6791509606580": "dog-mom-wine-tumblers",
    "6791492698292": "american-flag-dog-bandana",
    "6879710380212": "doggy-dental-bundle",
    "6791493419188": "hollow-cat-stud-earrings",
    "6791508721844": "custom-engraved-dog-bone-ring",
    "6791509082292": "custom-engraved-dog-chewing-bone-ring",
    "6791509934260": "american-flag-lanyard",
    "6992967991476": "christmas-dog-collar",
    "6791492567220": "american-flag-cat-collar",
    "6977229127860": "custom-pet-fleece-blanket",
    "6977229390004": "custom-modern-pet-portrait",
    "6791509147828": "limited-edition-custom-engraved-dog-paw-ring",
    "6980951867572": "personalized-pet-art",
    "7049919004852": "natural-vitality-retriever-food",
    "6977229422772": "limited-edition-custom-pet-pop-portraits",
    "6977228800180": "custom-pillow-cover",
    "6977231126708": "custom-pet-socks",
    "6977229357236": "custom-modern-family-portrait",
    "6977228996788": "custom-pet-coffee-mug",
    "6977231159476": "custom-crewneck-sweatshirt",
    "6977231093940": "custom-pet-tote-bag",
    "6977230962868": "custom-pet-iphone-case",
    "6977229226164": "new-custom-pet-puzzle",
    "6977228898484": "custom-wrapped-pet-canvas",
    "6977231225012": "mens-womens-hoodie-white",
    "6977231028404": "womens-custom-pet-t-shirt",
    "6977230995636": "mens-custom-pet-t-shirt"
}

var plpSecondaryImages = setInterval(function () {
    var productWraps = document.querySelectorAll('.grow-aov-collection__grid-item--original:not(.carouselAdded)') // get product cards
    if (!productWraps.length || typeof jQuery == "undefined" || typeof $ == "undefined") {
        return
    }

    productWraps.forEach(function (productWrap) {
        var productId = productWrap.getAttribute('data-product-id')
        var handle = products[productId]
        var pdpLink = `https://www.alphapaw.com/products/${handle}` // get PDP links
        let request = jQuery.getJSON(`${pdpLink}.json`); // request the product's JSON
        request.done(function () {
            var productDetails = request.responseJSON;
            console.log(productDetails)
            var images = productDetails.product.images // gets all the product images
            if (!images || images.length < 1) { // If there aren't any secondary images then don't bother making it a carousel
                return
            }
            var imagesHtml = ``
            for (var i = 0; i < images.length && i < 4; i++) { // Can increase or decrease the number here to get more or less images in the carousel. BEWARE THAT MORE IMAGES = SLOWER LOAD TIMES!
                imagesHtml += `<a href="${pdpLink}"><img src="${images[i].src}" /></a>` // wrap the images in links so they can click each slide of the carousel
            }

            var imageWrapper = productWrap.querySelector('.grow-aov-collection__product-image') // get the element currently wrapping the image

            const elementToObserve = imageWrapper.querySelector("img");
            elementToObserve.style.display = "none"

            // create a new instance of `MutationObserver` named `observer`,
            // passing it a callback function
            const observer = new MutationObserver((mutations) => {
                console.log('variant changed')
                var target = mutations[0].target
                var carousel = $(target).next()
                var link = carousel.find('a')
                $(carousel).slick('slickRemove', 0)
                $(carousel).slick('slickAdd', `<a href="${link.attr('href')}"><img src="${target.src}" /></a>`, 0, true)
                $(carousel).slick('slickGoTo', 0)
            });

            // call `observe()` on that MutationObserver instance,
            // passing it the element to observe, and the options object
            observer.observe(elementToObserve, { subtree: false, childList: false, attributes: true });


            var carousel = document.createElement('div')
            carousel.innerHTML = imagesHtml
            imageWrapper.append(carousel)
            $(carousel).slick({
                arrows: true, // Make sure to test that the arrows are easily clickable and that they aren't wrapped by a link. I.e. if they're wrapped by a link then when you try to click them you'll end up triggering the link instead
                dots: true
            })

            productWrap.classList.add('carouselAdded')
            $(productWrap).find('.slick-arrow, .slick-dots').on('click', function (event) {
                event.stopPropagation()
            })
        })
        // Make sure that any details below the carousel still link to the PDP. I.e. they usually have the product name and the price below the images and we still want those to be clickable
        // $(productWrap).find('.product-details').wrap(`<a href="${pdpLink}"></a>`)
    })


}, 250)