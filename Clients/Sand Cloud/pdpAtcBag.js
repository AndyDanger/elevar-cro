let atcBagIconInterval = setInterval(() => {
    let atcButtons = document.querySelectorAll(`
    [data-comp="CollectionTemplate"] [data-comp="AddToCart"] > button:not(.bagAdded),
    [data-comp="ProductTemplate"] [data-comp="AddToCart"] > button:not(.bagAdded),
    [data-comp="CollectionTemplate"] [data-comp="QuickAdd"] > button:not(.bagAdded),
    [data-comp="ProductTemplate"] [data-comp="QuickAdd"] > button:not(.bagAdded)
    `)
    if (!atcButtons.length) return
    let svgHtml = `<svg aria-label="Open cart sidebar" alt="Open cart sidebar" data-comp="SvgSvg" role="img" viewBox="0 0 48 48" preserveAspectRatio="" class="css-170unql" style="position: relative;height: 40px;width: 40px;display: inline-block;padding-top: 5px;vertical-align: top;"><use x="0" y="0" href="/svgs/cta/cart-empty.svg#cart-empty" class="css-vurnku"></use></svg>`
    atcButtons.forEach((atcButton, index) => {
        if (index > 10 || atcButton.innerText.includes(`NOTIFY`) || atcButton.innerText.includes(`LOADING`) || atcButton.innerText.includes(`SOLD`) || (atcButton.closest(`[data-comp="ProductItem"]`) && atcButton.closest(`[data-comp="ProductItem"]`).querySelector(`title`) && atcButton.closest(`[data-comp="ProductItem"]`).querySelector(`title`).innerHTML.includes(`Loading`))) return
        atcButton.classList.add(`bagAdded`)
        atcButton.innerHTML = `${svgHtml}ADD TO BAG`
        if (atcButton.closest(`[data-comp="QuickAdd"]`)) return
        atcButton.addEventListener(`click`, () => {
            atcButton.innerHTML = `${svgHtml}ADDING`
            setTimeout(() => {
                atcButton.innerHTML = `${svgHtml}ADD TO BAG`
            }, 1000)
        })
    })
}, 250)