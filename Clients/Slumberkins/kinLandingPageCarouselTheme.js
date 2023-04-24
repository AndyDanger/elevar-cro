let kinLandingPageCarouselThemeInterval = setInterval(() => {
    let carousel = document.querySelector(`nav[aria-roledescription="carousel"]`)
    if (!carousel) return
    let themeDiv = document.querySelector(`#themeDiv`)
    if (!themeDiv) {
        themeDiv = document.createElement(`div`)
        themeDiv.id = `themeDiv`
        carousel.insertBefore(themeDiv, carousel.querySelector(`.splide__fade`))
    }
    let activeSlide = carousel.querySelector(`.is-active`)
    let link = activeSlide.querySelector(`a`)
    let formattedHref = link.href.replace(`https://slumberkins.com/collections/`, '').split(`-`).join(` `).toUpperCase()
    if (themeDiv.innerText == formattedHref) return
    themeDiv.innerText = formattedHref
}, 250)