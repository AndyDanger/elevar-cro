let flickityScript = document.createElement('script');
flickityScript.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
document.head.appendChild(flickityScript);

let cssElement = document.createElement("link");
cssElement.setAttribute("rel", "stylesheet");
cssElement.setAttribute("type", "text/css");
cssElement.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(cssElement);

let plpCarouselLinks = setInterval(() => {
    let plpContainer = document.querySelector(`#plp`)
    if (!plpContainer || typeof Flickity == `undefined`) return
    clearInterval(plpCarouselLinks)

    let carousel = document.createElement(`div`)
    carousel.className = `plpCarouselDiv`
    carousel.innerHTML = `
        <div class="plpCarouselHeader">More From CUUP</div>
        <div class="plpCarousel">
            <a class="carousel-cell" href='https://shopcuup.com/collections/highwaists'><div class="plpCarouselWrapper"><img class="plpCarouselImage" src='https://i.imgur.com/IXk6p7N.jpg' /><div class="plpCarouselShopNow">SHOP NOW</div></div><div class="plpCarouselDescription product-card__title">The Highwaist Collection. High rise, cheeky coverage.</div></a>
            <a class="carousel-cell" href='https://shopcuup.com/collections/briefs'><div class="plpCarouselWrapper"><img class="plpCarouselImage" src='https://i.imgur.com/Xi5Mvqg.jpg' /><div class="plpCarouselShopNow">SHOP NOW</div></div><div class="plpCarouselDescription product-card__title">The Brief Collection. Mid rise, fuller coverage.</div></a>
            <a class="carousel-cell" href='https://shopcuup.com/collections/bikinis'><div class="plpCarouselWrapper"><img class="plpCarouselImage" src='https://i.imgur.com/8tGLxED.jpg' /><div class="plpCarouselShopNow">SHOP NOW</div></div><div class="plpCarouselDescription product-card__title">The Bikini Collection. Mid rise, cheeky coverage.</div></a>
            <a class="carousel-cell" href='https://shopcuup.com/collections/thongs'><div class="plpCarouselWrapper"><img class="plpCarouselImage" src='https://i.imgur.com/naTDxyJ.jpg' /><div class="plpCarouselShopNow">SHOP NOW</div></div><div class="plpCarouselDescription product-card__title">The Thong Collection. Mid to high rise, minimal coverage.</div></a>
        </div>
    `
    plpContainer.append(carousel)
    let flkty = new Flickity(document.querySelector(`.plpCarousel`), {
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false
    })
}, 250)