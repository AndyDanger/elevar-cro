let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    let plpAddToCartInterval = setInterval(() => {
        let products = document.querySelectorAll('.card-wrapper')
        if (!products.length) {
            return
        }
        clearInterval(plpAddToCartInterval)
        products.forEach((product) => {
            let link = product.querySelector(`.card-information__text a`)
            if (!link) return
            let viewDetailsDiv = document.createElement(`div`)
            viewDetailsDiv.className = `viewDetailsDiv`
            viewDetailsDiv.innerHTML = `<a href="${link}"  class="button button--black cart__upsell-btn">View Details</a>`
            product.parentElement.append(viewDetailsDiv)
        })
    }, 250)
}

let variant2 = () => {
    console.log(`variant2`)

    let plpAddToCartInterval = setInterval(() => {
        let products = document.querySelectorAll('.card-wrapper')
        if (!products.length) {
            return
        }
        clearInterval(plpAddToCartInterval)
        products.forEach((product) => {
            let link = product.querySelector(`.card-information__text a`)
            if (!link) return
            let viewDetailsDiv = document.createElement(`div`)
            viewDetailsDiv.className = `viewDetailsDiv`
            viewDetailsDiv.innerHTML = `<a href="${link}"  class="button button--black cart__upsell-btn">Shop Now</a>`
            product.parentElement.append(viewDetailsDiv)
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