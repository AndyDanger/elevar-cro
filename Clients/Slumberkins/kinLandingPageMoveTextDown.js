let moveTextDownInterval = setInterval(() => {
    let text = document.querySelector(`div.tw-text-center > div.wrapper > div`)
    if (!text) return
    clearInterval(moveTextDownInterval)
    document.querySelector(`#shopify-section-collection-subnav-creatures`).append(text)
    document.querySelector(`.wrapper hr`).remove()
}, 250)