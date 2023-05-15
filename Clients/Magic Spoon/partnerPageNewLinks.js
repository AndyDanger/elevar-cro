let selectors = [`#hero-content>a`, `div.clip-content>a`, `#footer-banner>div:nth-of-type(1)>a`]
let url = new URL(window.location.href)
let partner = url.searchParams.get(`partner`) || `BONGINO`
let partnerPageNewLinksInterval = setInterval(() => {
    if (!selectors.length) clearInterval(partnerPageNewLinksInterval)
    let newHref = `https://magicspoon.com/discount/${partner}?redirect=/products/variety-1-case-6-boxes-1`
    selectors.forEach(selector => {
        let link = document.querySelector(selector)
        if (!link) return
        link.href = newHref
        let index = selectors.indexOf(selector)
        selectors.splice(index, 1)
    })
}, 250)
