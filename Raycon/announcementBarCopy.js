let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)

    let announcementBarCopyInterval = setInterval(() => {
        let navBar = document.querySelector(`#shopify-section-info-bar strong`)
        if (!navBar) return
        clearInterval(announcementBarCopyInterval)
        navBar.innerText = `Get 20% off our best selling Fitness Earbuds`
        let fitnessPromoElement = document.querySelector(`#fitness-promo-ab`)
        if (!fitnessPromoElement) return
        fitnessPromoElement.innerText = `Save 20% When You Use Code: LEVELUP`
    }, 250)
}

let variant2 = () => {
    console.log(`variant2`)

    if (window.location.href.includes(`/products/the-fitness-earbuds`)) {
        let fitnessPageInterval = setInterval(() => {
            let fitnessPromoElement = document.querySelector(`#fitness-promo-ab`)
            if (!fitnessPromoElement) return
            clearInterval(fitnessPageInterval)
            fitnessPromoElement.innerText = `Save 20% When You Use Code: LEVELUP`
        }, 250)
    } else {
        let announcementBarInterval = setInterval(() => {
            let navBar = document.querySelector(`#shopify-section-info-bar`)
            if (!navBar) return
            clearInterval(announcementBarInterval)
            navBar.innerHTML = `
            <div id="newAnnouncementBar">
                <div class="newAnnouncementBarTitle">THE FITNESS EARBUDS</div>
                <a href="https://rayconglobal.com/products/the-fitness-earbuds" class="newAnnouncementBarButton">NOW 20% OFF</a>
                <div class="newAnnouncementBarIconsWrapper">
                    <img src="https://cdn.shopify.com/s/files/1/2404/0041/files/12_hours_of_playtime_400x.png?v=1637255012" />
                    <div>54 Hours Battery</div>
                </div>
                <div class="newAnnouncementBarIconsWrapper">
                    <img src="https://cdn.shopify.com/s/files/1/2404/0041/files/IPX-Waterproof_ICON_2c7925be-6451-4d19-88e7-948b1098ce0f_400x.png?v=1680282826" />
                    <div>Water Resistant</div>
                </div>
                <div class="newAnnouncementBarIconsWrapper">
                    <img src="https://cdn.shopify.com/s/files/1/2404/0041/files/Perfect-Fit-Stabilizers_ICON_790143fc-1523-46b7-9739-cd128fa1189a_400x.png?v=1680293692" />
                    <div>Customizeable Fit</div>
                </div>
            </div>
        `
            navBar.parentElement.append(navBar)
        }, 250)
    }
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