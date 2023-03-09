var pdpReviewsPhotosInterval = setInterval(function () {
    var dropdown = document.querySelector('[data-analytic-property="With Images & Videos"]')
    if (!dropdown) {
        return
    }
    clearInterval(pdpReviewsPhotosInterval)
    var oldScroll = $(window).scrollTop();

    $(window).one('scroll', function () {
        $(window).scrollTop(oldScroll); //disable scroll just once
    });
    document.querySelector('.list-category[data-analytic-property="With Images & Videos"] > a').click()
}, 250)



jQuery('body').bind('focusin focus', function (e) {
    e.preventDefault();
})

$('.list-category[data-analytic-property="With Images & Videos"] > a, .list-category[data-analytic-property="All"] > a').focus((e) => {
    console.log(e)
    e.preventDefault();
    e.target.focus({ preventScroll: true });
})

document.querySelector('.list-category[data-analytic-property="With Images & Videos"] > a').focus({
    preventScroll: true
});

document.querySelector('.list-category[data-analytic-property="All"] > a').focus({
    preventScroll: true
});
var oldScroll = $(window).scrollTop();

$(window).one('scroll', function () {
    $(window).scrollTop(oldScroll); //disable scroll just once
});
document.querySelector('.list-category[data-analytic-property="With Images & Videos"] > a').click()