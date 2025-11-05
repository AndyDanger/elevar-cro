let horizontal = window.location.href.includes(`horizontal`)
let imageUrl = horizontal ? `https://i.imgur.com/5biGXaz.png` : `https://i.imgur.com/3Dpkuhv.png`
document.body.classList.add(horizontal ? `horizontal` : `vertical`)
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
                <img src="${imageUrl}" class="stickerImage">
            `
        image.append(stickerWrapper)
    })
}, 250)