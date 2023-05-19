let images = [`https://cdn.shopify.com/s/files/1/0038/6049/6433/files/Bartesian-55300-Cosmo_750x.jpg?v=1683740409`, `https://cdn.shopify.com/s/files/1/0038/6049/6433/products/bartesian-duet-1_750x.jpg?v=1681743664`, `https://cdn.shopify.com/s/files/1/0038/6049/6433/products/55306-VPA-01_750x.jpg?v=1665520552`]
let desktopMachineImagesInterval = setInterval(() => {
    let links = document.querySelectorAll(`.desktop__main-menu a.header__menu-item[href*="/products/cocktail-maker"], .desktop__main-menu a.header__menu-item[href*="/products/bartesian-duet-cocktail-maker"], .desktop__main-menu a.header__menu-item[href*="/products/bartesian-professional-cocktail-maker"]`)
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