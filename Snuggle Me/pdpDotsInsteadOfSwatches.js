var script = document.createElement('script');
script.type = "text/javascript";
script.addEventListener("load", function (event) {
    var script2 = document.createElement('script');
    script2.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    document.head.appendChild(script2);
});
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(element);

let pdpDotsInterval = setInterval(() => {
    if (typeof $ == `undefined` || !$().slick) {
        return
    }
    clearInterval(pdpDotsInterval)
    let options = $(`[data-product-slideshow]`).slick(`getSlick`)
    options.defaults.dots = true
    $(`[data-product-slideshow]`).slick(`unslick`)
    $(`[data-product-slideshow]`).slick(options.defaults)
}, 250)
