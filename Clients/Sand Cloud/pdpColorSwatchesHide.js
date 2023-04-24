let colorSwatchesInterval = setInterval(() => {
    let productOptions = document.querySelector(`[data-comp="ProductOptions"]`)
    if (!productOptions) return

    let swatchesDiv = productOptions.previousSibling
    swatchesDiv.classList.add(`swatchesDiv`)

    if (swatchesDiv.childElementCount > 1) return
    swatchesDiv.classList.add(`hide`)

}, 250)