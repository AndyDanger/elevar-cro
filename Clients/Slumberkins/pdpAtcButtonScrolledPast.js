var newInterval = setInterval(function () {
    var elementTarget = document.querySelector(".add-to-cart-wrap > div > div");
    if (!elementTarget) {
        return
    }
    clearInterval(newInterval)
    // do something with buttons
    elementTarget.classList.remove('tw-fixed')
    if (window.location.href.includes('never-stick')) {
        return
    }

    window.addEventListener("scroll", function () {
        var elementTarget = document.querySelector(".add-to-cart-wrap > div > div");
        // console.log(`window.scrollY: ${window.scrollY} - window.screen.height: ${window.screen.height} - elementTarget.offsetTop: ${elementTarget.offsetTop} - elementTarget.offsetHeight: ${elementTarget.offsetHeight}`)
        if ((window.scrollY + window.screen.height) > (elementTarget.offsetTop + elementTarget.offsetHeight + 160)) {
            elementTarget.classList.add('tw-fixed')
        } else {
            elementTarget.classList.remove('tw-fixed')
        }
    });
}, 250)