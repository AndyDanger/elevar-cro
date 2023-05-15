let swiperScript = document.createElement('script')
swiperScript.type = "text/javascript"
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'
document.getElementsByTagName('head')[0].appendChild(swiperScript)

let cartSwiperInterval = setInterval(() => {
    let upsellsCarousel = document.querySelector(`[data-comp="UpSellsBlock"] .swiper-container`)
    if (!upsellsCarousel || !upsellsCarousel.swiper || !Swiper) {
        return
    }
    clearInterval(cartSwiperInterval)
    
    let swiper = upsellsCarousel.swiper
    swiper.destroy(false, true)
    let newSwiper = new Swiper(`[data-comp="UpSellsBlock"] .swiper-container`, {
        slidesPerView: 1.175,
        spaceBetween: 0,
        freeMode: true,
        observer: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      })
}, 250)