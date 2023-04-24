let promoBannerCarouselInterval = setInterval(() => {
    let promoBanner = document.querySelector(`.announcement-bar__message`)
    if (!promoBanner || typeof $ == "undefined" || !$().slick) return
    clearInterval(promoBannerCarouselInterval)

    // let lipstickGif = document.createElement(`img`)
    // lipstickGif.className = `lipstickGif`
    // lipstickGif.src = `https://i.imgur.com/nhkOd2e.gif`
    // promoBanner.parentElement.insertBefore(lipstickGif, promoBanner)
    let spans = promoBanner.querySelectorAll(`span`)
    spans.forEach(span => {
        span.className = `line_1`
    })
    let newMessage = document.createElement(`span`)
    newMessage.className = `line_1`
    newMessage.innerText = `FREE U.S. 2-DAY SHIPPING ORDERS $250+`
    promoBanner.append(newMessage)
    $(promoBanner).slick({
        arrows: false,
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500
    })
}, 250)