var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit.min.js';
document.head.appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/css/uikit.min.css");
document.getElementsByTagName("head")[0].appendChild(element);

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    // Do something with the scroll position
    console.log(scrollPos)
    var things = document.querySelectorAll('.uk-position-center-left')
    things.forEach(function (thing, index) {
        if (thing.style.opacity == '0') {
            thing.style.zIndex = '1'
        } else {
            thing.style.zIndex = `${index + 99}`
        }
    })
}

document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;

    doSomething(lastKnownScrollPosition);

});