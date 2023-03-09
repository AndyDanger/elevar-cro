let pdpInsertCheckoutInterval = setInterval(() => {
    let prodDetail = document.querySelector(`.prod-detail`)
    if (!prodDetail) return
    clearInterval(pdpInsertCheckoutInterval)
    let checkoutButton = document.createElement(`button`)
    checkoutButton.id = `pdpCheckoutButton`
    checkoutButton.innerText = `Checkout Now`
    checkoutButton.className = `btn btn-secondary btn--small`
    checkoutButton.onclick = "window.location='/checkout'"
    prodDetail.append(checkoutButton)
}, 250)