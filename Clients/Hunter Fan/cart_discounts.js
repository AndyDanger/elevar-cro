var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/lodash/4.13.1/lodash.min.js';
document.head.appendChild(script);

window.cartItems = []
window.cartDiscounts = []
clearInterval(cartDiscountInterval)
var cartDiscountInterval = setInterval(function () {
    var totalDiv = document.querySelector('.total:not(.discountDiv)')
    if (!totalDiv) {
        return
    }
    let cart = jQuery.getJSON('/cart.js');
    cart.done(function () {
        cart = cart.responseJSON;
        let items = cart.items;
        var result = _.isEqualWith(window.cartItems, items, (value1, value2, key) => {
            return key === "line_level_discount_allocations" ? true : undefined;
        })
        if (result) {
            return
        }

        var savingsDivs = document.querySelectorAll('.savingsDiv')
        savingsDivs.forEach(function (div) {
            div.remove()
        })
        window.cartItems = items
        window.cartDiscounts = []
        items.forEach(function (item, index) {
            jQuery.getJSON(item.url + '.js', function (product) {
                // var ogPrice = product.product.variants[0].compare_at_price
                // var discountPrice = 
                var discountPrice = window.cartItems[index].line_level_total_discount ? window.cartItems[index].final_line_price : product.product.variants[0].compare_at_price
                debugger
                if (!discountPrice) {
                    return
                }
                var products = document.querySelectorAll('.mini-products-list .product-details')
                var productPrice = products[index].querySelector('.product-price')
                if (window.cartItems[index].line_level_total_discount) {
                    productPrice.innerText = `$${window.cartItems[index].discounted_price / 100}`
                }
                var savingsDiv = products[index].querySelector('.savingsDiv') || productPrice.cloneNode(true)
                savingsDiv.className = 'savingsDiv'
                savingsDiv.innerText = discountPrice
                productPrice.parentElement.insertBefore(savingsDiv, productPrice)
                window.cartDiscounts.push((parseFloat(discountPrice) * window.cartItems[index].quantity) - (parseFloat(window.cartItems[index].price) / 100 * window.cartItems[index].quantity))
            });
        })


    })

    var discountDiv = document.querySelector('.discountDiv')
    if (!discountDiv) {
        discountDiv = totalDiv.cloneNode(true)
        discountDiv.classList.add('discountDiv')
        discountDiv.querySelector('label').innerText = `Savings:`
        totalDiv.parentElement.insertBefore(discountDiv, totalDiv)
    }

    var discountTotal = window.cartDiscounts.reduce((partialSum, a) => partialSum + a, 0)
    var priceDiv = discountDiv.querySelector('.product-price')
    if (priceDiv) {
        priceDiv.className = ""
    }
    var string = `$${discountTotal.toFixed(2)}`
    if (discountDiv.querySelector('span').innerText !== string) {
        discountDiv.querySelector('span').innerText = string
    }

}, 1000)