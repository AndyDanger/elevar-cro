if (typeof $ == "undefined") {
    let jqueryScript = document.createElement('script')
    jqueryScript.type = "text/javascript"
    jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js'
    document.getElementsByTagName('head')[0].appendChild(jqueryScript)
}

function thing() {
    let atcButton = document.querySelector(`[data-comp="AddToCart"] button`)
    if (!atcButton || typeof $ == "undefined") return
    let productTitle = document.querySelector(`[data-comp="Main"] h1`).innerText
    let productOptions = document.querySelector(`[data-comp="ProductOptions"]`)
    let swatchesDiv = productOptions.previousSibling
    let selectedSwatch = swatchesDiv.querySelector(`[data-comp="StickyContainer"] div > div > div > div > div > div`)
    let price = document.querySelector(`[data-comp="Locale.Variant"] [data-comp="Amount"] p:not([aria-label*="Original"])`)
    if (price.innerText.includes(`$0`)) return
    if (document.querySelector(`.stickyAtcDiv .leftDiv`)) {
        if (!document.querySelector(`.stickyAtcDiv .leftDiv .title`).innerText.includes(productTitle)) {
            document.querySelector(`.stickyAtcDiv .leftDiv`).innerHTML = `
                <div class="swatch">${selectedSwatch.outerHTML}</div>
                <div class="titleAndPrice">
                    <div class="title">${productTitle}</div>
                    <div class="price">${price.innerText}</div>
                </div>
            `
        }
        return
    }
    
    let stickyAtcDiv = document.createElement(`div`)
    stickyAtcDiv.className = `stickyAtcDiv`
    stickyAtcDiv.innerHTML = `
        <div class="leftDiv">
            <div class="swatch">${selectedSwatch.outerHTML}</div>
            <div class="titleAndPrice">
                    <div class="title">${productTitle}</div>
                    <div class="price">${price.innerText}</div>
            </div>
        </div>
        <div class="rightDiv" onclick="window.addToBag()">ADD TO BAG</div>
    `
    document.querySelector(`header`).append(stickyAtcDiv)
    $(stickyAtcDiv).slideUp()

    window.addEventListener("scroll", function () {
        let elementTarget = document.querySelector(`[data-comp="AddToCart"] button`)
        let stickyAtcDiv = document.querySelector(`.stickyAtcDiv`)
        if (!elementTarget || !stickyAtcDiv) return
        // console.log(`window.scrollY: ${window.scrollY} - window.screen.height: ${window.screen.height} - elementTarget.offsetTop: ${elementTarget.offsetTop} - elementTarget.offsetHeight: ${elementTarget.offsetHeight}`)
        if (elementTarget.getBoundingClientRect().top < 100) {
            $(stickyAtcDiv).slideDown()
        } else {
            $(stickyAtcDiv).slideUp()
        }
    });
}

window.addToBag = function () {
    document.querySelector(`[data-comp="AddToCart"] button`).click()
    document.querySelector(`.stickyAtcDiv .rightDiv`).innerText = `ADDING`
    setTimeout(() => {
        document.querySelector(`.stickyAtcDiv .rightDiv`).innerText = `ADD TO BAG`
    }, 1000)
}
thing()