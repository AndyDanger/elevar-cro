let emptyCartInterval = setInterval(() => {
    let emptyThing = document.querySelector(`.Cart__Empty`)
    if (!emptyThing || document.querySelector(`.emptyCartPromo`)) {
        return
    }
    // clearInterval(emptyCartInterval)

    let emptyCartPromo = document.createElement(`a`)
    emptyCartPromo.className = `emptyCartPromo`
    emptyCartPromo.href = `https://ogee.com/products/sculpted-face-stick-bundle-3pc`
    emptyCartPromo.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0007/9858/8989/files/ogee-hp-chicklet-3-STEP-CONTOUR-v2_1000x.jpg?v=1672635050" />`
    emptyThing.parentElement.append(emptyCartPromo)

}, 250)