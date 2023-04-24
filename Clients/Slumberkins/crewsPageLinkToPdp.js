let pdpLinks =
    [
        `https://slumberkins.com/collections/gratitude/products/honey-bear-kin`,
        `https://slumberkins.com/collections/gratitude/products/honey-bear-kin`,
        `https://slumberkins.com/collections/emotional-courage/products/ibex-kin`,
        `https://slumberkins.com/collections/emotional-courage/products/ibex-kin`,
        `https://slumberkins.com/collections/building-connections/products/otter-kin`,
        `https://slumberkins.com/collections/building-connections/products/otter-kin`,
        `https://slumberkins.com/collections/routines/products/slumber-sloth-kin`,
        `https://slumberkins.com/collections/routines/products/slumber-sloth-kin`,
        `https://slumberkins.com/collections/mindfulness/products/yeti-kin`,
        `https://slumberkins.com/collections/mindfulness/products/yeti-kin`,
        `https://slumberkins.com/collections/self-esteem/products/bigfoot-kin`,
        `https://slumberkins.com/collections/self-esteem/products/bigfoot-kin`,
        `https://slumberkins.com/collections/conflict-resolution/products/hammerhead-kin`,
        `https://slumberkins.com/collections/conflict-resolution/products/hammerhead-kin`,
        `https://slumberkins.com/collections/growth-mindset/products/narwhal-kin`,
        `https://slumberkins.com/collections/growth-mindset/products/narwhal-kin`,
        `https://slumberkins.com/collections/authenticity/products/unicorn-kin`,
        `https://slumberkins.com/collections/authenticity/products/unicorn-kin`,
        `https://slumberkins.com/collections/self-acceptance/products/ginger-yak-kin-1`,
        `https://slumberkins.com/collections/self-acceptance/products/ginger-yak-kin-1`,
        `https://slumberkins.com/collections/stress-relief/products/alpaca-kin`,
        `https://slumberkins.com/collections/stress-relief/products/alpaca-kin`,
        `https://slumberkins.com/collections/change/products/fox-kin`,
        `https://slumberkins.com/collections/self-expression/products/lynx-kin`,
        `https://slumberkins.com/collections/self-expression/products/lynx-kin`,
        `https://slumberkins.com/collections/grief-and-loss/products/sprite-kin`,
        `https://slumberkins.com/collections/grief-and-loss/products/sprite-kin`,
        `https://slumberkins.com/collections/creativity/products/dragon-kin-2`,
        `https://slumberkins.com/collections/creativity/products/dragon-kin-2`,
    ]

let crewPageInterval = setInterval(() => {
    let links = document.querySelectorAll(`.shogun-tab-content .shogun-image-link`)
    if (links.length < 27) return
    clearInterval(crewPageInterval)
    links.forEach((link, index) => {
        link.href = pdpLinks[index]
    })
}, 250)