let findMySizeButtonInterval = setInterval(() => {
    let link = document.querySelector(`li[data-trigger-menu="find-my-size"]`)
    let secondaryList = document.querySelector(`.menu--mobile .nav-mobile__list-secondary`)
    if (!link || !secondaryList) return
    clearInterval(findMySizeButtonInterval)

    let newLink = document.createElement(`a`)
    newLink.className = `findMySizeLink`
    newLink.href = `https://shopcuup.com/pages/fittings`
    newLink.innerText = `Find My Size`
    link.parentElement.append(newLink)
    link.remove()
    newLink.addEventListener(`click`, trackButtonClick)

    secondaryList.innerHTML += `
        <li>
            <a href="https://shopcuup.com/pages/fittings" style="color: ">Fittings</a>
        </li>
    `

}, 250)

function trackButtonClick() {
    let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-127301726-1') // insert their UA number here
    if (!tracker) return
    tracker.send('event', 'navigation', 'find my size button click', window.location.href) // replace event category and event action
}