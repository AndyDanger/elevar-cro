let jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(jqueryScript);

let flickityScript = document.createElement('script');
flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
document.head.appendChild(flickityScript);

let flickityStyleTag = document.createElement("link");
flickityStyleTag.setAttribute("rel", "stylesheet");
flickityStyleTag.setAttribute("type", "text/css");
flickityStyleTag.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(flickityStyleTag);

let links = [
    {
        text: '1',
        link: '',
        image: 'https://i.imgur.com/YtYO94f.png'
    },
    {
        text: '2',
        link: '',
        image: 'https://i.imgur.com/UidWhpw.png'
    },
    {
        text: '3',
        link: '',
        image: 'https://i.imgur.com/PHIiDGY.png'
    },
]

let contourPageCarouselBanner = setInterval(function () {
    let banner = document.querySelector('#s-90e29323-8138-4230-8212-782acab99917')
    if (!banner || !$().flickity) {
        return
    }
    clearInterval(contourPageCarouselBanner)
    // do something with buttons
    let mobileCarousel = document.createElement('div')
    mobileCarousel.id = "mobileCarousel"

    let html = ``
    links.forEach(link => {
        html += `<a class="carousel-cell" href="${link.link}"><img src="${link.image}" /></a>`
    })

    mobileCarousel.innerHTML = html
    banner.parentElement.insertBefore(mobileCarousel, banner)
    $('#mobileCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        imagesLoaded: true
    });

}, 250)