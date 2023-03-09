var homepageVideoInterval = setInterval(function () {
    var play2 = document.querySelector("#play2")
    if (typeof jQuery == "undefined" || !play2) {
        return
    }
    clearInterval(homepageVideoInterval)
    jQuery(window).scroll(function () {
        var main = jQuery('main')
        var hero = jQuery(".section-hero1")
        var height = hero.height()
        var scrollTop = jQuery(window).scrollTop()
        console.log(`HEIGHT: ${height}, SCROLL: ${scrollTop}`)
        if (!main.hasClass('hero-pinned') || scrollTop + 300 > height) {
            jQuery('#videotitle1').css('opacity', '1')
        } else {
            jQuery('#videotitle1').css('opacity', '0')
        }

    })
    jQuery(play2).click(function() {
        jQuery('.play-button:not(#play2)').click()
    })
}, 250)