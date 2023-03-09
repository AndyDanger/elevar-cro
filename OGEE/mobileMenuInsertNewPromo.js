let mobileNavInterval = setInterval(() => {
    let button = document.querySelector(`.menu-drawer-container.menu-opening summary.list-menu__item`)
    if (!button) {
        return
    }
    clearInterval(mobileNavInterval)
    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`test_variant`)
    if (variant) {
        sessionStorage.setItem(`test_variant`, variant)
    }
    let storageVariant = sessionStorage.getItem(`test_variant`)
    if (storageVariant && button.getAttribute(`aria-expanded`) == "true") {
        console.log(button)
        button.parentElement.open = false
        button.setAttribute(`aria-expanded`, false)
    }

    let promoLink = document.createElement(`a`)
    promoLink.className = `promoLink`
    promoLink.href = `https://ogee.com/products/sculpted-complexion-stick`
    promoLink.innerHTML = `<img src="https://i.imgur.com/LgE9cmJ.jpg" /><button class="add_to_cart relative bg-black border border-black cursor-pointer duration-300 font-helvetica md:w-1/2 py-3 text-center text-white text-xs tracking-widest transition-colors uppercase w-full">SHOP NOW</button>`
    document.querySelector(`#menu-drawer`).append(promoLink)

}, 250)