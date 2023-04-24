let homepageVideoInterval = setInterval(() => {
    let mainBanner = document.querySelector(`.hero`)
    // let videoElement = document.querySelector(`video.mobile-video-hp`)
    if (!mainBanner) return
    clearInterval(homepageVideoInterval)
    mainBanner.innerHTML = `
        <a href="https://bartesian.com/collections/winter-bundle">
            <img src="https://i.imgur.com/Y3p2A0s.png" style="width: 100%;">
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