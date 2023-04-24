$(button).click(function () {
    let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-58551094-7') // insert their UA number here
    if (!tracker) return
    tracker.send('event', 'event category', 'event action', window.location.href) // replace event category and event action
})

let divs = document.querySelectorAll(`div`)
divs.forEach(div => {
    div.addEventListener(`click`, () => {
        let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-58551094-7') // insert their UA number here
        if (!tracker) return
        tracker.send('event', 'event category', 'event action', window.location.href) // replace event category and event action
    })
})