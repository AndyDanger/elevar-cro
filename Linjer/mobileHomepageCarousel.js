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

var stars = 'https://imgur.com/E1b0eoB.png'
var icons = [
    {
        text: 'All Jewelry',
        image: 'https://i.imgur.com/DhB83dy.png',
        link: 'https://www.linjer.co/collections/jewelry'
    },
    {
        text: 'Rings',
        image: 'https://i.imgur.com/uYyFGpp.png',
        link: 'https://www.linjer.co/collections/rings'
    },
    {
        text: 'Earrings',
        image: 'https://i.imgur.com/icY4OAw.png',
        link: 'https://www.linjer.co/collections/earrings'
    },
    {
        text: 'Necklaces',
        image: 'https://i.imgur.com/wHEWAHm.png',
        link: 'https://www.linjer.co/collections/necklaces'
    },
    {
        text: 'Bracelets',
        image: 'https://i.imgur.com/qGUWH96.png',
        link: 'https://www.linjer.co/collections/bracelets'
    },
    {
        text: '14K Gold',
        image: 'https://i.imgur.com/1foCQlq.png',
        link: 'https://www.linjer.co/collections/14k-solid-gold'
    },
    {
        text: 'Gold Vermeil',
        image: 'https://i.imgur.com/FOCoiih.png',
        link: 'https://www.linjer.co/collections/gold-vermeil-jewelry'
    },
    {
        text: 'Silver',
        image: 'https://imgur.com/yDeAd4R.png',
        link: 'https://www.linjer.co/collections/silver-jewelry'
    }
]


var flickityInterval = setInterval(function () {
    if (!$().flickity) {
        return
    }
    clearInterval(flickityInterval)
    var mobileCarousel = document.createElement('div')
    mobileCarousel.id = 'mobileCarousel'
    mobileCarousel.innerHTML = icons.reduce((total, icon) => {
        return `${total}<a href='${icon.link}'><img src='${icon.image}' ><div>${icon.text}</div></a>`
    }, '')
    var mainContent = document.querySelector('.main-content')
    mainContent.insertBefore(mobileCarousel, mainContent.firstChild)
    $('#mobileCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        groupCells: 4,
        imagesLoaded: true,
        percentPosition: false,
        pageDots: false,
        prevNextButtons: false
    })

    $('.main-content .section-banner img').attr({
        'src': 'https://i.imgur.com/hCoSH9S.png',
        'data-srcset': 'https://i.imgur.com/hCoSH9S.png'
    })
    
    // $('#shopify-section-info-bar .info-bar').html('Free carbon-neutral shipping for orders over $75 USD')
    // $('.banner__body .section-title').text('Gems we’re falling for')
    // $('.banner__body .section-content > p').text('New arrivals to add a little sparkle to your autumn')
    $('.banner__body a').text('Shop Jewelry').removeClass('btn--white').addClass('btn--black')

    $('.review-stars__rating.hide').removeClass('hide')

    $('#shopify-section-template--15045611061442__custom-content h2').text('Ethical, sustainable, unique jewelry at 1/2 the price of luxury brands')
    $('#shopify-section-template--15045611061442__custom-content a:not(.btn)').text('Learn how we do it')
}, 250)

