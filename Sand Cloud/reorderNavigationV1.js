// Current: Features > New Releases > Towels > Bath > Home > Merch > Deals
// V1: Towels > New Releases > Featured > Bath > Home > Merch > Deals
// V2: Towels > Bath > New Releases > Home > Merch > Featured > Deals

window.location.href.indexOf('variant2') !== -1 ? variant2() : variant1()

function variant1() {
    alert(`V1: Towels > New Releases > Featured > Bath > Home > Merch > Deals`)
    var reorderNavigationV1DesktopInterval = setInterval(function () {
        var desktopNavItems = document.querySelectorAll('[data-comp="Nav"] ul:not(.reOrdered) li')
        if (!desktopNavItems.length) {
            return
        }
        // clearInterval(reorderNavigationV1DesktopInterval)
        // do something with buttons
        var desktopParentElement = desktopNavItems[0].parentElement
        desktopParentElement.classList.add('reOrdered')
        desktopParentElement.insertBefore(desktopNavItems[2], desktopNavItems[0])
        desktopParentElement.insertBefore(desktopNavItems[0], desktopNavItems[3])
    }, 250)


    var reorderNavigationV1MobileInterval = setInterval(function () {
        var mobileNavItems = document.querySelectorAll('[data-comp="AccordionNavItems"] ul:not(.reOrdered) li')
        if (!mobileNavItems.length) {
            return
        }
        // clearInterval(reorderNavigationV1MobileInterval)
        // do something with buttons
        var mobileParentElement = mobileNavItems[0].parentElement
        mobileParentElement.classList.add('reOrdered')
        mobileParentElement.insertBefore(mobileNavItems[2], mobileNavItems[0])
        mobileParentElement.insertBefore(mobileNavItems[0], mobileNavItems[3])

    }, 250)

}
function variant2() {
    alert(`V2: Towels > Bath > New Releases > Home > Merch > Featured > Deals`)
    var reorderNavigationV2DesktopInterval = setInterval(function () {
        var desktopNavItems = document.querySelectorAll('[data-comp="Nav"] ul:not(.reOrdered) li')
        if (!desktopNavItems.length) {
            return
        }
        // clearInterval(reorderNavigationV2DesktopInterval)
        // do something with buttons
        var desktopParentElement = desktopNavItems[0].parentElement
        desktopParentElement.classList.add('reOrdered')
        desktopParentElement.insertBefore(desktopNavItems[2], desktopNavItems[0])
        desktopParentElement.insertBefore(desktopNavItems[3], desktopNavItems[0])
        desktopParentElement.insertBefore(desktopNavItems[0], desktopNavItems[desktopNavItems.length - 1])
    }, 250)


    var reorderNavigationV2MobileInterval = setInterval(function () {
        var mobileNavItems = document.querySelectorAll('[data-comp="AccordionNavItems"] ul:not(.reOrdered) li')
        if (!mobileNavItems.length) {
            return
        }
        // clearInterval(reorderNavigationV2MobileInterval)
        // do something with buttons
        var mobileParentElement = mobileNavItems[0].parentElement
        mobileParentElement.classList.add('reOrdered')
        mobileParentElement.insertBefore(mobileNavItems[2], mobileNavItems[0])
        mobileParentElement.insertBefore(mobileNavItems[3], mobileNavItems[0])
        mobileParentElement.append(mobileNavItems[0])

    }, 250)

}