let pdpGrid = () => {

    let swiper = document.querySelector(`[data-comp="ProductTemplate"] [data-comp="Main"] .swiper-container`)
    if (!swiper) return
    document.querySelector(`[data-comp="ProductTemplate"] [data-comp="Main"]`).classList.add(`swiper-destroyed`)
    swiper.swiper.destroy(false, false)

    swiper.querySelectorAll(`.swiper-slide`).forEach((slide, index) => {
        if (index < 6) return
        slide.classList.add(`hidden`)
    })
}
pdpGrid()