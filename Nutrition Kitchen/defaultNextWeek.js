var counter = 0
var defaultNextWeekInterval = setInterval(function () {
    var buttons = document.querySelectorAll('[data-week-number="1"], [data-week-number="2"]')
    if (!buttons.length > 1) {
        if (counter++ >= 25) {
            clearInterval(defaultNextWeekInterval)
        }
        return
    }
    clearInterval(defaultNextWeekInterval)
    // do something with buttons
    var newDiv = document.createElement('div')
    newDiv.id = "nextWeeksMeals"
    newDiv.innerText = "Next Week's Meals"
    buttons[1].parentElement.insertBefore(newDiv, buttons[1])
    buttons[0].innerText = "Current Week"
    var counter = 0
    var buttonClickInterval = setInterval(function () {
        if (buttons[1].classList.contains('active') || counter++ >= 20) {
            clearInterval(buttonClickInterval)
            return
        }
        // do something with buttons
        counter++
        buttons[1].click()
    }, 250)
}, 250)