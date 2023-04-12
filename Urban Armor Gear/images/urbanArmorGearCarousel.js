let jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
jqueryScript.addEventListener("load", function (event) {
    let flickityScript = document.createElement('script');
    flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
    document.head.appendChild(flickityScript);
});
document.head.appendChild(jqueryScript);

let element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(element);

let links = [
    {
        text: 'Phone',
        link: 'https://www.urbanarmorgear.com/collections/phones',
    },
    {
        text: 'Tablet',
        link: 'https://www.urbanarmorgear.com/collections/tablets',
    },
    {
        text: 'Laptops',
        link: 'https://www.urbanarmorgear.com/collections/laptops',
    },
    {
        text: 'Headphones',
        link: 'https://www.urbanarmorgear.com/collections/headphones',
    },
    {
        text: 'Watches',
        link: 'https://www.urbanarmorgear.com/collections/watches',
    },
    {
        text: 'Gear',
        link: 'https://www.urbanarmorgear.com/collections/gears',
    },
]

let mobileHomepageCarouselInterval = setInterval(function () {
    let header = document.querySelector(`[class*="MobileHeader__Container"]`)
    if (!header || !$().flickity) {
        return
    }
    clearInterval(mobileHomepageCarouselInterval)
    // do something with buttons
    let mobileCarousel = document.createElement('div')
    mobileCarousel.id = "mobileCarousel"
    mobileCarousel.style = `
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid lightgray;
    `

    let html = ``
    links.forEach(link => {
        html += `<a class="carousel-cell" href="${link.link}" style='font-family: "Interstate Bold", Helvetica, Arial, sans-serif;text-align: center;padding: 0px 10px;'>${link.text}</a>`
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