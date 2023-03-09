let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    let jqueryScript = document.createElement('script');
    jqueryScript.type = "text/javascript";
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.getElementsByTagName('head')[0].appendChild(jqueryScript);

    let plpAddToCartInterval = setInterval(() => {
        let products = document.querySelectorAll('.card-wrapper')
        if (!products.length || !$) {
            return
        }
        clearInterval(plpAddToCartInterval)
        products.forEach((product) => {
            if (product.innerText.includes(`Sold out`)) return
            let link = product.querySelector(`.card-information__text a`)
            if (!link) return

            jQuery.get(`${link.href.split('?')[0]}.json`).done((productJson) => {
                // if (!productJson.product.variants[0].inventory_quantity) return
                let productId = productJson.product.id
                let variantId = product.innerText.includes(`Tinted Sculpted Lip Oil`) ? productJson.product.variants[1].id : productJson.product.variants[0].id
                // let productWrapper = product.querySelector('.card-wrapper')
                let addToCartDiv = document.createElement(`div`)
                addToCartDiv.className = `addToCartDiv`
                addToCartDiv.innerHTML = `<button onclick="window.plpAddToCart(this)" type="button" class="button button--black cart__upsell-btn" data-variant-id="${variantId}" data-product-id="${productId}" data-action="nosto-addtocart">Add To Cart</button>`
                // productWrapper.append(addToCartDiv)
                product.parentElement.append(addToCartDiv)
            })
        })
    }, 250)

    window.plpAddToCart = function (clickedButton) {
        let nostoVariantID = clickedButton.getAttribute(`data-variant-id`)
        fetch('/cart/add.js', {
            body: JSON.stringify({ id: nostoVariantID, quantity: 1 }),
            credentials: "same-origin",
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" },
        })
            .then((response) => response.json())
            .then((response) => {
                window.getCart()
                document.querySelector(`cart-notification`).renderContents()
                setTimeout(() => {
                    document.querySelector(`.header__icon--cart`).click()
                }, 500)
            })
    }
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
            viewDetailsDiv.innerHTML = `<a href="${link}"  class="button button--black cart__upsell-btn" >View Details</a>`
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