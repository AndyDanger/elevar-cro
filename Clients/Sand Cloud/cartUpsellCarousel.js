if (!window.swiperScriptAdded) {
  window.swiperScriptAdded = true
  let swiperScript = document.createElement('script')
  swiperScript.type = "text/javascript"
  swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'
  document.getElementsByTagName('head')[0].appendChild(swiperScript)
}

window.intervalSet = false
let cartSwiperInterval = setInterval(() => {
  let upsellsCarousel = document.querySelector(`[data-comp="UpSellsBlock"] .swiper-container`)
  if (document.querySelector(`.upsellsHeader`) || !upsellsCarousel || !upsellsCarousel.querySelector(`button`) || !upsellsCarousel.querySelector(`[data-comp="Locale.Variant"] p`) || upsellsCarousel.querySelectorAll(`button`).length != upsellsCarousel.querySelectorAll(`[data-comp="Locale.Variant"] p`).length || !upsellsCarousel.querySelector(`button`).innerText.includes(`ADD`) || !upsellsCarousel.querySelector(`[data-comp="Locale.Variant"] p`).innerText.includes(`$`) || !upsellsCarousel.swiper || !Swiper) return
  // clearInterval(cartSwiperInterval)
  document.querySelector(`[data-comp="UpSellsBlock"]`).parentElement.classList.add(`v2`)

  if (!document.querySelector(`.upsellsHeader`)) {
    let upsellsHeader = document.createElement(`div`)
    upsellsHeader.innerText = `You May Also Like`
    upsellsHeader.className = `upsellsHeader`
    upsellsCarousel.parentElement.insertBefore(upsellsHeader, upsellsCarousel)
  }

  let links = upsellsCarousel.querySelectorAll(`a[data-comp="Link-Internal"]`)
  links.forEach(link => {
    link.parentElement.parentElement.insertBefore(link, link.parentElement)
  })
  let prices = upsellsCarousel.querySelectorAll(`[data-comp="Locale.Variant"] p`)
  upsellsCarousel.querySelectorAll(`button`).forEach((button, index) => {
    button.innerText += ` - ${prices[index].innerText}`
  })

  let swiper = upsellsCarousel.swiper
  swiper.destroy(false, true)
  let newSwiper = new Swiper(`[data-comp="UpSellsBlock"] .swiper-container`, {
    slidesPerView: 2,
    spaceBetween: 0,
    freeMode: true,
    observer: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  if (window.intervalSet) return
  window.intervalSet = true
  let autoResizeInterval = setInterval(() => {
    if (document.querySelector(`[data-comp="UpSellsBlock"] .swiper-container .swiper-slide`)) {
      document.querySelector(`[data-comp="SidebarScroll"]`).classList.add(`swiperExists`)
      document.querySelector(`[data-comp="SidebarScroll"]`).classList.remove(`swiperEmpty`)
    } else {
      document.querySelector(`[data-comp="SidebarScroll"]`).classList.remove(`swiperExists`)
      document.querySelector(`[data-comp="SidebarScroll"]`).classList.add(`swiperEmpty`)
    }

  }, 250)

}, 250)
