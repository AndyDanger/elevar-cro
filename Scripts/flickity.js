let jqueryScript = document.createElement('script');
jqueryScript.type = "text/javascript";
jqueryScript.addEventListener("load", function (event) {
    let flickityScript = document.createElement('script');
    flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
    document.head.appendChild(flickityScript);
});
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(jqueryScript);

let cssElement = document.createElement("link");
cssElement.setAttribute("rel", "stylesheet");
cssElement.setAttribute("type", "text/css");
cssElement.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(cssElement);


let flickityInterval = setInterval(function () {
    if (typeof jQuery == `undefined` || !$().flickity) return
    clearInterval(flickityInterval)
    $('#newCarousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false
    });
}, 250)

