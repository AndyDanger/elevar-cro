let mobileNavInterval = setInterval(() => {
    let button = document.querySelector('.mobnav-dropdown a[href="/pages/shop-all"] button')
    if (!button) {
        return
    }
    clearInterval(mobileNavInterval)
    if (!button.className.includes(`active`)) {
        button.click()
    }

}, 250)