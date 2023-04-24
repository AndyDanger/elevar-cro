var url = new URL(window.location.href)
var utmCampaign = url.searchParams.get('utm_campaign')
var threshold = utmCampaign && utmCampaign.includes('shipping_threshold_') ? parseInt(utmCampaign.replace('shipping_threshold_', '')) : 100
var maxShippingPrice = 12.50
var newDiscount = `FREE_SHIPPING_${threshold}`

var shippingThreshold75Interval = setInterval(function () {
    var shippingElements = document.querySelectorAll('[data-comp="PromoBar"] p:not(.shipping_threshold), [data-comp="Footer"] li div:not(.shipping_threshold), [data-comp="StickyContainer"] p:not(.shipping_threshold)')

    shippingElements.forEach(function (element) {
        element.innerText = element.innerText.replace('$100+', `$${threshold}+`)
        element.classList.add('shipping_threshold')
    })

    var progress = document.querySelector('progress')
    if (!progress) {
        return
    }
    progress.setAttribute('max', threshold)

    var prices = document.querySelectorAll('[data-comp="Prices"] p')
    if (!prices.length) {
        return
    }

    var price = parseFloat(prices[1].innerText.replace('$', ''))
    document.querySelectorAll('[data-comp="ItemsOrEmpty"] > div > p').forEach(function (item) {
        if (price > threshold) {
            item.innerHTML = `<img role="presentation" alt="chevron" src="/svg/truck.svg" class="css-9taffg">Congrats! You qualified for FREE US Standard shipping!`
        } else {
            item.innerText = `SPEND $${threshold}+ FOR FREE U.S. SHIPPING`
        }
        item.classList.add('shipping_threshold')
    })

}, 250)