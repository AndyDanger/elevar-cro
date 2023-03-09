function doStuff() {

    if (window.location.href.includes(`variant=gif`)) {
        return
    }

    const desktopImages = [`https://imgur.com/nN7oda9.png`, `https://imgur.com/zUvUbhc.png`, `https://imgur.com/YHoH7RP.png`, `https://imgur.com/LL0Q6i0.png`]
    const mobileImages = [`https://imgur.com/VDTmk2j.png`, `https://imgur.com/5KxiShZ.png`, `https://imgur.com/3Gvo7Vy.png`, `https://imgur.com/NL4ppxr.png`]

    let script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.head.appendChild(script);

    let script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
    document.head.appendChild(script2);

    let cssElement = document.createElement("link");
    cssElement.setAttribute("rel", "stylesheet");
    cssElement.setAttribute("type", "text/css");
    cssElement.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
    document.getElementsByTagName("head")[0].appendChild(cssElement);

    let options = {
        autoPlay: true,
        // contain: true,
        imagesLoaded: true,
        freeScroll: false,
        // lazyLoad: 1,
        wrapAround: true,
        pageDots: true,
        prevNextButtons: false
    }

    let flickityInterval = setInterval(function () {
        let homepageHero = document.querySelector(`.home-hero-section__content`)
        if (typeof $ == "undefined" || !$().flickity || !homepageHero) {
            return
        }
        clearInterval(flickityInterval)

        document.querySelector(`.home-hero-section`).classList.add(`with-carousel`)

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
}

doStuff()

function mapHtml(image) {
    return `<div class="carousel-cell">
                <div class="bannerText">
                    <div class="bannerHeader tw-type-h1">Encouraging Emotional Growth</div>
                    <div class="bannerDescription tw-text-xl tw-w-full md:tw-w-8/12 tw-mx-auto">Slumberkins is dedicated to helping families raise caring, confident, and resilient children through affirmations, stories and creature characters.</div>
                </div>
                <a href='https://slumberkins.com/pages/skillbuilding-crews'>
                    <img src=${image} />
                </a>
            </div>`
}