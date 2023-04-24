let jsonArray = [
    {
        image: `https://cdn.shopify.com/s/files/1/0038/6049/6433/products/1_750x.png?v=1658931413`,
        text: `SHOP THE BARTESIAN`,
        link: `https://bartesian.com/products/the-bartesian`
    },
    {
        image: `https://cdn.shopify.com/s/files/1/0038/6049/6433/products/bartesian-duet-1_750x.jpg?v=1674075206`,
        text: `SHOP THE DUET`,
        link: `https://bartesian.com/products/bartesian-duet-cocktail-maker`
    },
    {
        image: `https://cdn.shopify.com/s/files/1/0038/6049/6433/products/55306-3Q-Filledcopy_750x.jpg?v=1665520232`,
        text: `SHOP THE PROFESSIONAL`,
        link: `https://bartesian.com/products/bartesian-professional-cocktail-maker`
    },
]

let menuInsertProductSwiperInterval = setInterval(() => {
    let menu = document.querySelector(`.menu-drawer__navigation`)
    if (!menu) return
    clearInterval(menuInsertProductSwiperInterval)
    let imagesHtml = ``
    jsonArray.forEach(thing => {
        imagesHtml += `<div class="swiper-slide"><img src="${thing.image}"><a class="button button--primary mr-18" href="${thing.link}">${thing.text}</a></div>`
    })
    let mobileMenuSwiper = document.createElement(`div`)
    mobileMenuSwiper.id = `mobileMenuSwiper`
    mobileMenuSwiper.className = `swiper`
    mobileMenuSwiper.innerHTML = `  <div class="swiper-wrapper">${imagesHtml}</div>`
    menu.parentElement.append(mobileMenuSwiper)
    let mobileMenuSwiperReference = new Swiper('#mobileMenuSwiper', {
        autoplay: {
            delay: 3000,
        },
        loop: true,
        speed: 400,
        spaceBetween: 100,
    })
}, 250)