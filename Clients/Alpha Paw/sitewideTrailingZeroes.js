var removeZerosInterval = setInterval(function () {
    var priceDivs = document.querySelectorAll('.compr_prc, .regular_price, .rc-option__price')
    priceDivs.forEach(function (div) {
        if (div.innerHTML.indexOf(".00") !== -1) {
            div.innerHTML = div.innerHTML.replace(".00", "")
        }
    })
}, 250)