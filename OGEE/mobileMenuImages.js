let links = [
    {
        text: 'SHOP ALL',
        link: 'https://ogee.com/pages/shop-all',
        image: 'https://cld.accentuate.io/40272258236477/1664459875083/OGEE-Clean-Beauty-Collection-1.jpg?v=1664459875083&options=w_600,h_600,f_auto,q_auto'
    },
    {
        text: 'MAKEUP',
        link: 'https://ogee.com/collections/lip',
        image: 'https://i.imgur.com/TJy2jTL.jpg'
    },
    {
        text: 'SKINCARE',
        link: 'https://ogee.com/collections/moisturize',
        image: 'https://i.imgur.com/eeLMBNH.jpg'
    },
    {
        text: 'BUNDLES',
        link: 'https://ogee.com/collections/bundle',
        image: 'https://i.imgur.com/Nrj9Vlo.jpg'
    },
    {
        text: 'GIFT SETS',
        link: 'https://ogee.com/collections/gift-sets',
        image: 'https://i.imgur.com/whwptpd.jpg'
    },
    {
        text: 'ACCESSORIES',
        link: 'https://ogee.com/products/the-blender-brush',
        image: 'https://i.imgur.com/3J4tW4N.jpg'
    },
    {
        text: 'GIFT CARDS',
        link: 'https://ogee.com/products/e-gift-card',
        image: 'https://i.imgur.com/nKExOKK.jpg'
    },
]

let mobileMenuImagesInterval = setInterval(function () {
    let menuLinks = document.querySelectorAll('.mobnav-dropdown > li > a')
    if (!menuLinks.length) {
        return
    }
    clearInterval(mobileMenuImagesInterval)

    menuLinks.forEach((menuLink, index) => {
        let image = document.createElement(`img`)
        image.src = links[index].image
        image.className = `mobileMenuImage`
        menuLink.insertBefore(image, menuLink.firstChild)
    })

}, 250)