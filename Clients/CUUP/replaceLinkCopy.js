let control = () => {
    console.log(`control`)
    let brasThatWorkInterval = setInterval(() => {
        let link = document.querySelector(`[data-top-menu="bras"] [href="/collections/bras-that-work"]`)
        if (!link) return
        clearInterval(brasThatWorkInterval)
        link.addEventListener(`click`, trackLinkClick)
        let mobileLink = document.querySelector(`.bras.nav-mobile__sub [href="/collections/bras-that-work"]`)
        mobileLink.addEventListener(`click`, trackLinkClick)
    }, 250)

    function trackLinkClick() {
        let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-127301726-1') // insert their UA number here
        if (!tracker) return
        tracker.send('event', 'navigation', 'experiment link click - bras that work', window.location.href) // replace event category and event action
    }
}

let variant1 = () => {
    console.log(`variant1`)
    let brasThatWorkInterval = setInterval(() => {
        let link = document.querySelector(`[data-top-menu="bras"] [href="/collections/bras-that-work"]`)
        if (!link) return
        clearInterval(brasThatWorkInterval)
        link.innerText = `A Guide to CUUP Bras`
        link.href = `/pages/innovation`
        link.addEventListener(`click`, trackLinkClick)
        let mobileLink = document.querySelector(`.bras.nav-mobile__sub [href="/collections/bras-that-work"]`)
        mobileLink.innerText = `A Guide to CUUP Bras`
        mobileLink.href = `/pages/innovation`
        mobileLink.addEventListener(`click`, trackLinkClick)
    }, 250)


    function trackLinkClick() {
        let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-127301726-1') // insert their UA number here
        if (!tracker) return
        tracker.send('event', 'navigation', 'experiment link click - a guide to cuup bras', window.location.href) // replace event category and event action
    }
}

let variant2 = () => {
    console.log(`variant2`)
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