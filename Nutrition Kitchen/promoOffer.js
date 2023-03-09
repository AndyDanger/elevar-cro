var numbers = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH"]
var promoArray = [
    {
        code: "FLAT_15_TEST_FIRST",
        discount: 15,
    }, {
        code: "FLAT_15_TEST_SECOND",
        discount: 15,
    }, {
        code: "FLAT_15_TEST_THIRD",
        discount: 15,
    }, {
        code: "FLAT_15_TEST_FOURTH",
        discount: 15,
    }, {
        code: "FLAT_15_TEST_FIFTH",
        discount: 15,
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

    var text =  `SAVE 15% OFF YOUR FIRST 5 ORDERS - ${5 - number} ORDERS REMAINING`

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