var clickedProductLink = sessionStorage.getItem('clickedProductLink')
if (clickedProductLink &&
    clickedProductLink.indexOf(window.location.pathname) !== -1 &&
    sessionStorage.getItem('clickedProductHistoryState') >= history.length - 1) {

    let percentage = 0;

    function updatePercentage() {
        if (!document.querySelector('.loadingWrapper')) {
            return
        }
        percentage += 0.5;
        if (percentage > 100) {
            percentage = 0;
        }

        const fillers = document.querySelectorAll('.loading__filler');
        for (const filler of fillers) {
            filler.setAttribute('y', 160 - (percentage * 160 / 100));
            filler.setAttribute('height', percentage * 160 / 100);
        }

        requestAnimationFrame(updatePercentage);
    }

    requestAnimationFrame(updatePercentage);

    let intervalCount = 0
    var scrollInterval = setInterval(function() {
        intervalCount++
        document.querySelector('.loadingWrapper').style.display = "block"
        var clickedProduct = document.querySelector('a[href="' + clickedProductLink + '"]')
        if (!clickedProduct && intervalCount < 50) {
            window.scrollTo(0, document.body.scrollHeight);
            return
        }
        clearInterval(scrollInterval)
        document.querySelector('.loadingWrapper').remove()
        clickedProduct ? clickedProduct.scrollIntoView() : console.log('scrollInterval cleared')
    }, 200)

}


var clickInterval = setInterval(function() {
    $('.product-wrap a').click(function() {
        window.sessionStorage.setItem('clickedProductLink', $(this).attr('href'))
        window.sessionStorage.setItem('clickedProductHistoryState', window.history.length)
    })

}, 400)