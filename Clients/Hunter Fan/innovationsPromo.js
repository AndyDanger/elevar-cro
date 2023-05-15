let memorialDaySaleInterval = setInterval(() => {
    let productBadges = document.querySelectorAll(`.product-badge`)
    if (!productBadges.length) return
    clearInterval(memorialDaySaleInterval)
    let bannerImage = document.createElement(`img`)
    bannerImage.src = `https://i.imgur.com/RzHnywf.jpg`
    bannerImage.alt = `15% Off Orders $199+ With Code: SPF15. Excluding clearance. Valid through May 11th, 2023`
    bannerImage.width = `931`
    bannerImage.height = `113`

    let bredcrumbWrap = document.querySelector(`.bredcrumbWrap`)
    if (bredcrumbWrap) {
        let clone = bannerImage.cloneNode(true)
        clone.classList.add(`mb-banner`)
        bredcrumbWrap.append(clone)
    }

    let productTitle = document.querySelector(`.product__title h1`)
    if (productTitle) {
        bannerImage.classList.add(`dsk-banner`)
        productTitle.parentElement.insertBefore(bannerImage, productTitle)
    }
}, 250)