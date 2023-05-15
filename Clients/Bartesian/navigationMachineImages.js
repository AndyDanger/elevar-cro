let images = [`https://cdn.shopify.com/s/files/1/0038/6049/6433/files/Bartesian-55300-Cosmo_750x.jpg?v=1683740409`, `https://cdn.shopify.com/s/files/1/0038/6049/6433/products/bartesian-duet-1_750x.jpg?v=1681743664`, `https://cdn.shopify.com/s/files/1/0038/6049/6433/products/55306-VPA-01_750x.jpg?v=1665520552`]
let desktopMachineImagesInterval = setInterval(() => {
    let links = document.querySelectorAll(`[d-handle="cocktail-maker"] a.header__menu-item, [d-handle="bartesian-duet-cocktail-maker"] a.header__menu-item, [d-handle="bartesian-professional-cocktail-maker"] a.header__menu-item`)
    if (!links.length) return
    clearInterval(desktopMachineImagesInterval)
    links.forEach((link, index) => {
        let image = document.createElement(`img`)
        image.src = images[index]
        image.className = `navImage`
        link.append(image)
    })
}, 250)

let mobileMachineImagesInterval = setInterval(() => {
    let links = document.querySelectorAll(`[id="link-Cocktail Makers"] a`)
    if (!links.length) return
    clearInterval(mobileMachineImagesInterval)
    links.forEach((link, index) => {
        let image = document.createElement(`img`)
        image.src = images[index]
        image.className = `navImage`
        link.append(image)
    })
}, 250)