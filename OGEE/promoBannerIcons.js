let promoBannerIconsInterval = setInterval(() => {
    let message = document.querySelector(`.announcement-bar__message`)
    if (!message) return
    clearInterval(promoBannerIconsInterval)
    let lipstickGif = document.createElement(`img`)
    lipstickGif.className = `lipstickGif`
    lipstickGif.src = `https://i.imgur.com/nhkOd2e.gif`
    // message.parentElement.append(lipstickGif)
    message.parentElement.insertBefore(lipstickGif, message)
}, 250)