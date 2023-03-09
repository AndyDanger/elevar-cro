const desktopImage = `https://i.imgur.com/Wd1P9M4.gif`
const mobileImage = `https://imgur.com/wrIpcE1.gif`

let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);

let mobileHomepageGifInterval = setInterval(function () {
    let homepageHero = document.querySelector(`.home-hero-section__content`)
    if (typeof $ == "undefined" || !homepageHero) {
        return
    }
    clearInterval(mobileHomepageGifInterval)

    let desktopCarousel = document.createElement(`div`)
    desktopCarousel.id = `desktopCarousel`
    desktopCarousel.innerHTML = desktopImages.map(mapHtml).join('')

    let mobileCarousel = document.createElement(`div`)
    mobileCarousel.id = `mobileCarousel`
    mobileCarousel.innerHTML = mobileImages.map(mapHtml).join('')

    homepageHero.parentElement.insertBefore(desktopCarousel, homepageHero)
    homepageHero.parentElement.insertBefore(mobileCarousel, homepageHero)

    $('#desktopCarousel').flickity(options);
    $('#mobileCarousel').flickity(options);
    homepageHero.remove()
}, 250)

function mapHtml(image) {
    return `<div class="carousel-cell"><a href='https://slumberkins.com/pages/skillbuilding-crews'><img src=${image} /></a></div>`
}