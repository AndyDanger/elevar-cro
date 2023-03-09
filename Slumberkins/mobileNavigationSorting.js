var mobileNavInterval = setInterval(function () {
    var desktopNavItems = document.querySelectorAll('#AccessibleNav > li > ul > li')
    var mobileNavItems = document.querySelectorAll('.mobile-nav > .mobile-nav__item')
    if (mobileNavItems.length < 7 || desktopNavItems.length < 45) {
        return
    }
    clearInterval(mobileNavInterval)
    var desktopParentElement = desktopNavItems[0].parentElement
    desktopParentElement.insertBefore(desktopNavItems[2], desktopNavItems[0])
    desktopParentElement.insertBefore(desktopNavItems[1], desktopNavItems[0])

    var mobileParentElement = mobileNavItems[0].parentElement
    mobileParentElement.insertBefore(mobileNavItems[2], mobileNavItems[0])
    mobileParentElement.insertBefore(mobileNavItems[1], mobileNavItems[0])

}, 250)
