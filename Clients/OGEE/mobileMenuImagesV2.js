let links = [
    // {
    //     text: 'SHOP ALL',
    //     link: 'https://ogee.com/pages/shop-all',
    //     image: 'https://cld.accentuate.io/40272258236477/1664459875083/OGEE-Clean-Beauty-Collection-1.jpg?v=1664459875083&options=w_600,h_600,f_auto,q_auto'
    // },
    {
        text: 'MAKEUP',
        link: 'https://ogee.com/collections/lip',
        image: 'https://i.imgur.com/GbQoRBH.jpg'
    },
    {
        text: 'SKINCARE',
        link: 'https://ogee.com/collections/moisturize',
        image: 'https://i.imgur.com/8AYuk8V.jpg'
    },
    {
        text: 'BUNDLES',
        link: 'https://ogee.com/collections/bundle',
        image: 'https://i.imgur.com/J5RHF6I.jpg'
    },
    {
        text: 'GIFT SETS',
        link: 'https://ogee.com/collections/gift-sets',
        image: 'https://i.imgur.com/0VmzHCP.jpg'
    },
    {
        text: 'ACCESSORIES',
        link: 'https://ogee.com/products/the-blender-brush',
        image: 'https://i.imgur.com/mpe1qwz.jpg'
    },
    {
        text: 'GIFT CARDS',
        link: 'https://ogee.com/products/e-gift-card',
        image: 'https://i.imgur.com/0lKI8FB.jpg'
    },
]

let mobileMenuImagesInterval = setInterval(function () {
    let firstMenu = document.querySelector('#link-Shop')
    if (!firstMenu) {
        return
    }
    clearInterval(mobileMenuImagesInterval)

    let menuLinks = firstMenu.querySelectorAll(`div.menu-drawer__inner-submenu > ul > li > details > summary > a`)

    menuLinks.forEach((menuLink, index) => {
        let image = document.createElement(`img`)
        image.src = links[index].image
        image.className = `mobileMenuImage`
        menuLink.parentElement.insertBefore(image, menuLink)
    })

}, 250)