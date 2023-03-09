
var script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'
document.head.appendChild(script)

var script = document.createElement('script')
script.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js'
document.head.appendChild(script)

var element = document.createElement("link")
element.setAttribute("rel", "stylesheet")
element.setAttribute("type", "text/css")
element.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css")
document.getElementsByTagName("head")[0].appendChild(element)


var links = [
    {
        text: 'ENERGY',
        link: 'https://mtnops.com/collections/energy',
        image: 'https://cdn.shopify.com/s/files/1/2786/4584/products/BugleBerry-Ignite-45Serving-Splash-Web_5b0291d2-a56c-4491-9485-fd0901c2f68b_360x.png'
    },
    {
        text: 'PROTEINS',
        link: 'https://mtnops.com/collections/proteins-meal-replacements',
        image: 'https://cdn.shopify.com/s/files/1/2786/4584/products/AMMO-Splash-PeachCobbler-Web_360x.png'
    },
    {
        text: 'PRE-WORKOUT',
        link: 'https://mtnops.com/collections/pre-workouts',
        image: 'https://cdn.shopify.com/s/files/1/2786/4584/products/sour-smash-tub_1_360x.png'
    },
    {
        text: 'EVERYDAY',
        link: 'https://mtnops.com/collections/everyday',
        image: 'https://cdn.shopify.com/s/files/1/2786/4584/products/MULTIV-M-BottlewPills-1200_360x.png'
    },
    {
        text: 'STACKS',
        link: 'https://mtnops.com/collections/systems',
        image: 'https://cdn.shopify.com/s/files/1/2786/4584/products/WeightLossStack-Splash-Bundle1-Web_360x.png' //https://cdn.shopify.com/s/files/1/2786/4584/products/ConquerStrengthCombo-LShakerSplash-Web_360x.png
    },
]

var mobileHomepageCarouselInterval = setInterval(function () {
    var mainContent = document.querySelector('.main-page-wrapper .site-content')
    if (!mainContent || typeof $ == "undefined" || !$().flickity) {
        return
    }
    clearInterval(mobileHomepageCarouselInterval)
    // do something with buttons
    var mobileCarousel = document.createElement('div')
    var stickyCarousel = document.createElement('div')
    mobileCarousel.id = "mobileCarousel"
    stickyCarousel.id = "stickyCarousel"

    var html = ``
    links.forEach(link => {
        html += `<a class="carousel-cell" href="${link.link}"><img src="${link.image}" />${link.text}</a>`
    })

    mobileCarousel.innerHTML = html
    stickyCarousel.innerHTML = html

    mainContent.insertBefore(mobileCarousel, mainContent.firstElementChild)
    mainContent.insertBefore(stickyCarousel, mainContent.firstElementChild)

    $('#mobileCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        imagesLoaded: true
    })

    $('#stickyCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        imagesLoaded: true,
        lazyLoad: true,
    }).slideUp().addClass(`reveal`)

}, 250)

if (window.location.href.includes('variant=not-sticky')) {
    var styleTag = document.createElement('style')
    styleTag.innerHTML = `#stickyCarousel { display: none !important }`
    document.head.append(styleTag)
} else {
    window.addEventListener("scroll", function () {
        var elementTarget = document.querySelector("#stickyCarousel")
        if (!elementTarget) {
            return
        }
        console.log(`window.scrollY: ${window.scrollY} - window.screen.height: ${window.screen.height} - elementTarget.offsetTop: ${elementTarget.offsetTop} - elementTarget.offsetHeight: ${elementTarget.offsetHeight}`)
        if ((window.scrollY) > (200)) {
            $(elementTarget).slideDown()
        } else {
            $(elementTarget).slideUp()
        }
    })
}