var counter = 0;
var newInterval = setInterval(function () {
    if (counter++ >= 50) {
        clearInterval(newInterval);
        return
    }
    var swatchLists = document.querySelectorAll('.swatch__list:not(.swappedToBlack)');
    swatchLists.forEach(function (swatchList) {
        if (swatchList.closest('.grid__item').querySelector('img.lazyload')) {
            console.log('images still loading')
            return
        }
        swatchList.classList.add('swappedToBlack');
        var blackLink = swatchList.querySelector('a[title*="Black"]');
        if (swatchList.querySelectorAll('.swatch__item:not(.sold-out)').length < 2 || !blackLink || blackLink.parentElement.classList.contains('active') || blackLink.parentElement.classList.contains('sold-out')) {
            return;
        }

        console.log('clicking the link' + blackLink.href)
        blackLink.click();

    });

}, 250);



// https://rayconglobal.com/collections/shopall?utm_campaign=elevar-black


var swatchLists = document.querySelectorAll('.swatch__list:not(.swappedToBlack)');
var swatchList = swatchLists[0]
var blackLink = swatchList.querySelector('a[title*="Black"]');
blackLink.click()

