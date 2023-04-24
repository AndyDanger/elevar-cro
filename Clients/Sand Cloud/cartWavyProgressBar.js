clearInterval(cartProgressInterval)
window.progress = 0
var cartProgressInterval = setInterval(function () {
    var progressElement = document.querySelector('progress')
    if (!progressElement) {
        return
    }
    // do something with buttons
    var value = progressElement.value
    var newProgressBar = document.querySelector('.newProgressBar')
    if (value == window.progress && newProgressBar) {
        return
    }
    window.progress = value
    var max = progressElement.max

    if (!newProgressBar) {
        newProgressBar = document.createElement('div')
        newProgressBar.className = 'newProgressBar'
        newProgressBar.innerHTML = `<div class="indicator" style="transform: scale(${value / max}, 1);"></div><div class="indicator" style="transform: scale(${value / max}, 1);"></div>`
        progressElement.parentElement.append(newProgressBar)
    }

    var indicators = document.querySelectorAll('.indicator')
    indicators[0].style.transform = `scale(${value / max}, 1)`
    indicators[1].style.transform = `scale(${value / max}, 1)`

}, 500)