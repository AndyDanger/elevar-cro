let icons = [
    {
        name: `All`,
        image: ``
    },
    {
        name: `Alpaca`,
        image: `https://imgur.com/dv18kvW.png`
    },
    {
        name: `Bigfoot`,
        image: `https://imgur.com/9fBie8S.png`
    },
    {
        name: `Dragon`,
        image: `https://imgur.com/qQm6Adj.png`
    },
    {
        name: `Fox`,
        image: `https://imgur.com/HtmqvKS.png`
    },
    {
        name: `Hammerhead`,
        image: `https://imgur.com/iYKtubH.png`
    },
    {
        name: `Honey Bear`,
        image: `https://imgur.com/nZWNIsl.png`
    },
    {
        name: `Ibex`,
        image: `https://imgur.com/7aEXhd7.png`
    },
    {
        name: `Lynx`,
        image: `https://imgur.com/06qe5vR.png`
    },
    {
        name: `Narwhal`,
        image: `https://imgur.com/OuueuBN.png`
    },
    {
        name: `Otter`,
        image: `https://imgur.com/QENMtGD.png`
    },
    {
        name: `Sloth`,
        image: `https://imgur.com/XuffCuD.png`
    },
    {
        name: `Sprite`,
        image: `https://imgur.com/P0FKb2O.png`
    },
    {
        name: `Unicorn`,
        image: `https://imgur.com/0lGwzhn.png`
    },
    {
        name: `Yak`,
        image: `https://imgur.com/bJFp3Lh.png`
    },
    {
        name: `Yeti`,
        image: `https://imgur.com/FP0LcY3.png`
    },
    {
        name: `The Feels`,
        image: `https://imgur.com/YFrULms.png`
    },
    {
        name: `Special Edition Creatures`,
        image: ``
    },
]

let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)

    let navigationIconsInterval = setInterval(() => {
        let navItems = document.querySelectorAll(`#Linklist-1 .mobile-nav__item`)
        if (!navItems.length) return
        clearInterval(navigationIconsInterval)
        navItems.forEach((navItem, index) => {
            let icon = icons[index]
            if (!icon.image) return
            let navIcon = document.createElement(`img`)
            navIcon.src = icon.image
            navIcon.className = `navIcon`
            navItem.append(navIcon)
        })

    }, 250)

}

let variant2 = () => {
    console.log(`variant2`)

    let navigationIconsInterval = setInterval(() => {
        let navItems = document.querySelectorAll(`#Linklist-1 .mobile-nav__item`)
        if (!navItems.length) return
        clearInterval(navigationIconsInterval)
        navItems.forEach((navItem, index) => {
            let icon = icons[index]
            if (!icon.image) return
            let navIcon = document.createElement(`img`)
            navIcon.src = icon.image
            navIcon.className = `navIcon`
            navItem.append(navIcon)
        })
        document.querySelector(`.mobile-nav`).classList.add(`hide-theme`)
    }, 250)

}

let variant3 = () => {
    console.log(`variant3`)
}

let variants = [control, variant1, variant2, variant3]

let main = () => {
    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`test_variant`)
    if (variant) {
        sessionStorage.setItem(`test_variant`, variant)
    }
    let storageVariant = sessionStorage.getItem(`test_variant`) || 1 // default to variant 1
    variants[storageVariant]() // call the variant's function
}

main()