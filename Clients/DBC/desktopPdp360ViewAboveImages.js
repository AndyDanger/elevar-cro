window.currentUrl = ``
window.clickedButton = false
let desktopPdp360AboveImagesInterval = setInterval(() => {
    let button = document.querySelector(`.button360 a`)
    let viewer = document.querySelector(`#wr360image_wr360_player`)
    if (!button || !viewer || !viewer.src) return
    if (window.currentUrl != window.location.href) {
        window.currentUrl = window.location.href
        window.clickedButton = false
        return
    }
    if (window.clickedButton) return
    window.clickedButton = true
    window.currentUrl = window.location.href
    // window.currentVariant = viewer.src
    // clearInterval(desktopPdp360AboveImagesInterval)
    console.log(`clicking`)
    button.click()

}, 250)