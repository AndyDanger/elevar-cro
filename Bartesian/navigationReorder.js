let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    /*Variety Packs
    By Spirit
    New Releases
    Highest Rated
    Low Calorie*/
    let navigationReorderInterval = setInterval(() => {
        let cocktailsLink = document.querySelector(`summary[data-href="/collections/cocktails"]`)
        if (!cocktailsLink) return
        clearInterval(navigationReorderInterval)
        let navItems = cocktailsLink.nextElementSibling.querySelectorAll(`.submenu__columns`)
        let parent = navItems[0].parentElement
        parent.append(navItems[1])
        parent.insertBefore(navItems[4], navItems[0])

        let mobileNavItems = document.querySelectorAll(`#link-Cocktails > div > ul > li`)
        let mobileParent = mobileNavItems[0].parentElement
        mobileParent.append(mobileNavItems[2])
        mobileParent.insertBefore(mobileNavItems[5], mobileNavItems[1])

    }, 250)
}

let variant2 = () => {
    console.log(`variant2`)
    let navigationReorderInterval = setInterval(() => {
        let cocktailsLink = document.querySelector(`summary[data-href="/collections/cocktails"]`)
        if (!cocktailsLink) return
        clearInterval(navigationReorderInterval)
        let navItems = cocktailsLink.nextElementSibling.querySelectorAll(`.submenu__columns`)
        navItems.forEach(navItem => {
            navItem.classList.add(`one--fourth`)
            navItem.classList.remove(`one--fifth`)
        })
        navItems[1].remove()

        let mobileNavItems = document.querySelectorAll(`#link-Cocktails > div > ul > li`)
        mobileNavItems[2].remove()
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