var url = new URL(window.location.href)
var utmCampaign = url.searchParams.get('utm_campaign')
var threshold = utmCampaign && utmCampaign.includes('shipping_threshold_') ? parseInt(utmCampaign.replace('shipping_threshold_', '')) : 100
var maxShippingPrice = 12.50
var newDiscount = `FREE_SHIPPING_${threshold}`

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; domain=sandcloud.com; path=/";
}

setCookie('shipping_threshold', threshold, 60)

if (window.location.href.includes(`discount=${newDiscount}`)) {
    var url = new URL(window.location.href)
    url.searchParams.delete('discount')
    window.location.href = url.href
}

var shippingThreshold75Interval = setInterval(function () {
    var shippingElements = document.querySelectorAll('[data-comp="PromoBar"] p:not(.shipping_threshold), [data-comp="Footer"] li div:not(.shipping_threshold), [data-comp="StickyContainer"] p:not(.shipping_threshold)')

    shippingElements.forEach(function (element) {
        element.innerText = element.innerText.replace('$100+', `$${threshold}+`)
        element.classList.add('shipping_threshold')
    })

    if (!differentDiscountApplied()) {

        var messages = document.querySelectorAll('.quick-cart__free-shipping p')
        messages.forEach(function (message) {
            if (Shopify.Checkout.estimatedPrice > threshold) {
                message.innerText = `Congratulations! You've Earned Free Standard Shipping!`
            } else {
                message.innerText = `Add $${threshold - Shopify.Checkout.estimatedPrice} more to unlock free U.S. standard shipping!`
            }
        })

        var shippingPrices = document.querySelectorAll('.total-line--shipping td span')
        shippingPrices.forEach(function (shippingPrice) {
            var currentPrice = shippingPrice.getAttribute('data-checkout-total-shipping-target')
            if (Shopify.Checkout.estimatedPrice > threshold && currentPrice < (maxShippingPrice * 100)) {
                shippingPrice.innerText = `Free`
            }
        })
    }

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

function differentDiscountApplied() {
    if (window.location.href.indexOf('checkouts') == -1
        || window.location.href.includes(`discount=${newDiscount}`)
        || Shopify.Checkout.estimatedPrice < threshold
        || !document.querySelector('.order-summary__sections .total-line--shipping')) {
        return false
    }

    var currentDiscount = document.querySelector('.tags-list .reduction-code__text')
    if (currentDiscount) {
        return currentDiscount.innerText != newDiscount
    }

    clearInterval(shippingThreshold75Interval)
    var url = new URL(window.location.href)
    url.searchParams.set('discount', newDiscount)
    window.location.href = url.href
    return false
}