let bannerLoadMoreInterval = setInterval(() => {
    let bannerText = document.querySelector(`div.wrapper > div > p`)
    if (!bannerText) {
        return
    }
    clearInterval(bannerLoadMoreInterval)

    bannerText.classList.add(`hidden`)
    bannerText.classList.add(`bannerText`)
    let continueReadingButton = document.createElement(`div`)
    continueReadingButton.className = `continueReadingButton`
    continueReadingButton.innerText = `Continue Reading`
    bannerText.parentElement.append(continueReadingButton)
    continueReadingButton.addEventListener(`click`, (() => {
        bannerText.style.maxHeight = `none`
        bannerText.classList.remove(`hidden`)
        continueReadingButton.remove()
        var tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-109175710-1')
        if (tracker) {
            tracker.send('event', 'kin landing page', 'continue reading button click', window.location.href)
        }
    }))


}, 250)