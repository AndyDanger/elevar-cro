let mobileMenuTabsInterval = setInterval(() => {
    let header = document.querySelector(`[data-section-id="header"], #shopify-section-static-header`)
    if (!header) return
    clearInterval(mobileMenuTabsInterval)
    let mobileTabs = document.createElement(`div`)
    mobileTabs.id = `mobileTabs`
    mobileTabs.innerHTML = `
        <a href="https://www.hunterfan.com/" class="${!window.location.href.includes(`casablanca`) && !window.location.href.includes(`industrialfans`) ? 'active' : null}">HUNTER</a>
        <a href="https://www.hunterfan.com/pages/casablanca" class="${window.location.href.includes(`casablanca`) ? 'active' : null}">CASABLANCA</a>
        <a href="https://industrialfans.hunterfan.com/" class="${window.location.href.includes(`industrialfans`) ? 'active' : null}">INDUSTRIAL</a>
    `
    header.insertBefore(mobileTabs, header.querySelector(`.header-wrap, section.static-header`))
}, 250)