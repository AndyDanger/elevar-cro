let plungePlpInterval = setInterval(() => {
    console.log(`replacing images`)
    let mainBanner = document.querySelector(`.hero__image.hide-mobile.lazyloaded`)
    let firstCard = document.querySelector(`.content-card:nth-of-type(1n) img`)
    let secondCard = document.querySelector(`.content-card:nth-of-type(2n) img`)
    let thirdCard = document.querySelector(`.content-card:nth-of-type(3n) img`)
    let mobileImage = document.querySelector(`.video-image--mobile`)
    let count = 0
    if (mainBanner) {
        mainBanner.src = `https://i.imgur.com/rMFVd0N.jpg`
        mainBanner.srcset = `https://i.imgur.com/rMFVd0N.jpg`
        count++
    }
    if (firstCard) {
        firstCard.src = `https://i.imgur.com/Y6nZahk.jpg`
        firstCard.srcset = `https://i.imgur.com/Y6nZahk.jpg`
        count++
    }
    if (secondCard) {
        secondCard.src = `https://i.imgur.com/xb64BHB.jpg`
        secondCard.srcset = `https://i.imgur.com/xb64BHB.jpg`
        count++
    }
    if (thirdCard) {
        thirdCard.src = `https://i.imgur.com/kSa7PCz.jpg`
        thirdCard.srcset = `https://i.imgur.com/kSa7PCz.jpg`
        count++
    }
    if (mobileImage) {
        mobileImage.src = `https://i.imgur.com/4kYrcfD.jpg`
        mobileImage.srcset = `https://i.imgur.com/4kYrcfD.jpg`
        count++
    }

    if (count >= 5) {
        console.log(`images replaced`)
        clearInterval(plungePlpInterval)
    }

}, 250)