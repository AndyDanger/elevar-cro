let bannerImageSrc = "https://cdn.shopify.com/s/files/1/0259/4629/2284/files/21DaysSavingsPDPBNR_WK3_912x100_ea85ada0-46c1-47f2-88c3-69c2193188dd.jpg?v=1688736499"
let bannerLink = "https://www.hunterfan.com/pages/21-days-of-deals" // Do empty quotes if the banner shouldn't link anywhere
let bannerImageAlt = "Shop Deals up to 75% off"
let bannerImageWidth = 931
let bannerImageHeight = 113

let personalizationInterval = setInterval(() => {
    let productBadges = document.querySelectorAll(`.product-badge`)
    if (!productBadges.length) return
    clearInterval(personalizationInterval)
    let banner = document.createElement(`div`)
    let imageHtml = `
        <img src="${bannerImageSrc}" alt="${bannerImageAlt}" width="${bannerImageWidth}" height="${bannerImageHeight}" />
    `
    banner.innerHTML = bannerLink ? `<a href="${bannerLink}">${imageHtml}</a>` : imageHtml

    let bredcrumbWrap = document.querySelector(`.bredcrumbWrap`)
    if (bredcrumbWrap) {
        let bannerClone = banner.cloneNode(true)

        bannerClone.classList.add(`mb-banner`)
        bredcrumbWrap.append(bannerClone)
    }

    let productTitle = document.querySelector(`.product__title h1`)
    if (productTitle) {
        banner.classList.add(`dsk-banner`)
        productTitle.parentElement.insertBefore(banner, productTitle)
    }
}, 250)