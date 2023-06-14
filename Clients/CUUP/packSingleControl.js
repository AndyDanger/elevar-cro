window.currentPackColor = ``
window.currentPackSize = ``

let packSingleControlInterval = setInterval(() => {
    let colorDropdowns = document.querySelectorAll(`.pdp__content .selected-option.swatch`)
    let sizeDropdowns = document.querySelectorAll(`.pdp__content .selected-option.size`)
    if (!colorDropdowns.length || !sizeDropdowns.length) return
    // clearInterval(packSingleControlInterval)
    window.currentPackColor = window.currentPackColor || colorDropdowns[0].innerText
    window.currentPackSize = window.currentPackSize || sizeDropdowns[0].innerText

    if (window.currentPackColor != colorDropdowns[0].innerText ||
        window.currentPackColor != colorDropdowns[1].innerText ||
        window.currentPackColor != colorDropdowns[2].innerText) {
        console.log(`color changed`)
        window.currentPackColor = colorDropdowns[0].innerText
        colorDropdowns[1].click()
        let swatchInterval = setInterval(() => {
            let swatch = document.querySelector(`.product-listings__listing .selector--swatch[data-swatch-name="${window.currentPackColor}"]`)
            if (!swatch) return
            clearInterval(swatchInterval)
            swatch.click()
            colorDropdowns[2].click()
            let swatchInterval2 = setInterval(() => {
                let swatch = document.querySelector(`.product-listings__listing .selector--swatch[data-swatch-name="${window.currentPackColor}"]`)
                if (!swatch) return
                clearInterval(swatchInterval2)
                swatch.click()
            }, 200)
        }, 200)
    }

    if (window.currentPackSize != sizeDropdowns[0].innerText ||
        window.currentPackSize != sizeDropdowns[1].innerText ||
        window.currentPackSize != sizeDropdowns[2].innerText) {
        console.log(`size changed`)
        window.currentPackSize = sizeDropdowns[0].innerText
        sizeDropdowns[1].click()
        let swatchInterval = setInterval(() => {
            let swatches = document.querySelectorAll(`.product-listings__listing .size-options--buttons span`)
            if (!swatches.length) return
            clearInterval(swatchInterval)
            let correctSwatch = null
            swatches.forEach(swatch => {
                if (swatch.innerText != window.currentPackSize) return
                correctSwatch = swatch
            })
            correctSwatch.click()
            sizeDropdowns[2].click()
            let swatchInterval2 = setInterval(() => {
                let swatches = document.querySelectorAll(`.product-listings__listing .size-options--buttons span`)
                if (!swatches.length) return
                clearInterval(swatchInterval2)
                let correctSwatch = null
                swatches.forEach(swatch => {
                    if (swatch.innerText != window.currentPackSize) return
                    correctSwatch = swatch
                })
                correctSwatch.click()
            }, 200)
        }, 200)
    }

}, 250)