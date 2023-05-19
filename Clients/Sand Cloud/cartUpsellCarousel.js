let control = () => {
  console.log(`control`)
}

let variant1 = () => {
  console.log(`variant1`)
  if (!window.swiperScriptAdded) {
    window.swiperScriptAdded = true
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

  let cartSwiperInterval = setInterval(() => {
    let upsellsCarousel = document.querySelector(`[data-comp="UpSellsBlock"] .swiper-container`)
    if (document.querySelector(`[data-comp="UpSellsBlock"] .swiper-pagination`) || !upsellsCarousel || !upsellsCarousel.querySelector(`button`) || !upsellsCarousel.querySelector(`[data-comp="Locale.Variant"] p`) || !upsellsCarousel.querySelector(`button`).innerText.includes(`ADD`) || !upsellsCarousel.querySelector(`[data-comp="Locale.Variant"] p`).innerText.includes(`$`) || !upsellsCarousel.swiper || !Swiper) return
    // clearInterval(cartSwiperInterval)

    let swiperDots = document.createElement(`div`)
    swiperDots.className = `swiper-pagination`
    upsellsCarousel.append(swiperDots)

    let swiper = upsellsCarousel.swiper
    swiper.destroy(false, true)
    let newSwiper = new Swiper(`[data-comp="UpSellsBlock"] .swiper-container`, {
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
      observer: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })

  }, 250)
}

let variant2 = () => {
  console.log(`variant2`)
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
}

let variant3 = () => {
  console.log(`variant3`)
}

let variants = [control, variant1, variant2, variant3]

let main = () => {
  let url = new URL(window.location.href)
  let variant = url.searchParams.get(`test_variant`)
  if (variant) {
    setCookie(`test_variant`, variant, 7)
  }
  let storageVariant = getCookie(`test_variant`) || 1 // default to variant 1
  variants[storageVariant]() // call the variant's function
}

let setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

let getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

main()