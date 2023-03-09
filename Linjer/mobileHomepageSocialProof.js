let flickityScript = document.createElement('script');
flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
document.head.appendChild(flickityScript);

let cssElement = document.createElement("link");
cssElement.setAttribute("rel", "stylesheet");
cssElement.setAttribute("type", "text/css");
cssElement.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(cssElement);

let pressImages = [`https://i.imgur.com/47kzoO7.png`, `https://i.imgur.com/hWKcnV9.png`, `https://i.imgur.com/1LaaCze.png`, `https://i.imgur.com/fyN90Th.png`, `https://i.imgur.com/DwPBxiz.png`]
let instagramImages = [
    {
        handle: `catekittlitz`,
        image: `https://i.imgur.com/MIFPrVT.jpg`
    },
    {
        handle: `nooomsworld`,
        image: `https://i.imgur.com/kmPNTo3.jpg`
    },
    {
        handle: `agnesartych`,
        image: `https://i.imgur.com/KkVYta1.jpg`
    },
    {
        handle: `cindy_gradilla`,
        image: `https://i.imgur.com/tUd0Zhe.jpg`
    },
    {
        handle: `akvile_trautmann`,
        image: `https://i.imgur.com/dZo345a.jpg`
    },
    {
        handle: `stylemilkshake`,
        image: `https://i.imgur.com/VExxal8.jpg`
    },
    {
        handle: `hetall_patell`,
        image: `https://i.imgur.com/IZbLSLL.jpg`
    },
    {
        handle: `daniellefedder`,
        image: `https://i.imgur.com/AwJSgwG.jpg`
    },
]

let mobileHomeSocialProofInterval = setInterval(() => {
    let reviewsSection = document.querySelector(`.section-review-cards`)
    if (!reviewsSection || typeof $ == `undefined` || !$().flickity) return
    clearInterval(mobileHomeSocialProofInterval)

    let pressImagesDiv = document.createElement(`div`)
    pressImagesDiv.className = `pressImagesDiv`
    let imagesHtmlArray = pressImages.map(image => `<img src=${image} />`)
    let line1Images = imagesHtmlArray.splice(0, 3)
    pressImagesDiv.innerHTML = `<div class="line1">${line1Images.join(``)}</div><div class="line2">${imagesHtmlArray.join(``)}</div>`
    let sectionTitle = reviewsSection.querySelector(`.section-title`)
    sectionTitle.innerText = `As Seen In`
    sectionTitle.append(pressImagesDiv)

    let instagramCarouselDiv = document.createElement(`div`)
    instagramCarouselDiv.className = `instagramCarouselDiv`
    instagramCarouselDiv.innerHTML = `<div class="instagramDivHeader"><h2 class="section-title strong color--black text-left">Linjer on You</h2></div><div class="carouselImages">${instagramImages.map(mapImages).join(``)}</div>`
    reviewsSection.append(instagramCarouselDiv)
    $(`.carouselImages`).flickity({
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        imagesLoaded: true,
        pageDots: false,
        prevNextButtons: false
    })
}, 250)

function mapImages(image) {
    return `<a href="https://www.linjer.co/collections/jewelry"><img src="${image.image}"/><div class="instagramHandles">@${image.handle}</div></a>`
}