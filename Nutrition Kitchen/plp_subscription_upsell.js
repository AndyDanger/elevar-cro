clearInterval(subscribeInterval)
var savings = 0
var subscribeInterval = setInterval(function () {
    var title = document.querySelector('.order-summary__title')
    if (!title || (!document.querySelector('[subscription-label="one-time"]').classList.contains('selected') && !document.querySelector('[subscription-label="subscribe"]').classList.contains('selected'))) {
        return
    }
    //clearInterval(subscribeInterval)

    var subscribeDiv = document.querySelector('#subscribeDiv')
    if (subscribeDiv) {
        var oneTime = document.querySelector('[subscription-label="one-time"]').classList.contains('selected')
        var currentPrice = document.querySelector('.money').innerText.replaceAll(/[^0-9.]/ig, '')
        var newSavings = oneTime ? Math.ceil(currentPrice * 0.065) : Math.ceil((currentPrice / .935) - currentPrice)
        if (newSavings != savings || !window.preventSwap || oneTime != window.newOneTime) {
            savings = newSavings
            window.newOneTime = oneTime
            if (document.querySelector('[subscription-label="one-time"]').classList.contains('selected')) {
                subscribeDiv.innerHTML = `
        <label class="container">Save $${newSavings} by subscribing
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>`
            } else {
                subscribeDiv.innerHTML = `
        <label class="container">You're saving $${newSavings} by subscribing
          <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
        </label>`
            }
        }
    }

    if (window.preventSwap) {
        return
    }

    window.preventSwap = true

    if (!subscribeDiv) {
        subscribeDiv = document.createElement('div')
        subscribeDiv.id = "subscribeDiv"
        title.parentElement.insertBefore(subscribeDiv, title.nextElementSibling)
        subscribeDiv.onclick = function (event) {
            event.preventDefault()
            window.preventSwap = false
            var string = 'selected'
            if (document.querySelector('[subscription-label="one-time"]').classList.contains('selected')) {
                document.querySelector('[subscription-label="subscribe"] span.btn').click()
            } else {
                document.querySelector('[subscription-label="one-time"] span.btn').click()
                string = 'deselected'
            }


            var tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-72431025-1')
            if (tracker) {
                tracker.send('event', 'product page', 'subscription upsell' + string, window.location.href)
            }
        }
    }

}, 350)