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

]

let control = () => {

}

let variant1 = () => {

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
}

let variant2 = () => {

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
                            <div class="subCategoriesCarouselHeader">${item.header}</div>
                        </a>
                        `
    }, ``)}
                    </div>
            `

    thing.parentElement.insertBefore(subCategoriesCarousel, thing)

    let swiper = new Swiper(`.subCategoriesCarousel`, {
        slidesPerView: "auto",
        spaceBetween: 15,
        freeMode: true,
        breakpoints: {
            // when window width is >= 320px
            768: {
                // slidesPerView: 3.35,
                spaceBetween: 20
            },
            1024: {
                // slidesPerView: array.length,
                spaceBetween: 20
            },
        }
    })
}

let variant3 = () => {

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
}

let variants = [control, variant1, variant2, variant3]

let main = () => {
    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`test_variant`)
    if (variant) {
        setCookie(`test_variant`, variant, 7)
    }
    let storageVariant = getCookie(`test_variant`) || 1 // default to variant 1
    document.body.classList.add(`test_variant_${storageVariant}`)

    let svg = `<svg class="logo" data-name="Layer 1" style="fill: white;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1232.87 260"><title>elevar-logo</title><path d="M132,0V.07A93.26,93.26,0,0,0,40.35,76a120,120,0,0,0-1.61,22.33v81.2c0,6.81.08,13.6-.94,20.36-2.12,14.05-8.12,28.43-19.38,37.59A35.39,35.39,0,0,1,2,245.06c-.33.05-1.74,0-1.93.27s0,.47,0,.57A29.46,29.46,0,0,0,0,249v11a92.71,92.71,0,0,0,45.63-12.22c13.86-7.91,25.65-19.59,32.66-34a71.76,71.76,0,0,0,7-27.24,93.48,93.48,0,0,1-27.12-4,93.29,93.29,0,0,0,56-35.22A90.79,90.79,0,0,0,132,93.07q0-12.41,0-24.82V26.41H262.22L274.18,0ZM85.36,142.21A10.19,10.19,0,1,1,95.54,132,10.19,10.19,0,0,1,85.36,142.21Z"></path><polygon points="802.17 27.33 771.59 27.33 831.41 159.35 838.32 159.35 862 159.35 869.04 159.35 928.87 27.33 898.14 27.33 850.16 133.23 802.17 27.33"></polygon><polygon points="501.62 132.95 501.62 159.35 609.56 159.35 609.56 132.95 528.02 132.95 528.02 27.33 501.62 27.33 501.62 132.95"></polygon><polygon points="462.01 132.95 379.81 132.95 379.81 106.55 462.01 106.55 462.01 80.14 379.81 80.14 379.81 53.73 462.01 53.73 462.01 27.33 353.4 27.33 353.4 53.73 353.4 80.14 353.4 106.55 353.4 132.95 353.4 159.35 462.01 159.35 462.01 132.95"></polygon><path d="M1001,53.45,1025,106.55H976.93Zm18-26.12H982.95l-59.82,132H953L965,133h72l12,26.4h29.88Z"></path><polygon points="636.58 27.33 636.58 159.35 636.58 159.35 745.19 159.35 745.19 132.95 662.98 132.95 662.98 106.55 745.19 106.55 745.19 80.14 662.98 80.14 662.98 53.73 745.19 53.73 745.19 27.33 636.58 27.33"></polygon><path d="M1193.26,53.74h-61V80.14h61a13.2,13.2,0,1,0,0-26.41m0-26.41a39.59,39.59,0,0,1,14.43,76.46l25.18,55.56H1203l-23.93-52.81h-46.8v52.81h-26.41v-132h87.4"></path><path d="M138.16,158.43A87.92,87.92,0,0,1,93.65,184.8l0,0h67.83a45,45,0,0,0,41-26.41Z"></path><path d="M158.12,105.62A87.5,87.5,0,0,1,152,132h62.31l12-26.41Z"></path><polygon points="158.38 52.81 158.38 79.22 238.29 79.22 250.26 52.81 158.38 52.81"></polygon></svg>`
    const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`

    let styles = [
        `color: white`,
        `background-color:#6354eb`,
        `background-image: url(${svgDataUrl})`,
        `font-size: 28px`,
        `margin: 0px auto`,
        `padding: 110px 10px 10px 10px`,
        `text-align: center`,
        `line-height: -40px`,
        `background-size: contain`,
        `background-position: center top`,
        `background-repeat: no-repeat`,
    ]

    console.log(`%c Debugging Preview Link: Variant ${storageVariant}`, styles.join(`;`))
    variants[storageVariant]() // call the variant's function
}

let setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

let getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

main()

