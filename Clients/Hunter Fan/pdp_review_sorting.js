var pdpReviewsInterval = setInterval(function () {
    var button = document.querySelector('.bv-control-bar-filter-offset .bv-dropdown-target button')
    if (!button) {
        return
    }
    clearInterval(pdpReviewsInterval)
    var oldScroll = $(window).scrollTop();

    $(window).one('scroll', function () {
        console.log('scroll 1')
        $(window).scrollTop(0); //disable scroll just once
    });
    document.body.style.position = "fixed"
    document.body.style.overflow = "hidden"
    button.click()
    var clickInterval = setInterval(function () {
        var option = document.querySelector('#data-bv-dropdown-item-positive')
        if (!option) {
            return
        }
        clearInterval(clickInterval)
        var oldScroll = $(window).scrollTop();

        console.log('scroll 2')
        $(window).scrollTop(0); //disable scroll just once
        console.log('clicking')
        document.body.style.position = ""
        document.body.style.overflow = ""
        option.click(function (event) {
            console.log('scroll 3')
            $(window).scrollTop(0); //disable scroll just once
            event.preventDefault()
        })
    }, 250)

}, 250)