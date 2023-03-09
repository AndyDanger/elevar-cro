let greenBackgroundImage = `https://i.imgur.com/OZe9uAx.jpg`
let angledImage = `https://i.imgur.com/Zt0KP9S.jpg`

let pdpFirstImageInterval = setInterval(() => {
    let pdpSwiper = document.querySelector(`.product-main-slider.swiper-initialized`)
    let thumbnailSwiper = document.querySelector(`.product-pagination-slider.swiper-initialized`)
    if (!pdpSwiper || !thumbnailSwiper) return
    clearInterval(pdpFirstImageInterval)
    let image = angledImage
    if (window.location.href.includes(`variant`)) {
        image = greenBackgroundImage
        pdpSwiper.querySelector(`[aria-label="8 / 16"]`) ? pdpSwiper.querySelector(`[aria-label="8 / 16"]`).remove() : null
        thumbnailSwiper.querySelector(`[aria-label="8 / 16"]`) ? thumbnailSwiper.querySelector(`[aria-label="8 / 16"]`).remove() : null
    }
    pdpSwiper.querySelector(`.swiper-slide img`).src = image
    thumbnailSwiper.querySelector(`.swiper-slide img`).src = image
    pdpSwiper.classList.add(`firstImageReplaced`)
    thumbnailSwiper.classList.add(`firstImageReplaced`)
}, 250)