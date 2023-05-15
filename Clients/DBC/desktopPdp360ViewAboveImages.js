let desktopPdp360AboveImagesInterval = setInterval(() => {
    let section = document.querySelector(`[id*=FeaturedImageZoom]`)
    if (!section) return
    clearInterval(desktopPdp360AboveImagesInterval)
    section.classList.add(`shown`)
    let imageSection = document.querySelector(`#wr360image_wr360_player`)
    imageSection.classList.add(`showThis`)
    let imageSection2 = document.querySelector(`#wr360holder`)
    imageSection2.classList.add(`showThis`)
    window.dispatchEvent(new Event('resize'));

}, 250)