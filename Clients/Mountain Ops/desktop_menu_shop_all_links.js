var shopAllInterval = setInterval(function() {
    var menus = document.querySelectorAll('.nutrition-menu .menu-col-2')
    if (!menus.length) {
        return
    }
    clearInterval(shopAllInterval)
    var links = ["https://mtnops.com/collections/energy-performance", "https://mtnops.com/collections/hydration", "https://mtnops.com/collections/everyday", "https://mtnops.com/collections/strength", "https://mtnops.com/collections/systems", "https://mtnops.com/collections/series"]
    menus.forEach(function(menu) {
        var subMenus = menu.querySelectorAll('ul')
        subMenus.forEach(function(subMenu, index) {
            if (index >= links.length) {
                return
            }
            var firstLink = subMenu.querySelector('li')
            var clone = firstLink.cloneNode(true)
            var aTag = clone.querySelector('a')
            aTag.firstChild.data = "SHOP ALL"
            aTag.href = links[index]
            var st = aTag.querySelector('.st')
            st ? st.remove() : null
            var bubble = aTag.querySelector('.menu-bubble')
            bubble ? bubble.remove() : null
            subMenu.insertBefore(clone, firstLink)
        })
    })

    var gearMenus = document.querySelectorAll('.gear-menu .menu-col-2')
    gearMenus.forEach(function(gearMenu) {
        var subMenus = gearMenu.querySelectorAll('ul')
        subMenus.forEach(function(subMenu) {
            var subMenuLinks = subMenu.querySelectorAll('li')
            var last = subMenuLinks[subMenuLinks.length - 1]
            last.querySelector('a').firstChild.data = "SHOP ALL"
            subMenu.insertBefore(last, subMenuLinks[0])
        })
    })
}, 250)