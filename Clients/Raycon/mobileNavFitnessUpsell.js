let mobileNavFitnessUpsellInterval = setInterval(() => {
    let menu = document.querySelector(`#ariaHamburger`)
    if (!menu) return
    clearInterval(mobileNavFitnessUpsellInterval)
    let upsell = document.createElement(`a`)
    upsell.href = `https://rayconglobal.com/products/the-fitness-earbuds`
    upsell.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/2404/0041/files/the-fitness-earbuds.jpg?v=1682455552" style="
        width: 100%;
        padding: 40px;
    ">`
    menu.append(upsell)
}, 250)