let pdpReviewsInterval = setInterval(function () {
    let button = document.querySelector("#tab1 > div").shadowRoot.querySelector("#bv-dropdown-title-reviews")
    if (!button) {
        return
    }
    clearInterval(pdpReviewsInterval)
    let oldScroll = $(window).scrollTop();

    $(window).one('scroll', function () {
        console.log('scroll 1')
        $(window).scrollTop(0); //disable scroll just once
    });
    document.body.style.position = "fixed"
    document.body.style.overflow = "hidden"
    document.body.style.width = "100%"

    button.click()
    let clickInterval = setInterval(function () {
        let option = document.querySelector("#tab1 > div").shadowRoot.querySelector("li:nth-child(5) span")
        if (!option) {
            return
        }
        clearInterval(clickInterval)
        let oldScroll = $(window).scrollTop();

        console.log('scroll 2')
        $(window).scrollTop(0); //disable scroll just once
        console.log('clicking')
        document.body.style.position = ""
        document.body.style.overflow = ""
        document.body.style.width = ""
        option.click(function (event) {
            console.log('scroll 3')
            $(window).scrollTop(0); //disable scroll just once
            event.preventDefault()
        })
    }, 250)

}, 250)