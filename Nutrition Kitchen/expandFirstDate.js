var expandFirstDateInterval = setInterval(function () {
    var firstWeek = document.querySelector('li.meal-group')
    if (!firstWeek) {
        return
    }
    clearInterval(expandFirstDateInterval)
    // do something with buttons
    firstWeek.classList.add('in')
}, 250)
