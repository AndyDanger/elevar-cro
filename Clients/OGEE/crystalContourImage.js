let newImage = `https://i.imgur.com/ZUJhKm9.jpg`
let crystalContourImageInterval = setInterval(() => {
    let images = document.querySelectorAll(`.product__media img[src*="OGEE-CONTOUR"]:not(.replaced)`)
    if (!images.length > 1) return
    // clearInterval(crystalContourImageInterval)
    images.forEach(image => {
        image.src = newImage
        image.srcset = newImage
        image.classList.add(`replaced`)
    })
}, 250)