let jqueryScript = document.createElement('script');
jqueryScript.type = "text/javascript";
jqueryScript.addEventListener("load", function (event) {
    let slickScript = document.createElement('script');
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

let imagesArray = [
    {
        name: `Forbes`,
        src: `https://cdn.shopify.com/s/files/1/0038/6049/6433/files/image_27.png?v=1663618860`,
        quote: `Amazing product! I love it!`
    },
    {
        name: `Food Network`,
        src: `https://cdn.shopify.com/s/files/1/0038/6049/6433/files/image_22.png?v=1663618932`,
        quote: `Amazing product! I love it!`
    },
    {
        name: `Esquire`,
        src: `https://cdn.shopify.com/s/files/1/0038/6049/6433/files/esquire_1.png?v=1663618949`,
        quote: `Amazing product! I love it!`
    },
    {
        name: `Oprah Magazine`,
        src: `https://cdn.shopify.com/s/files/1/0038/6049/6433/files/image_25.png?v=1663618982`,
        quote: `Amazing product! I love it!`
    },
    {
        name: `The Knot`,
        src: `https://cdn.shopify.com/s/files/1/0038/6049/6433/files/image_26.png?v=1663618998`,
        quote: `Amazing product! I love it!`
    },
    {
        name: `BuzzFeed`,
        src: `https://cdn.shopify.com/s/files/1/0038/6049/6433/files/buzzfeed-white_1_340da2de-9102-413a-af27-fec1086a40eb.png?v=1663619024`,
        quote: `Amazing product! I love it!`
    },
]

let homepageFeaturedInCarouselInterval = setInterval(function () {
    let featuredInDiv = document.querySelector(`[id*=characteristics]`)
    if (!featuredInDiv || typeof $ == "undefined" || !$().slick) return
    clearInterval(homepageFeaturedInCarouselInterval)

    let imagesHtml = ``
    imagesArray.forEach(image => {
        imagesHtml += `<div><div><img src="${image.src}"><div><i>"${image.quote}"</i> -${image.name}</div></div></div>`
    })

    let featuredInCarousel = document.createElement(`div`)
    featuredInCarousel.id = `featuredInCarousel`
    featuredInCarousel.innerHTML = imagesHtml

    featuredInDiv.replaceChildren(featuredInCarousel)

    $(featuredInCarousel).slick({
        arrows: false, // Make sure to test that the arrows are easily clickable and that they aren't wrapped by a link. I.e. if they're wrapped by a link then when you try to click them you'll end up triggering the link instead
        autoplay: true,
        dots: false
    })

}, 250)
