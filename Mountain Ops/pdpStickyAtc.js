const atcButtonSelector = `#shopify_add_to_cart`
const elementTargetSelector = `.product-benefits`

if (window.location.href.includes(`variant=always-sticky`)) {
    let pdpStickyAtcInterval = setInterval(() => {
        let atcButton = document.querySelector(atcButtonSelector)
        if (!atcButton) {
            return
        }
        clearInterval(pdpStickyAtcInterval)
        atcButton.classList.add(`tw-fixed`)
    }, 250)
} else {
    window.addEventListener("scroll", function () {
        let atcButton = document.querySelector(atcButtonSelector)
        let elementTarget = document.querySelector(elementTargetSelector)
        console.log(`window.scrollY: ${window.scrollY} - window.screen.height: ${window.screen.height} - elementTarget.offsetTop: ${elementTarget.offsetTop} - elementTarget.offsetHeight: ${elementTarget.offsetHeight}`)
        if ((window.scrollY + window.screen.height) > (elementTarget.offsetTop + elementTarget.offsetHeight + 500)) {
            atcButton.classList.add('tw-fixed')
        } else {
            atcButton.classList.remove('tw-fixed')
        }
    })

}