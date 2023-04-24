function replaceLinks() {
    let newLink = `/collections/winter-bundle`
    if (window.location.href.includes(`en-ca`)) {
        newLink = `/en-ca/collections/winter-bundle`
    }

    if (/the-bartesian$/.test(window.location.pathname) && !window.location.href.includes(`prevent_redirect=true`)) {
        window.location.pathname = newLink
        return
    }

    let count = 0 
    let replaceLinksInterval = setInterval(() => {
        if (count++ > 25) {
            clearInterval(replaceLinksInterval)
        }
        let bartesianLinks = document.querySelectorAll(`a[href$="/the-bartesian"]`)
        bartesianLinks.forEach(link => {
            link.href = newLink
        })
    }, 250)

}
replaceLinks()