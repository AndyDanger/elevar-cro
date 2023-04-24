// Current: Features > New Releases > Towels > Bath > Home > Merch > Deals
// V1: Towels > New Releases > Featured > Bath > Home > Merch > Deals
// V2: Towels > Bath > New Releases > Home > Merch > Featured > Deals

var reorderNavigationV2DesktopInterval = setInterval(function () {
    var desktopNavItems = document.querySelectorAll('[data-comp="Nav"] li')
    if (!desktopNavItems.length) {
        return
    }
    clearInterval(reorderNavigationV2DesktopInterval)
    // do something with buttons
    var desktopParentElement = desktopNavItems[0].parentElement
    desktopParentElement.insertBefore(desktopNavItems[2], desktopNavItems[0])
    desktopParentElement.insertBefore(desktopNavItems[3], desktopNavItems[0])
    desktopParentElement.insertBefore(desktopNavItems[0], desktopNavItems[desktopNavItems.length - 1])
}, 250)


var reorderNavigationV2MobileInterval = setInterval(function () {
    var mobileNavItems = document.querySelectorAll('[data-comp="AccordionNavItems"] li')
    if (!mobileNavItems.length) {
        return
    }
    clearInterval(reorderNavigationV2MobileInterval)
    // do something with buttons
    var mobileParentElement = mobileNavItems[0].parentElement
    mobileParentElement.insertBefore(mobileNavItems[2], mobileNavItems[0])
    mobileParentElement.insertBefore(mobileNavItems[3], mobileNavItems[0])
    mobileParentElement.append(mobileNavItems[0])

}, 250)
