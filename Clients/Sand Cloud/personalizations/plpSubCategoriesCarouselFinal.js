let plpSubCategoriesCarouselInterval = setInterval(() => {

    if (!window.swiperScriptAdded) {
        window.swiperScriptAdded = true

        let jqueryScript = document.createElement('script');
        jqueryScript.type = "text/javascript";
        jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        document.getElementsByTagName('head')[0].appendChild(jqueryScript);

        let swiperScript = document.createElement('script')
        swiperScript.type = "text/javascript"
        swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'
        document.getElementsByTagName('head')[0].appendChild(swiperScript)

        let swiperCss = document.createElement("link");
        swiperCss.setAttribute("rel", "stylesheet");
        swiperCss.setAttribute("type", "text/css");
        swiperCss.setAttribute("href", "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css");
        document.getElementsByTagName("head")[0].appendChild(swiperCss);

    }

    let towelsArray = [
        {
            href: `https://www.sandcloud.com/collections/party-blankets`,
            img: `https://i.imgur.com/Qyc7XQkl.jpg`,
            header: `Party Blankets`,
            description: `The biggest of the bunch.`
        },
        {
            href: `https://www.sandcloud.com/collections/marine-life-towels`,
            img: `https://imgur.com/uKfYiMIl.jpg`,
            header: `Marine Life`,
            description: `Turtles and penguins and whales, oh my!`
        },
        {
            href: `https://www.sandcloud.com/collections/xl-towels`,
            img: `https://i.imgur.com/s5SSR77l.jpg`,
            header: `XL Towels`,
            description: `Towels large enough for two.`
        },
        {
            href: `https://www.sandcloud.com/collections/new-products`,
            img: `https://i.imgur.com/UJ7Z6Hjl.jpg`,
            header: `New Releases`,
            description: `Featuring new drops every week.`
        },
        {
            href: `https://www.sandcloud.com/collections/collabs-sandcloud`,
            img: `https://i.imgur.com/rEptB8gl.jpg`,
            header: `Best Sellers`,
            description: `Fan favorites that stand the test of time.`
        },

    ]

    let bathArray = [
        {
            href: `https://www.sandcloud.com/collections/bath-bundles`,
            img: `https://i.imgur.com/OliHt83l.jpg`,
            header: `Bath Bundles`,
            description: `Create your own at-home spa.`
        },
        {
            href: `https://www.sandcloud.com/collections/bath-robes`,
            img: `https://i.imgur.com/alTZJgzl.jpg`,
            header: `Robes`,
            description: `Wrap yourself in luxury.`
        },
        {
            href: `https://www.sandcloud.com/collections/hand-towels`,
            img: `https://i.imgur.com/xyYSYSHl.jpg`,
            header: `Hand Towels`,
            description: `Freshen up with quick-drying essentials.`
        },
        {
            href: `https://www.sandcloud.com/collections/hair-towels`,
            img: `https://i.imgur.com/g5urUfal.jpg`,
            header: `Hair Towels`,
            description: `One best-seller, multiple colorways.`
        },
        {
            href: `https://www.sandcloud.com/collections/washcloths-1`,
            img: `https://i.imgur.com/rJCZYnsl.jpg`,
            header: `Washcloths`,
            description: `Elevate your daily routine.`
        },
        {
            href: `https://www.sandcloud.com/collections/pantone`,
            img: `https://i.imgur.com/CozT4Xcl.jpg`,
            header: `Sand Cloud | Pantone`,
            description: `Paint your space your way.`
        },

    ]

    let newReleasesArray = [
        {
            href: `https://www.sandcloud.com/collections/disney-sand-cloud-kids`,
            img: `https://i.imgur.com/gGiSnQkl.jpg`,
            header: `Disney | Sand Cloud Kids`,
            description: `Ready, set, PLAY!`
        },
        {
            href: `https://www.sandcloud.com/collections/star-wars-x-sand-cloud`,
            img: `https://i.imgur.com/JmxtVwrl.jpg`,
            header: `Star Wars | Sand Cloud`,
            description: `Inspired by a galaxy far, far away...`
        },
        {
            href: `https://www.sandcloud.com/collections/willow-bath-collection`,
            img: `https://i.imgur.com/bqWjZ6vl.jpg`,
            header: `Willow Bath Collection`,
            description: `Create your own at-home spa.`
        },
        {
            href: `https://www.sandcloud.com/collections/spring-into-summer`,
            img: `https://i.imgur.com/DE8kbmWl.jpg`,
            header: `Spring into Summer`,
            description: `You're invited to a Sand Cloud pool party.`
        },
        {
            href: `https://www.sandcloud.com/collections/color-splash`,
            img: `https://i.imgur.com/bWEgq3tl.jpg`,
            header: `Color Splash`,
            description: `Inspired by summer, for summer.`
        },

    ]

    let thing = document.querySelector(`[data-comp="collectionSubNav"]`)
    if (document.querySelector(`.subCategoriesCarousel`) || !thing || typeof Swiper != "function") return

    let [title, array] = window.location.href.includes(`bath`) ? [`BATH`, bathArray] : window.location.href.includes(`new`) ? [`NEW RELEASES`, newReleasesArray] : [`TOWELS`, towelsArray]

    let subCategoriesCarousel = document.createElement(`div`)
    subCategoriesCarousel.className = `swiper subCategoriesCarousel`
    subCategoriesCarousel.innerHTML = `
                    <div class="subCategoriesCarouselTitle">${title}</div>
                    <div class="swiper-wrapper">
                    ${array.reduce((html, item) => {
        return html += `
                        <a class="swiper-slide" href="${item.href}">
                            <img width="400" height="600" src="${item.img}" />
                            <div class="subCategoriesCarouselHeader">${item.header}</div>
                            <div class="subCategoriesCarouselDescription">${item.description}</div>
                        </a>
                        `
    }, ``)}
                    </div>
            `

    thing.parentElement.insertBefore(subCategoriesCarousel, thing)

    let swiper = new Swiper(`.subCategoriesCarousel`, {
        slidesPerView: 2.15,
        spaceBetween: 10,
        freeMode: true,
        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 3.35,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: array.length,
                spaceBetween: 20
            },
        }
    })

}, 250)