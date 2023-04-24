let jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(jqueryScript);

let flickityScript = document.createElement('script');
flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
document.head.appendChild(flickityScript);

let element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(element);

let heroSection = document.querySelector('.hero-section')
let mobileCarousel = document.createElement('div')
mobileCarousel.id = "mobileCarousel"

heroSection.parentElement.append(heroSection.cloneNode(true))
heroSection.parentElement.append(heroSection.cloneNode(true))
heroSection.parentElement.append(heroSection.cloneNode(true))

$('.hero-section--container').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    imagesLoaded: true
});

