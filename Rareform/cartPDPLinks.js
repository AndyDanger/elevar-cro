var cartPDPLinksInterval = setInterval(function() {
    var cartProducts = document.querySelectorAll('div[x-show="cart && cart.item_count > 0"] > div')
    if (cartProducts.length < 1) {
        return
    }
    cartProducts.forEach(function(product) {
        if (product.querySelector('.viewDetailsLink') || !product.querySelector('p[x-text="item.title"]').innerText) {
            return
        }
        var tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-34408006-3')
        if (tracker) {
            tracker.send('event', 'mini-cart', 'pdp links code ran', window.location.href)
        }
        var imgURL = product.querySelector('img').src.toLowerCase()
        var title = product.querySelector('p[x-text="item.title"]').innerText.toLowerCase()
        var match = imgURL.match(/products\/(.*).png/)[1].replace(/_+/, '-')
        if (!match || match.length > 16) {
            return
        }
        var linkString = `https://www.rareform.com/products/${title.replace(/\s+/g, '-')}-${match}`
        var pdpLink = document.createElement('a')
        pdpLink.className = "viewDetailsLink"
        pdpLink.innerText = "VIEW DETAILS"
        pdpLink.href = linkString
        var sibling = product.querySelector('span[x-text="item.quantity"]').parentElement
        sibling.parentElement.insertBefore(pdpLink, sibling)
        pdpLink.addEventListener('click', function() {
            var tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-34408006-3')
            if (tracker) {
                tracker.send('event', 'mini-cart', 'pdp links clicked', window.location.href)
            }
        })

    })

}, 250)