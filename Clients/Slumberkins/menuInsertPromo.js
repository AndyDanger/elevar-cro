let menuInsertPromoInterval = setInterval(function () {
    let mobileMenu = document.querySelector('#shopify-section-drawer-menu .drawer__inner')
    if (!mobileMenu) {
        return
    }
    clearInterval(menuInsertPromoInterval)
    let promoLink = document.createElement(`a`)
    promoLink.id = `promoLink`
    promoLink.href = `https://slumberkins.com/pages/slumberkins-on-appletvplus`
    promoLink.innerHTML = `<img src="https://i.imgur.com/vZSDttk.jpg" /><span>Streaming Now on Apple+</span>`

    mobileMenu.append(promoLink)
}, 250)