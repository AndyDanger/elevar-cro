let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)

    if (!window.slickScriptAdded) {
        window.slickScriptAdded = true

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

    }

    let slickInterval = setInterval(() => {
        let thumbnailsWrapper = document.querySelector(`[data-comp="ProductImagesThumbs"]`)
        if (!thumbnailsWrapper || typeof jQuery == `undefined` || !$().slick) return

        let thumbnails = document.querySelectorAll(`[data-comp="ProductImageThumb"]`)
        thumbnails.forEach(thumbnail => {
            $(thumbnail).wrap(`<div class='thumbnailWrapper'></div>`)
        })


        clearInterval(slickInterval)
        $(thumbnailsWrapper).slick({
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 5,
            vertical: true,
            verticalSwiping: true
        });

    }, 250)
}

let variant2 = () => {
    console.log(`variant2`)
    let desktopPDPGridInterval = setInterval(() => {
        let swiper = document.querySelector(`[data-comp="ProductTemplate"] [data-comp="Main"]:not(.swiper-destroyed) .swiper-container`)
        if (!swiper) return
        document.querySelector(`[data-comp="ProductTemplate"] [data-comp="Main"]`).classList.add(`swiper-destroyed`)
        swiper.swiper.destroy(false, false)

        swiper.querySelectorAll(`.swiper-slide`).forEach((slide, index) => {
            if (index < 6) return
            slide.classList.add(`hidden`)
        })

        // let loadMoreButton = document.createElement('button')
        // loadMoreButton.className = "loadMoreButton"
        // loadMoreButton.innerText = "Load More"
        // swiper.append(loadMoreButton)
        // loadMoreButton.addEventListener('click', function () {
        //     loadMoreButton.remove()
        //     document.querySelectorAll(`.hidden`).forEach((slide) => {
        //         slide.classList.remove(`hidden`)
        //     })
        //     let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-59546458-1')
        //     if (tracker) {
        //         tracker.send('event', 'product page', 'load more images button click', window.location.href)
        //     }
        // })
    }, 250)
}

let variant3 = () => {
    console.log(`variant3`)
}

let variants = [control, variant1, variant2, variant3]

let main = () => {
    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`test_variant`)
    if (variant) {
        sessionStorage.setItem(`test_variant`, variant)
    }
    let storageVariant = sessionStorage.getItem(`test_variant`) || 1 // default to variant 1
    variants[storageVariant]() // call the variant's function
}

main()