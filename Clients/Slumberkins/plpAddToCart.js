let plpAddToCartInterval = setInterval(() => {
    let products = document.querySelectorAll('.grid-product')
    if (!products.length) {
        return
    }
    clearInterval(plpAddToCartInterval)
    products.forEach((product) => {
        let link = product.querySelector(`a`)
        if (!link) return
        jQuery.get(`${link.href}.json`).done((productJson) => {
            if (!productJson.product.variants[0].inventory_quantity) return
            let productId = productJson.product.variants[0].id
            let productWrapper = product.querySelector('.grid-product__wrapper')
            let button = document.createElement('button')
            button.className = `addToCartButton btn btn--primary btn--add-to-cart`
            button.setAttribute(`productId`, productId)
            button.type = `submit`
            button.innerText = `Add to Cart`
            productWrapper.append(button)
            button.addEventListener(`click`, (event) => {
                let productId = event.target.getAttribute(`productId`)
                jQuery.post('/cart/add.js', {
                    quantity: 1,
                    form_type: 'product',
                    utf8: `✓`,
                    id: productId
                }).always(() => document.querySelector(`.cart-link`).click())
            })
        })
    })

}, 250)