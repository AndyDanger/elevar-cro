function main() {
    if (!window.flickityScriptLoaded) {
        window.flickityScriptLoaded = true
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
    }
    let thumbnailsWrapper = document.querySelector(`[data-comp="ProductImagesThumbs"]:not(.main-carousel)`)
    if (!thumbnailsWrapper || typeof jQuery == `undefined` || !$().flickity) return
    thumbnailsWrapper.classList.add(`main-carousel`)
    let thumbnails = document.querySelectorAll(`[data-comp="ProductImageThumb"]`)
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.add(`carousel-cell`)
    })

    $('[data-comp="ProductImagesThumbs"].main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false
    });
}
main()