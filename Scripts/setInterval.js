let newInterval = setInterval(function () {
    let buttons = document.querySelectorAll('.yourButtons')
    if (!buttons.length) {
        return
    }
    clearInterval(newInterval)
    // do something with buttons
}, 250)
