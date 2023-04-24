var bottomBannerInterval = setInterval(function() {
    var productGrid = document.querySelector('.collection-products')
    if (!productGrid) {
        return
    }
    clearInterval(bottomBannerInterval)
    var image = document.createElement('img')
    image.id = "bottomBannerImage"
    image.src = window.location.href.indexOf('collections/bras') !== -1 ? 'https://i.imgur.com/wgjCxPa.jpg' : 'https://i.imgur.com/crkHoSP.jpg'
    productGrid.append(image)
    document.querySelector('#bottomBannerImage').addEventListener('click', function() {
        var tracker = ga.getAll ? ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-127301726-1') : null
        if (tracker) {
            tracker.send('event', 'collection page', 'bottom banner click', window.location.href)
        }
        window.location.href = window.location.href.indexOf('collections/bras') !== -1 ? 'https://shopcuup.com/collections/bottoms' : 'https://shopcuup.com/collections/bras'
    })

}, 250)