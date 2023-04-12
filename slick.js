let jqueryScript = document.createElement('script');
jqueryScript.type = "text/javascript";
jqueryScript.addEventListener("load", function (event) {
    let slickScript = document.createElement('script');
    slickScript.type = "text/javascript";
    slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
    document.head.appendChild(slickScript);
});
jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(jqueryScript);

let slickCss = document.createElement("link");
slickCss.setAttribute("rel", "stylesheet");
slickCss.setAttribute("type", "text/css");
slickCss.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
document.getElementsByTagName("head")[0].appendChild(slickCss);


let lordIconScript = document.createElement('script');
lordIconScript.type = "text/javascript";
lordIconScript.src = 'https://cdn.lordicon.com/ritcuqlt.js';
document.head.appendChild(lordIconScript);

let lordIconTag = document.createElement(`lord-icon`)
lordIconTag.src = `https://cdn.lordicon.com/tgriojic.json`
lordIconTag.trigger = `hover`
document.querySelector(`header`).append(lordIconTag)

