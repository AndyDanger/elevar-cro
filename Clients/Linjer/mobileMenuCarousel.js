var script = document.createElement('script');
script.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
document.head.appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://unpkg.com/flickity@2/dist/flickity.min.css");
document.getElementsByTagName("head")[0].appendChild(element);

var mobileMenuInterval = setInterval(function () {
    var navItems = document.querySelectorAll('.main-menu--expanded .nav--mobile .nav__item')
    if (!$().flickity || !navItems.length) {
        return
    }
    clearInterval(mobileMenuInterval)
    // do something with buttons
    var bottomLinks = $('.nav--mobile .nav__item--about, .nav--mobile .nav__item--blog, #ariaHamburger > .nav__item--sustainability, .nav--mobile #ariaHamburger > li:not([class])')
    bottomLinks.addClass('originalLinks')
    var clones = bottomLinks.clone()
    clones.addClass('bottomLinks').removeClass('originalLinks')
    clones.appendTo('#ariaHamburger')
    clones.wrapAll("<div id='mobileMenuFooterWrapper' />")

    $('.nav__item--about.bottomLinks a').on('click', function() {
        $('.nav__item--about.originalLinks a').click()
    })


    $('.nav--mobile .nav__item--gifts > a > .nav__link__text').text('Gift Guides')
    var carouselDiv = document.createElement('div')
    carouselDiv.id = "mobileMenuCarouselDiv"
    carouselDiv.innerHTML = `
        <div>Featured</div>
        <div class="main-carousel">
            <a class="carousel-cell" href="/collections/jewelry"><img src="https://i.imgur.com/UPfSJ7O.png" /></a>
            <a class="carousel-cell" href="/collections/rings"><img src="https://i.imgur.com/MMSmLbu.png" /></a>
            <a class="carousel-cell" href="/collections/new-arrivals"><img src="https://i.imgur.com/jtrgovl.png" /></a>
        </div>
        `

    document.querySelector('#ariaHamburger').insertBefore(carouselDiv, document.querySelector('#mobileMenuFooterWrapper'))
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        freeScroll: true,
        contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: true
    });

}, 250)