let checkoutValuePropsInterval = setInterval(() => {
    let orderSummary = document.querySelector(`.order-summary__sections`)
    if (!orderSummary) return
    clearInterval(checkoutValuePropsInterval)

    valueProps(orderSummary)
}, 250)


function valueProps(orderSummary) {
    let desktopValuePropsDiv = document.createElement(`div`)
    desktopValuePropsDiv.id = `desktopValuePropsDiv`
    desktopValuePropsDiv.innerHTML =
        `
        <div class="valuePropsTitle">We've Got You Covered</div>
        <div class="valuePropsWrapper">
            <div>
                <img src="https://i.imgur.com/BibhWJ2.png" />
                <div class="valuePropsDiv">Free Shipping $199+</div>
            </div>
            <div>
                <img src="https://i.imgur.com/aKYH98v.png" />
                <div class="valuePropsDiv">Hassle-Free Returns</div>
            </div>
            <div>
                <img src="https://i.imgur.com/A6Nnueb.png" />
                <div class="valuePropsDiv">Limited Lifetime Warranty</div>
            </div>
        </div>
        `

    orderSummary.append(desktopValuePropsDiv)
    let mobileValuePropsDiv = desktopValuePropsDiv.cloneNode(true)
    mobileValuePropsDiv.id = `mobileValuePropsDiv`
    document.querySelector(`.main__content`).append(mobileValuePropsDiv)
}