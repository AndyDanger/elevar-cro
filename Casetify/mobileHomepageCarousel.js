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
    },
    {
        text: 'Creatures',
        link: 'https://slumberkins.com/collections/all-topics',
    },
    {
        text: 'Books',
        link: 'https://slumberkins.com/collections/books',
    },
    {
        text: 'Sets',
        link: 'https://slumberkins.com/collections/sets',
    },
    {
        text: 'For Educators',
        link: 'https://slumberkins.com/collections/all-educator-products',
    }
]

var mobileHomepageCarouselInterval = setInterval(function () {
    var ribbonContainer = document.querySelector('.ribbon-container ')
    if (!ribbonContainer || !$().flickity) {
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
    ribbonContainer.parentElement.insertBefore(mobileCarousel, ribbonContainer)
    $('#mobileCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        imagesLoaded: true
    });

}, 250)