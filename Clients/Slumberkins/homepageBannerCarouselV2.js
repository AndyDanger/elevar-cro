function doStuff() {

    const desktopImages = [`https://i.imgur.com/zUvUbhc.png`, `https://i.imgur.com/oHOF3lY.jpg`, `https://i.imgur.com/YpgOxQF.jpg`, `https://i.imgur.com/YHoH7RP.png`]
    const mobileImages = [`https://i.imgur.com/bak41Wa.jpg`, `https://i.imgur.com/j4fC3QY.jpg`, `https://i.imgur.com/hy5KwG9.jpg`, `https://i.imgur.com/EHKA9yc.jpg`]
    const headerArray = [`Encourage Emotional Growth`, `Watch Your Connection Bloom`, `Streaming Now`, `Strengthen the Home-School Connection`]
    const textArray = [`Slumberkins is dedicated to helping families raise caring, confidence, and resilient children through affirmations, stories and creature characters.`, `We reimagined storytime to include interactive books and skill-building lessons that bring families together.`, `We are excited to share that our creatures are being brought to linfe in an Apple Original Series from The Jim Henson Company.`, `Teach lifelong social-emotional skills through playful and therapeutic learning.`]
    const linkArray = [`https://slumberkins.com/pages/skillbuilding-crews`, `https://slumberkins.com/collections/spring-collection`, `https://slumberkins.com/pages/slumberkins-on-appletvplus`, `https://slumberkins.com/pages/hello-educators`]
    const ctaArray = [`Meet Our Creatures`, `Explore the Collection`, `Learn More`, `Learn More`]
    let jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.head.appendChild(jqueryScript);

    let flickityScript = document.createElement('script');
    flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
    document.head.appendChild(flickityScript);

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
        lazyLoad: 1,
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
        let desktopHtml = ``
        desktopImages.forEach((image, index) => {
            desktopHtml += mapHtml(image, headerArray[index], textArray[index], linkArray[index], ctaArray[index])
        })
        desktopCarousel.innerHTML = desktopHtml

        let mobileCarousel = document.createElement(`div`)
        mobileCarousel.id = `mobileCarousel`
        let mobileHtml = ``
        mobileImages.forEach((image, index) => {
            mobileHtml += mapHtml(image, headerArray[index], textArray[index], linkArray[index], ctaArray[index])
        })
        mobileCarousel.innerHTML = mobileHtml

        homepageHero.parentElement.insertBefore(desktopCarousel, homepageHero)
        homepageHero.parentElement.insertBefore(mobileCarousel, homepageHero)

        $('#desktopCarousel').flickity(options);
        $('#mobileCarousel').flickity(options);
        homepageHero.remove()
    }, 250)
}

doStuff()

function mapHtml(image, header, text, link, cta) {
    return `<div class="carousel-cell">
                <div class="bannerText">
                    <div class="bannerHeader tw-type-h1">${header}</div>
                    <div class="bannerDescription tw-text-xl tw-w-full md:tw-w-8/12 tw-mx-auto">${text}</div>
                    <div class="home-hero-section__button" style="margin-top: 10px">
                        <a href="${link}" data-hover="${cta}" class="btn btn--primary btn--large">${cta}</a>
                    </div>
                </div>
                <a href="${link}">
                    <img src="${image}" />
                </a>
            </div>`
}