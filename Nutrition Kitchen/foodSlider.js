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

let foodArray = [`🥗`, `🥙`, `🥪`, `🌮`, `🌯`, `🧆`]

let flickityInterval = setInterval(function () {
    if (!$().flickity) {
        return
    }
    clearInterval(flickityInterval)
    let html = ``
    foodArray.forEach(thing => {
        let newDiv = document.createElement(`div`)
        newDiv.innerText = thing
        newDiv.className = `carousel-cell`
        html += newDiv.outerHTML
    })
    let mainCarousel = document.createElement(`div`)
    mainCarousel.id = `mainCarousel`
    mainCarousel.innerHTML = html
    document.querySelector(`.header-cta a`).append(mainCarousel)
    $('#mainCarousel').flickity({
        // options
        autoPlay: 1000,
        // draggable: false,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true

    });
}, 250)

