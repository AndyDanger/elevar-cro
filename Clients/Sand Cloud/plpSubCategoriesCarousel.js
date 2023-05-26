if (!window.swiperScriptAdded) {
    window.swiperScriptAdded = true

    let jqueryScript = document.createElement('script');
    jqueryScript.type = "text/javascript";
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    document.getElementsByTagName('head')[0].appendChild(jqueryScript);

    let swiperScript = document.createElement('script')
    swiperScript.type = "text/javascript"
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'
    document.getElementsByTagName('head')[0].appendChild(swiperScript)

    let swiperCss = document.createElement("link");
    swiperCss.setAttribute("rel", "stylesheet");
    swiperCss.setAttribute("type", "text/css");
    swiperCss.setAttribute("href", "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css");
    document.getElementsByTagName("head")[0].appendChild(swiperCss);

}

let towelsArray = [
    {
        href: `https://www.sandcloud.com/collections/marine-life-towels`,
        img: `https://cdn.shopify.com/s/files/1/0819/9793/files/Featured_Towels_V2_3_450x_crop_center@2x.progressive.jpg?v=1678833511`,
        header: `Marine Life`,
        description: `10% of profits go toward marine conservation.`
    },
    {
        href: `https://www.sandcloud.com/collections/collabs-sandcloud`,
        img: `https://cdn.shopify.com/s/files/1/0819/9793/files/Featured_Towels_V2_2_450x_crop_center@2x.progressive.jpg?v=1678833512`,
        header: `Best Sellers`,
        description: `Not your average towels.`
    },
    {
        href: `https://www.sandcloud.com/collections/disney-sand-cloud`,
        img: `https://cdn.shopify.com/s/files/1/0819/9793/files/Featured_Towels_V2_450x_crop_center@2x.progressive.jpg?v=1678833510`,
        header: `>Disney | Sand Cloud`,
        description: `Celebrate 100 Years of Disney Wonder.`
    },
    {
        href: `https://www.sandcloud.com/collections/star-wars-x-sand-cloud`,
        img: `https://cdn.shopify.com/s/files/1/0819/9793/products/SWU23TOW012MLTLGCommander-MultiFront_600x750_3_350x_crop_center@2x.progressive.jpg?v=1680560755`,
        header: `Star Wars™ | Sand Cloud`,
        description: `May the force be with you.`
    }

]

let bathArray = [
    {
        href: `https://www.sandcloud.com/collections/bath-bundles`,
        img: `https://cdn.shopify.com/s/files/1/0819/9793/files/13_79cdb65f-d1bb-4e34-9429-0d3610b57cdf_x640_crop_center.png?v=1682720128`,
        header: `Bundles`,
        description: `Essential to any home.`
    },
    {
        href: `https://www.sandcloud.com/collections/hand-towels`,
        img: `https://cdn.shopify.com/s/files/1/0819/9793/products/14_x640_crop_center.png?v=1666306985`,
        header: `Hand Towels`,
        description: `Instantly elevate your bathroom `
    },
    {
        href: `https://www.sandcloud.com/collections/pantone`,
        img: `https://cdn.shopify.com/s/files/1/0819/9793/products/17_da49d80a-86f5-4dcd-93db-d7aba6131d69_x640_crop_center.png?v=1667867123`,
        header: `Sand Cloud | Pantone`,
        description: `Paint your space with the Pantone collection`
    },
    {
        href: `https://www.sandcloud.com/collections/hair-towels`,
        img: `https://cdn.shopify.com/s/files/1/0819/9793/files/Untitleddesign_37_x640_crop_center.png?v=1683066587`,
        header: `Hair Towels`,
        description: `Wrap yourself in comfort.`
    },

]


let thing = document.querySelector(`[data-comp="collectionSubNav"]`)
if (document.querySelector(`.subCategoriesCarousel`) || !thing || typeof Swiper != "function") return
document.body.classList.add(`v1`)

let [title, array] = window.location.href.includes(`bath`) ? [`BATH`, bathArray] : [`TOWELS`, towelsArray]


let subCategoriesCarousel = document.createElement(`div`)
subCategoriesCarousel.className = `swiper subCategoriesCarousel`
subCategoriesCarousel.innerHTML = `
                <div class="subCategoriesCarouselTitle">${title}</div>
                <div class="swiper-wrapper">
                ${array.reduce((html, item) => {
    return html += `
                    <a class="swiper-slide" href="${item.href}">
                        <img src="${item.img}" />
                        <div class="subCategoriesCarouselHeader">${item.header}</div>
                        <div class="subCategoriesCarouselDescription">${item.description}</div>
                    </a>
                    `
}, ``)}
                </div>
        `

thing.parentElement.insertBefore(subCategoriesCarousel, thing)

let swiper = new Swiper(`.subCategoriesCarousel`, {
    slidesPerView: 2.25,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    }
})
