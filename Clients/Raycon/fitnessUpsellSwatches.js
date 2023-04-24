let products = [
    {
        color: `black`,
        link: `https://rayconglobal.com/products/the-fitness-earbuds?variant=39363744858135`,
        img: `https://rayconglobal.com/cdn/shop/products/raycon-black-3_1200x.png?v=1646162837`,
        sku: `39363744858135`
    },
    {
        color: `blue`,
        link: `https://rayconglobal.com/products/the-fitness-earbuds?variant=39363744890903`,
        img: `https://rayconglobal.com/cdn/shop/products/raycon-blue-3_1200x.png?v=1646162837`,
        sku: `39363744890903`
    },
    {
        color: `red`,
        link: `https://rayconglobal.com/products/the-fitness-earbuds?variant=39363744923671`,
        img: `https://rayconglobal.com/cdn/shop/products/raycon-red-3_1200x.png?v=1630453739`,
        sku: `39363744923671`
    },
    {
        color: `pink`,
        link: `https://rayconglobal.com/products/the-fitness-earbuds?variant=39363744989207`,
        img: `https://rayconglobal.com/cdn/shop/products/raycon-rosegold-3_1200x.png?v=1630453739`,
        sku: `39363744989207`
    }
]

let fitnessUpsellSwatchesInterval = setInterval(() => {
    let productInfo = document.querySelector(`.product__info`)
    if (!productInfo) return
    clearInterval(fitnessUpsellSwatchesInterval)
    let newFitnessUpsellDiv = document.createElement(`div`)
    newFitnessUpsellDiv.className = `newFitnessUpsellDiv`
    newFitnessUpsellDiv.innerHTML = `
        <img src="https://rayconglobal.com/cdn/shop/products/raycon-black-3_1200x.png?v=1646162837"/>
        <ul class="swatchesList">
            <li class="swatch__item active" sku="39363744858135">
                <span class="swatch__color"></span>
                <img class="swatch__image" src="/cdn/shop/t/262/assets/swatch-carbon-black_100x.png?v=180257963902873878981681827344" alt="The Fitness Earbuds - Carbon Black" onerror="style.display = 'none';">
                </li>
            <li class="swatch__item" sku="39363744890903">
                <span class="swatch__color"></span>
                <img class="swatch__image" src="/cdn/shop/t/262/assets/swatch-electric-blue_100x.png?v=173582487457076074501681827344" alt="The Fitness Earbuds - Electric Blue" onerror="style.display = 'none';">
            </li>
            <li class="swatch__item" sku="39363744923671">
                <span class="swatch__color"></span>
                <img class="swatch__image" src="/cdn/shop/t/262/assets/swatch-flare-red_100x.png?v=12649275618290036471681827344" alt="The Fitness Earbuds - Flare Red" onerror="style.display = 'none';">
            </li>
            <li class="swatch__item" sku="39363744989207">
                <span class="swatch__color"></span>
                <img class="swatch__image" src="/cdn/shop/t/262/assets/swatch-rose-gold_100x.png?v=3440158111213629451681827344" alt="The Fitness Earbuds - Rose Gold" onerror="style.display = 'none';">
            </li>
        </ul>
        <div class="swatchesTitle">EVERYDAY EARBUDS</div>
        <div class="swatchesStars">⭐⭐⭐⭐⭐</div>
        <div class="swatchesReviews">75k reviews</div>
        <div class="swatchesPrices">
            <div class="swatchesOriginalPrice">$89.99</div>
            <div class="swatchesNewPrice">$79.99</div>
        </div>
        <div class="swatchesBuyNowButton">BUY NOW</div>
        <div class="swatchesLearnMoreButton">LEARN MORE</div>
    `
    productInfo.append(newFitnessUpsellDiv)
    let swatches = document.querySelectorAll(`.swatchesList li`)
    swatches.forEach((swatch, index) => {
        swatch.addEventListener(`click`, () => {
            document.querySelector(`.swatchesList li.active`).classList.remove(`active`)
            swatch.classList.add(`active`)
            document.querySelector(`.newFitnessUpsellDiv > img`).src = products[index].img
        })
    })

    document.querySelector(`.swatchesBuyNowButton`).addEventListener(`click`, () => {
        let activeSwatch = document.querySelector(`.swatchesList li.active`)
        let productId = activeSwatch.getAttribute(`sku`)
        fetch('/cart/add.js', {
            body: JSON.stringify({ id: productId, quantity: 1 }),
            credentials: "same-origin",
            method: "POST",
            headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest" },
        })
            .then((response) => response.json())
            .then((response) => {
                setTimeout(() => {
                    document.querySelector(`.CartToggle`).click()
                }, 500)
            })
    })

    document.querySelector(`.swatchesLearnMoreButton`).addEventListener(`click`, () => {
        let activeSwatch = document.querySelector(`.swatchesList li.active`)
        let productId = activeSwatch.getAttribute(`sku`)
        window.location.href = `https://rayconglobal.com/products/the-fitness-earbuds?variant=${productId}`
    })

    document.querySelector(`.newFitnessUpsellDiv > img`).addEventListener(`click`, () => {
        let activeSwatch = document.querySelector(`.swatchesList li.active`)
        let productId = activeSwatch.getAttribute(`sku`)
        window.location.href = `https://rayconglobal.com/products/the-fitness-earbuds?variant=${productId}`
    })


}, 250)