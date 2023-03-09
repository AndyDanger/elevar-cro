var pdpLoadMoreInterval = setInterval(function () {
    var imagesDiv = document.querySelector('[data-test="scroll-viewer-wrap"]')
    if (!imagesDiv) {
        return
    }
    clearInterval(pdpLoadMoreInterval)

    imagesDiv.querySelectorAll('img').forEach(function (image, index) {
        if (index > 2) {
            console.log('lazyload')
            image.classList.add('lazyload')
        }
    })

    var loadMoreButton = document.createElement('button')
    loadMoreButton.id = "loadMoreButton"
    loadMoreButton.innerText = "Load More"
    imagesDiv.append(loadMoreButton)
    loadMoreButton.addEventListener('click', function () {
        document.querySelector('[data-test="scroll-viewer-wrap"]').classList.add('loadImages')
        var tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-58551094-7')
        if (tracker) {
            tracker.send('event', 'product page', 'load more images button click', window.location.href)
        }
    })

}, 250)