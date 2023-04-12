let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)

    let badgeText = `BEST SELLER`
    let selectors = [`[data-product-id="6573374013463"] img`, `.nav--mobile [href="/products/the-fitness-earbuds"] span.lazyloaded`, `.nav--desktop [href="/products/the-fitness-earbuds"] span.lazyloaded`, `.section-body .collection-slider [href="/products/the-fitness-earbuds?variant=39363744890903"] img.lazyloaded`]
    let plpBadgeInterval = setInterval(() => {
        if (!selectors.length) clearInterval(plpBadgeInterval)
        selectors.forEach((selector, index) => {
            let productImage = document.querySelector(selector)
            if (!productImage) return
            selectors.splice(index, 1)
            let productBadge = document.createElement(`div`)
            productBadge.classList = `redProductBadge`
            productBadge.innerHTML = badgeText
            productImage.parentElement.insertBefore(productBadge, productImage)
        })
    }, 250)
}

let variant2 = () => {
    console.log(`variant2`)

    let badgeText = `MOVING FAST 🔥`
    let selectors = [`[data-product-id="6573374013463"] img`, `.nav--mobile [href="/products/the-fitness-earbuds"] span.lazyloaded`, `.nav--desktop [href="/products/the-fitness-earbuds"] span.lazyloaded`, `.section-body .collection-slider [href="/products/the-fitness-earbuds?variant=39363744890903"] img.lazyloaded`]
    let plpBadgeInterval = setInterval(() => {
        if (!selectors.length) clearInterval(plpBadgeInterval)
        selectors.forEach((selector, index) => {
            let productImage = document.querySelector(selector)
            if (!productImage) return
            selectors.splice(index, 1)
            let productBadge = document.createElement(`div`)
            productBadge.classList = `redProductBadge`
            productBadge.innerHTML = badgeText
            productImage.parentElement.insertBefore(productBadge, productImage)
        })
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