let plpLearnMoreInterval = setInterval(() => {
    let productCards = document.querySelectorAll(`.grid__item`)
    if (!productCards.length) return
    clearInterval(plpLearnMoreInterval)
    productCards.forEach(card => {
        let ctaWrapper = card.querySelector(`.grid__cta`)
        if (!ctaWrapper) return
        let cta = ctaWrapper.querySelector(`a`)
        let ctaClone = cta.cloneNode(true)
        ctaClone.classList.add(`ctaClone`)
        ctaClone.innerText = `Learn More`
        ctaWrapper.append(ctaClone)
        cta.addEventListener(`click`, (event) => {
            let href = event.target.href.includes(`variant=`) ? event.target.href : event.target.closest(`.grid__meta`).querySelector(`.swatch__item.active a`).href
            let match = href.match(/variant=(\d+)/)
            console.log(href)
            console.log(match)
            if (match) {
                event.preventDefault()
                fetch('/cart/add.js', {
                    body: JSON.stringify({ id: match[1], quantity: 1 }),
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
            }
        })
    })
}, 250)