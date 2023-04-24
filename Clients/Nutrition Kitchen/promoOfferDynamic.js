var numbers = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH"]
var promoArray = [
    {
        code: "DYNAMIC_25_TEST",
        discount: 25,
    }, {
        code: "DYNAMIC_20_TEST",
        discount: 20,
    }, {
        code: "DYNAMIC_15_TEST",
        discount: 15,
    }, {
        code: "DYNAMIC_10_TEST",
        discount: 10,
    }, {
        code: "DYNAMIC_5_TEST",
        discount: 5,
    }
]

var promoInterval = setInterval(function () {
    // NEED TO SET WINDOW VARIABLE
    if (!window.customerTagsSet) {
        return
    }
    clearInterval(promoInterval)
    var number = window.orderCount || 0
    var promo = promoArray[number]
    if (!promo) {
        return
    }

    var text =  `SAVE 25% OFF YOUR FIRST 5 ORDERS - ${5 - number} ORDERS REMAINING`

    var promoBar = document.querySelector('.info-bar__message strong')
    if (promoBar) {
        promoBar.innerText = text
    }

    var tagsList = document.querySelector('.tags-list')
    if (tagsList) {
        var checkoutSavings = document.createElement('div')
        checkoutSavings.id = "checkoutSavings"
        checkoutSavings.innerText = text
        tagsList.parentElement.insertBefore(checkoutSavings, tagsList)
    }

    var url = new URL(window.location.href)
    var currentDiscount = url.searchParams.get('discount')
    url.searchParams.set('discount', promo.code)
    var newDiscount = url.searchParams.get('discount')

    if (newDiscount == currentDiscount) {
        return
    }

    window.location.href = url.href
}, 250)