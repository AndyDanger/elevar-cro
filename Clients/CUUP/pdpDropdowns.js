window.currentVariantUrl = ``
let pdpDropdownsInterval = setInterval(() => {
    let buttons = document.querySelectorAll(`.add-to-cart-form__content .option-selectors__selectors button:not(.selector--swatch)`)
    let swatchLabel = document.querySelector(`.swatch-label`)
    if (!buttons.length || !swatchLabel || swatchLabel.innerText.includes(`Sale`) || window.currentVariantUrl == window.location.pathname) return
    // clearInterval(pdpDropdownsInterval)
    console.log(`switching`)
    document.body.classList.add(`pdpDropdowns`)
    window.currentVariantUrl = window.location.pathname
    let dropdown = document.querySelector(`.dropdownSelector`)
    if (!dropdown) {
        dropdown = document.createElement(`select`)
        dropdown.className = `dropdownSelector size-select bottom-size-select product__select pdp--select type--body`
        document.querySelector(`.option-selectors__wrapper `).append(dropdown)
    }

    let newHtml = ``
    buttons.forEach(button => {
        let text = button.innerText.trim()
        button.setAttribute(`data-size`, text)
        newHtml += `<option value="${text}" ${button.classList.contains(`selected`) ? "selected" : null} ${button.classList.contains(`disabled-selector`) && document.querySelector(`.option-selectors:not(.option-selectors--buttons) > div:nth-of-type(4) .selector--swatch.selected`) ? "disabled" : null}>${text}</option>`
    })

    dropdown.innerHTML = newHtml
    dropdown.addEventListener(`change`, (event) => {
        console.log(event)
        document.querySelector(`[data-size="${event.target.value}"]`).click()
    })

}, 250)