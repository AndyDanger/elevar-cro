let pdpInsertCheckoutInterval = setInterval(() => {
    let prodDetail = document.querySelector(`.prod-detail`)
    if (!prodDetail) return
    clearInterval(pdpInsertCheckoutInterval)
    let checkoutButton = document.createElement(`button`)
    checkoutButton.id = `pdpCheckoutButton`
    checkoutButton.innerText = `Checkout Now`
    checkoutButton.className = `btn btn-secondary btn--small`
    prodDetail.append(checkoutButton)
    checkoutButton.addEventListener('click', function () {
        let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-58551094-7') // insert their UA number here
        if (tracker) {
            tracker.send('event', 'event category', 'event action', window.location.href) // replace event category and event action
        }
        window.location = '/checkout'
    })

}, 250)