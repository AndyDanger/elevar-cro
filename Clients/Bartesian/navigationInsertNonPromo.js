
let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    let navigationInsertPromoInterval = setInterval(() => {
        let cocktailsLink = document.querySelector(`summary[data-href="/collections/cocktails"]`)
        if (!cocktailsLink) return
        clearInterval(navigationInsertPromoInterval)
        let promoColumnLink = document.createElement(`a`)
        promoColumnLink.href = `https://bartesian.com/pages/bartesian-monthly-subscription`
        promoColumnLink.className = `promoColumnLink submenu__columns one--fourth`
        promoColumnLink.innerHTML =
            `
            <img src="https://i.imgur.com/Mwq4C6Ql.jpg" style="margin-top: 10px;">
        `
        let navItems = cocktailsLink.nextElementSibling.querySelectorAll(`.submenu__columns`)
        navItems.forEach(navItem => {
            navItem.classList.add(`one--fifth`)
            navItem.classList.remove(`one--fourth`)
        })

        cocktailsLink.parentElement.querySelector(`.header__submenu--container`).append(promoColumnLink)

    }, 250)
}

let variant2 = () => {
    console.log(`variant2`)
    let navigationInsertPromoInterval = setInterval(() => {
        let cocktailsLink = document.querySelector(`summary[data-href="/collections/cocktails"]`)
        if (!cocktailsLink) return
        clearInterval(navigationInsertPromoInterval)
        let promoColumnLink = document.createElement(`a`)
        promoColumnLink.href = `https://bartesian.com/pages/bartesian-mixologist-rewards`
        promoColumnLink.className = `promoColumnLink submenu__columns one--fourth`
        promoColumnLink.innerHTML =
            `
            <img src="https://i.imgur.com/DwcPrTYl.jpg" style="margin-top: 10px;">
        `
        let navItems = cocktailsLink.nextElementSibling.querySelectorAll(`.submenu__columns`)
        navItems.forEach(navItem => {
            navItem.classList.add(`one--fifth`)
            navItem.classList.remove(`one--fourth`)
        })

        cocktailsLink.parentElement.querySelector(`.header__submenu--container`).append(promoColumnLink)

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