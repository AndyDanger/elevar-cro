let pdpPercentOffInterval = setInterval(() => {
    let originalPriceElement = document.querySelector(`[data-product-compare-price] .money`)
    if (!originalPriceElement) return
    // clearInterval(pdpPercentOffInterval)
    let newPriceElement = document.querySelector(`[data-product-price] .money`)
    let numberPattern = /\d+/g
    let originalPrice = parseInt(originalPriceElement.innerText.match(numberPattern).join(''))
    let newPrice = parseInt(newPriceElement.innerText.match(numberPattern).join(''))
    let percent = (1 - (newPrice / originalPrice)) * 100
    let roundedPercent = roundNearest5(percent)
    let desktopText = `${roundedPercent}% Off`
    let mobileText = `(${roundedPercent}% Off)`

    let desktopPercentOffSticker = document.querySelector(`.desktopPercentOffSticker`) || document.createElement(`div`)
    if (desktopPercentOffSticker.innerText != desktopText) {
        desktopPercentOffSticker.className = `desktopPercentOffSticker`
        desktopPercentOffSticker.innerText = `${roundedPercent}% Off`
        document.querySelector(`.product__price`).append(desktopPercentOffSticker)
    }

    let mobilePercentOffSticker = document.querySelector(`.mobilePercentOffSticker`) || document.createElement(`div`)
    if (mobilePercentOffSticker.innerText != mobileText) {
        mobilePercentOffSticker.className = `mobilePercentOffSticker`
        mobilePercentOffSticker.innerText = `(${roundedPercent}% Off)`
        document.querySelector(`.product__price`).append(mobilePercentOffSticker)
    }
}, 250)

function roundNearest5(num) {
    return Math.round(num / 5) * 5;
}