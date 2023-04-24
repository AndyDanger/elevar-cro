window.addToCart = function (clickedButton) {
    let productId = `39559430537239`  // Red Everyday Earbuds
    fetch('/cart/add.js', {
        body: JSON.stringify({ id: productId, quantity: 1 }),
        credentials: "same-origin",
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" },
    })
        .then((response) => response.json())
        .then((response) => {
            setTimeout(() => {
                document.querySelector(`.CartToggle`).click()
            }, 500)
        })
}

window.addToCart()

window.removeFromCart = function (clickedButton) {
    let index = `1`  // Removes the first thing in your cart
    fetch(`/cart/change?line=${index}&quantity=0`, {
        credentials: "same-origin",
        method: "GET",
        headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" },
    })
        .then((response) => {
            response.json()
        })
        .then((response) => {
            setTimeout(() => {
                document.querySelector(`.CartToggle`).click()
            }, 500)
        })
}

window.removeFromCart()