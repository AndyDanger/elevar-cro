let jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(jqueryScript);

let flickityScript = document.createElement('script');
flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
document.head.appendChild(flickityScript);

let cssElement = document.createElement("link");
cssElement.setAttribute("rel", "stylesheet");
cssElement.setAttribute("type", "text/css");
cssElement.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(cssElement);

let colorSwatchesInterval = setInterval(() => {
    let productOptions = document.querySelector(`[data-comp="ProductOptions"]`)
    if (!productOptions) return

    let swatchesDiv = productOptions.previousSibling
    swatchesDiv.classList.add(`swatchesDiv`)

    if (swatchesDiv.childElementCount < 2 || window.location.href.includes(`no-swatches=true`) || document.querySelector(`.swatchesCarousel`) || typeof $ == "undefined" || !$().flickity) return
    swatchesDiv.classList.add(`hide`)

    let swatchesCarousel = document.createElement(`div`)
    swatchesCarousel.className = `swatchesCarousel`
    let swatchesHtml = ``
    let swatches = swatchesDiv.querySelectorAll(`div`)
    let counter = 0
    swatches.forEach((swatch) => {
        if (swatch.parentElement != swatchesDiv) return
        swatchesHtml += swatch.outerHTML
        swatch.setAttribute(`swatch-id`, counter)
        counter++
    })

    swatchesCarousel.innerHTML = swatchesHtml
    swatchesDiv.parentElement.insertBefore(swatchesCarousel, swatchesDiv)

    $(swatchesCarousel).flickity({
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        imagesLoaded,
        pageDots: false,
        percentPosition: false,
        prevNextButtons: false
    })

    setTimeout(() => {
        $(`.swatchesCarousel`).flickity(`resize`)
    },  100)

    let carouselSlides = document.querySelectorAll(`.swatchesCarousel .flickity-slider > div`)
    carouselSlides.forEach((slide, index) => {
        slide.setAttribute(`slide-id`, index)
        slide.addEventListener(`click`, (event) => {
            let slideId = event.target.getAttribute(`slide-id`)
            let carousel = document.querySelector(`.swatchesCarousel`)
            if (carousel) carousel.remove()
            document.querySelector(`[swatch-id="${slideId}"]`).click()

        })
    })


}, 250)