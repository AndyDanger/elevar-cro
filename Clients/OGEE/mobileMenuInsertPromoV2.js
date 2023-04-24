let mobileNavInterval = setInterval(() => {
    let button = document.querySelector('.mobnav-dropdown a[href="/pages/shop-all"] button')
    if (!button) {
        return
    }
    clearInterval(mobileNavInterval)
    if (!button.className.includes(`active`)) {
        button.click()
    }

    let promoLink = document.createElement(`a`)
    promoLink.className = `promoLink`
    promoLink.href = `https://ogee.com/products/sculpted-face-stick-bundle-3pc`
    promoLink.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0007/9858/8989/files/ogee-hp-chicklet-3-STEP-CONTOUR-v2_1000x.jpg?v=1672635050" />`
    document.querySelector(`.mobnav-dropdown`).append(promoLink)

}, 250)