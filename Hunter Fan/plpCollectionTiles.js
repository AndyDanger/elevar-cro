let lightsArray = [
    {
        text: `Chevron`,
        link: `https://www.hunterfan.com/collections/chevron-collection`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0259/4629/2284/files/LightingLP_ChevronCollection.jpg`
    },
    {
        text: `Doherty`,
        link: `https://www.hunterfan.com/collections/doherty-collection`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0259/4629/2284/files/LightingLP_DohertyCollection.jpg`
    },
    {
        text: `Klein`,
        link: `https://www.hunterfan.com/collections/klein-collection`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0259/4629/2284/files/LightingLP_KleinCollection.jpg`
    },
    {
        text: `Maple Park`,
        link: `https://www.hunterfan.com/collections/maple-park-collection`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0259/4629/2284/files/LightingLP_MapleParkCollection.jpg`
    },
    {
        text: `Zoanne`,
        link: `https://www.hunterfan.com/collections/zoanne-collection`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0259/4629/2284/files/LightingLP_ZoanneCollection.jpg`
    },

]

let fansArray = [
    {
        text: `Aerodyne`,
        link: `https://www.hunterfan.com/products/ceiling-fans-aerodyne-with-led-light-52-inch-smart-1001161`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0259/4629/2284/files/Shop_by_Aerodyne.jpg?v=1621631622`
    },
    {
        text: `Hepburn`,
        link: `https://www.hunterfan.com/products/ceiling-fans-hepburn-with-led-light-44-inch-famc46?variant=31760809033860`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0265/2677/7443/files/Hepburn_50277.jpg?v=1618344557`
    },
    {
        text: `Original`,
        link: `https://www.hunterfan.com/collections/outdoor-ceiling-fans/products/ceiling-fans-outdoor-original-52-inch-fam274`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0265/2677/7443/files/outdoor-original-52-inch-ceiling-fans-hunter-matte-black_540x_af49fc35-9e60-4814-b2ab-73fe01cef601.jpg?v=1616393724`
    },
    {
        text: `Overton`,
        link: `https://www.hunterfan.com/collections/outdoor-ceiling-fans/products/ceiling-fans-overton-outdoor-with-led-light-60-inch-famd98`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0265/2677/7443/files/overton-outdoor-with-led-light-72-inch-ceiling-fans-hunter-matte-nickel_540x_a705f5c8-362e-4b66-8510-51abc24f1fd5.jpg?v=1616393724`
    },
    {
        text: `Spring Mill`,
        link: `https://www.hunterfan.com/products/ceiling-fans-spring-mill-outdoor-with-led-light-52-inch-1000927`,
        image: `https://image.hunterfan.com/image/upload/f_auto,q_auto/s/files/1/0259/4629/2284/files/Shop_by_Spring_Mill.jpg?v=1621917902`
    },
]

let newInterval = setInterval(function () {
    let collectionScroller = document.querySelector('.collection-scroller')
    if (!collectionScroller) {
        return
    }
    clearInterval(newInterval)
    // do something with buttons
    let html = ``

    if (window.location.href.includes('fans')) {
        fansArray.forEach(thing => {
            html += `
        <a class="fan-option sale-fans" href="${thing.link}" role="presentation" tabindex="-1" style="">
            <img alt="${thing.text}" class="scroller-fan" src="${thing.image}">
            <span aria-hidden="true">${thing.text}</span>
        </a>`
        })
    } else {
        lightsArray.forEach(thing => {
            html += `
        <a class="fan-option sale-fans" href="${thing.link}" role="presentation" tabindex="-1" style="">
            <img alt="${thing.text}" class="scroller-fan" src="${thing.image}">
            <span aria-hidden="true">${thing.text}</span>
        </a>`
        })
    }
    collectionScroller.innerHTML = html
}, 250)