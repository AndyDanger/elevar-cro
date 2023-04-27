let cartDiscountCodeInterval = setInterval(() => {
    let cartLineItems = document.querySelector(`[data-comp="LineItems"]`)
    if (!cartLineItems || document.querySelector(`.discountCodeWidget`)) return
    let discountCodeWidget = document.createElement(`div`)
    discountCodeWidget.className = `discountCodeWidget`
    discountCodeWidget.innerHTML = `
        <div class="firstStepWrapper">
            <div class="firstStepHeader">Have a discount code?</div>
            <div class="firstStepButton">ENTER IT HERE</div>
        </div>
        <div class="secondStepWrapper" style="display: none;">
            <input class="secondStepInput"></input>
            <div class="secondStepButton">APPLY</div>
        </div>
    `
    cartLineItems.parentElement.insertBefore(discountCodeWidget, cartLineItems)
    document.querySelector(`.discountCodeWidget .firstStepButton`).addEventListener(`click`, () => {
        document.querySelector(`.discountCodeWidget .firstStepWrapper`).style.display = `none`
        document.querySelector(`.discountCodeWidget .secondStepWrapper`).style.display = `block`
    })

    document.querySelector(`.discountCodeWidget .firstStepButton`).addEventListener(`click`, () => {
        document.querySelector(`.discountCodeWidget .firstStepWrapper`).style.display = `none`
        document.querySelector(`.discountCodeWidget .secondStepWrapper`).style.display = `block`
    })

}, 250)