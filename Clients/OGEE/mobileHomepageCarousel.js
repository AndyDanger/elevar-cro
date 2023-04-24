if (window.location.href.includes('variant=text-only')) {
    var styleTag = document.createElement('style')
    styleTag.innerHTML = `#mobileCarousel img { display: none; }`
    document.head.append(styleTag)
}

var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(jqueryScript);

var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
document.head.appendChild(jqueryScript);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(element);

var links = [
    {
        text: 'SHOP ALL',
        link: 'https://ogee.com/pages/shop-all',
        image: 'https://cld.accentuate.io/40272258236477/1664459875083/OGEE-Clean-Beauty-Collection-1.jpg?v=1664459875083&options=w_600,h_600,f_auto,q_auto'
    },
    {
        text: 'MAKEUP',
        link: 'https://ogee.com/collections/lip',
        image: 'https://i.imgur.com/cv2YnrG.jpg'
    },
    {
        text: 'SKINCARE',
        link: 'https://ogee.com/collections/moisturize',
        image: 'https://i.imgur.com/mk8S0DX.jpg'
    },
    {
        text: 'BUNDLES',
        link: 'https://ogee.com/collections/bundle',
        image: 'https://i.imgur.com/0Wdqyee.jpg'
    },
    {
        text: 'GIFT SETS',
        link: 'https://ogee.com/collections/gift-sets',
        image: 'https://i.imgur.com/GWN1L1J.jpg'
    },
    {
        text: 'REWARDS',
        link: 'https://ogee.com/pages/rewards',
        image: 'https://cdn-widget-assets.yotpo.com/static_assets/T_R9Pcsg2cqYN57Y9N68fA/images/image_2021_03_15_14_55_06_906'
    },
]

var mobileHomepageCarouselInterval = setInterval(function () {
    var header = document.querySelector('#shopify-section-header')
    if (!header || !$().flickity) {
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
    header.parentElement.insertBefore(mobileCarousel, header)
    $('#mobileCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        imagesLoaded: true
    });

}, 250)