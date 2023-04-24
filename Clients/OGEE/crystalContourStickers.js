let bestSellerImage = `https://i.imgur.com/ws44xKj.png`
let crueltyFreeImage = `https://i.imgur.com/JpkaHEt.png`
let organicImage = `https://i.imgur.com/3ouw4Dd.png`
let crystalContourStickersInterval = setInterval(() => {
    let images = document.querySelectorAll(`.product__viewing_img .slick-slide:nth-child(1) .product__media:not(.replaced)`)
    if (!images.length > 1) return
    // clearInterval(crystalContourStickersInterval)
    images.forEach(image => {
        image.classList.add(`replaced`)
        let stickerWrapper = document.createElement(`div`)
        stickerWrapper.className = `stickerWrapper`
        stickerWrapper.innerHTML = 
            `
                <img src="https://i.imgur.com/ws44xKj.png" class="bestSellerImage">
                <img src="https://i.imgur.com/JpkaHEt.png" class="crueltyFreeImage">
                <img src="https://i.imgur.com/3ouw4Dd.png" class="organicImage">
            `
        image.append(stickerWrapper)
    })
}, 250)