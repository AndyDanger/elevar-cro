var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);

var script = document.createElement('script');
script.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
document.head.appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(element);

var links = [
    {
        text: 'Shop All',
        link: 'https://slumberkins.com/collections/all-slumberkins',
        image: 'https://cdn.shopify.com/s/files/1/1058/8734/products/Slumberkins_WebReshoot_2021_Adds3_Finals_Small-4_370x.jpg'
    },
    {
        text: 'Creatures',
        link: 'https://slumberkins.com/collections/all-topics',
        image: 'https://cdn.shopify.com/s/files/1/1058/8734/products/PDP_BigKins_Finals-1_720x.jpg'
    },
    {
        text: 'Books',
        link: 'https://slumberkins.com/collections/books',
        image: 'https://cdn.shopify.com/s/files/1/1058/8734/products/ALP_INTRO_COVER_PDP_370x.jpg'
    },
    {
        text: 'Sets',
        link: 'https://slumberkins.com/collections/sets',
        image: 'https://cdn.shopify.com/s/files/1/1058/8734/products/BTS_Ecomm_Newest_Finals_HighRes-10_370x.jpg'
    },
    {
        text: 'For Educators',
        link: 'https://slumberkins.com/collections/all-educator-products',
        image: 'https://cdn.shopify.com/s/files/1/1058/8734/t/32/assets/4f27470637e9--ed-lp-member01-9810be_600x600_crop_center.jpg'
    }
]

var mobileHomepageCarouselInterval = setInterval(function () {
    var firstSection = document.querySelector('.index-sections > div')
    if (!firstSection || !$().flickity) {
        return
    }
    clearInterval(mobileHomepageCarouselInterval)
    // do something with buttons
    var mobileCarousel = document.createElement('div')
    mobileCarousel.id = "mobileCarousel"

    var html = ``
    links.forEach(link => {
        html += `<a class="carousel-cell" href="${link.link}"><img src="${link.image}" />${link.text}</a>`
    })

    mobileCarousel.innerHTML = html
    firstSection.parentElement.insertBefore(mobileCarousel, firstSection)
    $('#mobileCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        imagesLoaded: true
    });

}, 250)