let homepageVideoInterval = setInterval(() => {
    let mainBanner = document.querySelector(`.hero`)
    // let videoElement = document.querySelector(`video.mobile-video-hp`)
    if (!mainBanner) return
    clearInterval(homepageVideoInterval)
    mainBanner.innerHTML = `
        <a href="https://bartesian.com/products/cocktail-maker">
            <img src="https://i.imgur.com/pzChGR6.jpg" style="width: 100%;">
            <img src="https://i.imgur.com/pA0dAwp.gif" style="width: 100%; margin: -8px 0px;">
        </a>
    `
    // mainBanner.append(videoElement)
    // videoElement.playsinline = true
    // videoElement.muted = true
    // videoElement.controls = true
    // videoElement.autoplay = true
    // videoElement.loop = true
    // videoElement.play()
}, 250)