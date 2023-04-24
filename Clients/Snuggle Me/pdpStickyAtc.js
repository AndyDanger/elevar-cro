if (window.location.href.includes(`variant=always-sticky`)) {
    let pdpStickyAtcInterval = setInterval(() => {
        let elementTarget = document.querySelector(".product__buttons");
        if (!elementTarget) {
            return
        }
        clearInterval(pdpStickyAtcInterval)
        elementTarget.classList.add(`tw-fixed`)
    }, 250)
} else {

    window.addEventListener("scroll", function () {
        let elementTarget = document.querySelector(".product__buttons");
        console.log(`window.scrollY: ${window.scrollY} - window.screen.height: ${window.screen.height} - elementTarget.offsetTop: ${elementTarget.offsetTop} - elementTarget.offsetHeight: ${elementTarget.offsetHeight}`)
        if ((window.scrollY + window.screen.height) > (elementTarget.offsetTop + elementTarget.offsetHeight + 50)) {
            elementTarget.classList.add('tw-fixed')
        } else {
            elementTarget.classList.remove('tw-fixed')
        }
    })

}