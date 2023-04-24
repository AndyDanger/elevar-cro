let checkoutStylingInterval = setInterval(() => {
    let breadcrumbs = document.querySelector(`nav`)
    let button = document.querySelector(`#continue_button`)
    let orderSummary = document.querySelector(`.sidebar__content`)
    if (!breadcrumbs || !button || !orderSummary) return
    clearInterval(checkoutStylingInterval)
    let clone = breadcrumbs.cloneNode(true)
    orderSummary.parentElement.insertBefore(clone, orderSummary)
    let buttonClone = button.cloneNode(true)
    buttonClone.classList.add(`clonedButton`)
    orderSummary.parentElement.append(buttonClone)
    buttonClone.addEventListener(`click`, function () {
        button.click()
    })
}, 250)