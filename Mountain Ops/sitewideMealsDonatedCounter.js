clearInterval(sitewideMealsDonatedInterval)
var sitewideMealsDonatedInterval = setInterval(function () {
    var mealcount = document.querySelector('.mealcount')
    if (!mealcount) {
        return
    }
    var count = parseInt(mealcount.innerText.replaceAll(',', ''))
    var string = (count + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    mealcount.innerText = string
    var span = document.querySelector('.widget-content > span > b')
    span ? span.innerText = string : null
}, 1000)


clearInterval(sitewideMealsDonatedInterval)
var sitewideMealsDonatedInterval = setInterval(function () {
    var mealcount = document.querySelector('.mealcount')
    if (!mealcount) {
        return
    }
    var storageMealCount = sessionStorage.getItem('mealcount')
    var count = storageMealCount ? parseInt(storageMealCount) : parseInt(mealcount.innerText.replaceAll(',', ''))
    var string = (count + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    mealcount.innerText = string
    sessionStorage.setItem('mealcount', count + 1)
    var span = document.querySelector('.widget-content > span > b')
    span ? span.innerText = string : null
}, 1000)