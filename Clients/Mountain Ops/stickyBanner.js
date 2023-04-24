let stickyBannerInterval = setInterval(function () {
    let banner = document.querySelector('.topbar-wrapp')
    if (!banner) {
        return
    }
    clearInterval(stickyBannerInterval)
    let clone = banner.cloneNode(true)
    clone.id = 'clonedBanner'
    let stickyHeaderContainer = document.querySelector('.sticky-header .container')
    stickyHeaderContainer.parentElement.insertBefore(clone, stickyHeaderContainer)
    $('#clonedBanner .top-bar-center-message').hover(
        function Hin(e) {
            $('.ch-widget').show()
        },
        function Hout(e) {
            $('.ch-widget').hide()
        }
    )

    $('#clonedBanner .top-bar-center-message').click(function () {
        $('.ch-widget').toggle()
    })
}, 250)