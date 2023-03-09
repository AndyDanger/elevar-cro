if (window.location.href.includes('variant=text-only')) {
    var styleTag = document.createElement('style')
    styleTag.innerHTML = `#mobileCarousel img { display: none; }`
    document.head.append(styleTag)
}


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
        text: 'Loungers',
        link: 'https://snugglemeorganic.com/collections/snuggle-me-organic-infant',
        image: 'https://cld.accentuate.io/40272258236477/1664459875083/OGEE-Clean-Beauty-Collection-1.jpg?v=1664459875083&options=w_600,h_600,f_auto,q_auto'
    },
    {
        text: 'Feeding Support',
        link: 'https://snugglemeorganic.com/collections/feeding-support',
        image: 'https://i.imgur.com/cv2YnrG.jpg'
    },
    {
        text: 'Covers',
        link: 'https://snugglemeorganic.com/collections/accessories',
        image: 'https://i.imgur.com/mk8S0DX.jpg'
    },
    {
        text: 'Accessories',
        link: 'https://snugglemeorganic.com/collections/accessories-1',
        image: 'https://i.imgur.com/0Wdqyee.jpg'
    }
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
        html += `<a class="carousel-cell" href="${link.link}">${link.text}</a>`
    })

    mobileCarousel.innerHTML = html
    header.append(mobileCarousel)
    $('#mobileCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        imagesLoaded: true
    });

}, 250)