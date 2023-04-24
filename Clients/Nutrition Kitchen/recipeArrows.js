let recipeButtonsInterval = setInterval(() => {
    let modal = document.querySelector(`#ProductSection-`)
    if (!modal || document.querySelector(`.previousButton`) || document.querySelector(`.nextButton`)) return

    let titleElement = document.querySelector(`.product__title strong`)
    let title = titleElement.innerText
    let xpath = `//h4/a/span/strong[text()='${title}']`;
    let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    let parentCard = matchingElement.closest(`.grid__item:not(.card__body)`)
    let recipeCards = document.querySelectorAll(`.grid--meal-items > .grid__item`)
    let cardIndex = 0
    recipeCards.forEach((card, index) => {
        if (card == parentCard) {
            cardIndex = index
        }
    })

    let previousCard = recipeCards[cardIndex - 1]
    let nextCard = recipeCards[cardIndex + 1]

    if (previousCard) {
        let previousButton = document.createElement(`div`)
        previousButton.className = `previousButton`
        previousButton.innerText = `<`
        document.querySelector(`#ProductSection- .grid__item`).append(previousButton)
        previousButton.addEventListener(`click`, (event) => {
            setTimeout(() => {
                previousCard.querySelector(`.card__title a`).click()
            }, 50)
        })
    }

    if (!nextCard) return
    let nextButton = document.createElement(`div`)
    nextButton.className = `nextButton`
    nextButton.innerText = `>`
    document.querySelector(`#ProductSection- .grid__item`).append(nextButton)
    nextButton.addEventListener(`click`, (event) => {
        setTimeout(() => {
            nextCard.querySelector(`.card__title a`).click()
        }, 50)
    })

}, 250)
