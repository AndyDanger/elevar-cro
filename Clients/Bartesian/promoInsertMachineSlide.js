let promoInsertMachineInterval = setInterval(() => {
    let promoBar = document.querySelector(`.announcement-bar__slider.swiper`)
    if (!promoBar || !Swiper) return
    clearInterval(promoInsertMachineInterval)
    let promoSwiper = new Swiper(promoBar)
    promoSwiper.slidePrev()
    promoSwiper.prependSlide(`
    <div class="announcement-bar color-accent-1 gradient swiper-slide" role="group" aria-label="1 / 3" style="width: 381px;">
        <a href="https://bartesian.com/collections/valentines-day" class="announcement-bar__link link link--text">
            <p class="announcement-bar__message h5">
            Free choice of cocktails with your machine purchase
            </p>
        </a>
    </div>
    `)
    promoSwiper.slidePrev()
}, 250)