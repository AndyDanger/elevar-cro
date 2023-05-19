let jqueryScript = document.createElement('script')
jqueryScript.type = "text/javascript"
jqueryScript.addEventListener("load", function (event) {
    let slickScript = document.createElement('script')
    slickScript.type = "text/javascript"
    slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
    document.head.appendChild(slickScript)
})
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js'
document.getElementsByTagName('head')[0].appendChild(jqueryScript)

let slickCss = document.createElement("link")
slickCss.setAttribute("rel", "stylesheet")
slickCss.setAttribute("type", "text/css")
slickCss.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css")
document.getElementsByTagName("head")[0].appendChild(slickCss)

let desktopImages = [
    {
        name: `Main Banner - The Bartesian`,
        image: `https://i.imgur.com/LVr1nnp.jpg`,
        link: `https://bartesian.com/products/cocktail-maker`,
    },
    {
        name: `Curated Cocktail Collections`,
        image: `https://i.imgur.com/iht0jZF.jpg`,
        link: `https://bartesian.com/collections/cocktail-variety-packs`,
    },
    {
        name: `Education Steps`,
        image: `https://i.imgur.com/DNIOtUJ.jpg`,
        link: `https://bartesian.com/products/cocktail-maker`,
    },
    {
        name: `Subscribe & Savae`,
        image: `https://i.imgur.com/Fra8ddp.jpg`,
        link: `https://bartesian.com/pages/bartesian-monthly-subscription`,
    }
]

let mobileImages = [
    {
        name: `Main Banner - The Bartesian`,
        image: `https://i.imgur.com/2fMElgT.jpg`,
        link: `https://bartesian.com/products/cocktail-maker`,
    },
    {
        name: `Curated Cocktail Collections`,
        image: `https://i.imgur.com/bBvuv1H.jpg`,
        link: `https://bartesian.com/collections/cocktail-variety-packs`,
    },
    {
        name: `Education Steps`,
        image: `https://i.imgur.com/kd35xkY.jpg`,
        link: `https://bartesian.com/products/cocktail-maker`,
    },
    {
        name: `Subscribe & Savae`,
        image: `https://i.imgur.com/Ew5BZLz.jpg`,
        link: `https://bartesian.com/pages/bartesian-monthly-subscription`,
    }
]
let homepageCarouselBannerInterval = setInterval(() => {
    let hero = document.querySelector(`.hero`)
    let featuredInBanner = document.querySelector(`[id*="__characteristics"]`)
    let mobileVideoBanner = document.querySelector(`section.homepage-video`)
    if (typeof jQuery != `undefined` && !$().slick) {
        let slickScript = document.createElement('script')
        slickScript.type = "text/javascript"
        slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
        document.head.appendChild(slickScript)
    }
    if (!hero || !featuredInBanner || !mobileVideoBanner || typeof jQuery == `undefined` || !$().slick) return
    clearInterval(homepageCarouselBannerInterval)

    let desktopCarouselBanner = document.createElement(`div`)
    desktopCarouselBanner.id = `desktopCarouselBanner`
    let html = ``
    desktopImages.forEach(image => {
        html += `<a href="${image.link}"><img src="${image.image}"/></a>`
    })

    desktopCarouselBanner.innerHTML = html
    hero.append(desktopCarouselBanner)

    let mobileCarouselBanner = document.createElement(`div`)
    mobileCarouselBanner.id = `mobileCarouselBanner`
    let mobileHtml = ``
    mobileImages.forEach(image => {
        mobileHtml += `<a href="${image.link}"><img src="${image.image}"/></a>`
    })

    mobileCarouselBanner.innerHTML = mobileHtml
    hero.append(mobileCarouselBanner)

    $(desktopCarouselBanner).slick({
        autoplay: true,
        arrows: true,
        dots: true,
    })

    $(mobileCarouselBanner).slick({
        arrows: true,
        autoplay: true,
        dots: true,
    })

    document.querySelector(`.hero-slider`).classList.add(`hidden`)

    featuredInBanner.parentElement.insertBefore(featuredInBanner, mobileVideoBanner)

}, 250)