let swiperScript = document.createElement('script')
swiperScript.type = "text/javascript"
swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'
document.getElementsByTagName('head')[0].appendChild(swiperScript)

let swiperJson = [
    {
        image: `https://cdn.shopify.com/s/files/1/0819/9793/products/yellowfolded2-32_350x_crop_center@2x.progressive.jpg?v=1600123849`,
        title: `Sunrise Towel`,
        price: `$48`,
        link: `https://www.sandcloud.com/products/sunrise-towel`
    },
    {
        image: `https://cdn.shopify.com/s/files/1/0819/9793/products/image_d0bde5db-f754-41df-9e01-da226d94f612_350x_crop_center@2x.progressive.jpg?v=1624316858`,
        title: `Whale Shark XL Turqoise`,
        price: `$78`,
        link: `https://www.sandcloud.com/products/whale-shark-xl-towel-turquoise`
    }, {
        image: `https://cdn.shopify.com/s/files/1/0819/9793/products/honeybohogypsyxl_350x_crop_center@2x.progressive.jpg?v=1589928144`,
        title: `Boho Honey XL`,
        price: `$78`,
        link: `https://www.sandcloud.com/products/boho-gypsy-xl-towel-honey `
    }, {
        image: `https://cdn.shopify.com/s/files/1/0819/9793/products/DIF22TOW027NVYRGMickeyElementMandala-NavyFront_600x750_43cf5167-7f4b-4193-8e9b-8df9e75d4702_350x_crop_center@2x.progressive.jpg?v=1660768876`,
        title: `Disney Mickey Element Mandala`,
        price: `$52`,
        link: `https://www.sandcloud.com/products/mickey-element-mandala`
    }
]

let swiperSettings = {
    "init": true,
    "direction": "horizontal",
    "touchEventsTarget": "container",
    "initialSlide": 0,
    "speed": 300,
    "cssMode": false,
    "updateOnWindowResize": true,
    "resizeObserver": false,
    "nested": false,
    "createElements": false,
    "enabled": true,
    "focusableElements": "input, select, option, textarea, button, video, label",
    "width": null,
    "height": null,
    "preventInteractionOnTransition": false,
    "userAgent": null,
    "url": null,
    "edgeSwipeDetection": false,
    "edgeSwipeThreshold": 20,
    "freeMode": false,
    "freeModeMomentum": true,
    "freeModeMomentumRatio": 1,
    "freeModeMomentumBounce": true,
    "freeModeMomentumBounceRatio": 1,
    "freeModeMomentumVelocityRatio": 1,
    "freeModeSticky": false,
    "freeModeMinimumVelocity": 0.02,
    "autoHeight": false,
    "setWrapperSize": true,
    "virtualTranslate": false,
    "effect": "slide",
    "breakpoints": {
        "300": {
            "spaceBetween": 20,
            "slidesPerView": "auto",
            "slidesOffsetBefore": 10,
            "slidesOffsetAfter": 10,
            "slidesPerGroup": 1,
            "slidesPerGroupAuto": true,
            "centeredSlides": false,
            "centeredSlidesBounds": false,
            "centerInsufficientSlides": true,
        },
        "480": {
            "spaceBetween": 20,
            "slidesPerView": "auto",
            "slidesOffsetBefore": 10,
            "slidesOffsetAfter": 10,
            "slidesPerGroup": 1,
            "slidesPerGroupAuto": true,
            "centeredSlides": false,
            "centeredSlidesBounds": false,
            "centerInsufficientSlides": true,
        },
        "600": {
            "spaceBetween": 20,
            "slidesPerView": "auto",
            "slidesOffsetBefore": 10,
            "slidesOffsetAfter": 10,
            "slidesPerGroup": 1,
            "slidesPerGroupAuto": true,
            "centeredSlides": false,
            "centeredSlidesBounds": false,
            "centerInsufficientSlides": true,
        },
        "768": {
            "spaceBetween": 20,
            "slidesPerView": "auto",
            "slidesOffsetBefore": 10,
            "slidesOffsetAfter": 10,
            "slidesPerGroup": 1,
            "slidesPerGroupAuto": true,
            "centeredSlides": false,
            "centeredSlidesBounds": false,
            "centerInsufficientSlides": true,
        },
        "1024": {
            "spaceBetween": 20,
            "slidesPerView": "auto",
            "slidesOffsetBefore": 10,
            "slidesOffsetAfter": 10,
            "slidesPerGroup": 1,
            "slidesPerGroupAuto": true,
            "centeredSlides": false,
            "centeredSlidesBounds": false,
            "centerInsufficientSlides": true,
        },
        "1280": {
            "spaceBetween": 20,
            "slidesPerView": "auto",
            "slidesOffsetBefore": 10,
            "slidesOffsetAfter": 10,
            "slidesPerGroup": 1,
            "slidesPerGroupAuto": true,
            "centeredSlides": false,
            "centeredSlidesBounds": false,
            "centerInsufficientSlides": true,
        }
    },
    "breakpointsBase": "container",
    "spaceBetween": 20,
    "slidesPerView": 1.6,
    "slidesPerColumn": 1,
    "slidesPerColumnFill": "row",
    "slidesPerGroup": 1,
    "slidesPerGroupSkip": 0,
    "centeredSlides": true,
    "centeredSlidesBounds": true,
    "slidesOffsetBefore": 20,
    "slidesOffsetAfter": 20,
    "normalizeSlideIndex": true,
    "centerInsufficientSlides": false,
    "watchOverflow": false,
    "roundLengths": false,
    "touchRatio": 1,
    "touchAngle": 45,
    "simulateTouch": true,
    "shortSwipes": true,
    "longSwipes": true,
    "longSwipesRatio": 0.5,
    "longSwipesMs": 300,
    "followFinger": true,
    "allowTouchMove": true,
    "threshold": 0,
    "touchMoveStopPropagation": false,
    "touchStartPreventDefault": true,
    "touchStartForcePreventDefault": false,
    "touchReleaseOnEdges": false,
    "uniqueNavElements": true,
    "resistance": true,
    "resistanceRatio": 0.85,
    "watchSlidesProgress": false,
    "watchSlidesVisibility": false,
    "grabCursor": false,
    "preventClicks": true,
    "preventClicksPropagation": true,
    "slideToClickedSlide": false,
    "preloadImages": true,
    "updateOnImagesReady": true,
    "loop": false,
    "loopAdditionalSlides": 0,
    "loopedSlides": null,
    "loopFillGroupWithBlank": false,
    "loopPreventsSlide": true,
    "allowSlidePrev": true,
    "allowSlideNext": true,
    "swipeHandler": null,
    "noSwiping": true,
    "noSwipingClass": "swiper-no-swiping",
    "noSwipingSelector": null,
    "passiveListeners": true,
    "containerModifierClass": "swiper-container-",
    "slideClass": "swiper-slide",
    "slideBlankClass": "swiper-slide-invisible-blank",
    "slideActiveClass": "swiper-slide-active",
    "slideDuplicateActiveClass": "swiper-slide-duplicate-active",
    "slideVisibleClass": "swiper-slide-visible",
    "slideDuplicateClass": "swiper-slide-duplicate",
    "slideNextClass": "swiper-slide-next",
    "slideDuplicateNextClass": "swiper-slide-duplicate-next",
    "slidePrevClass": "swiper-slide-prev",
    "slideDuplicatePrevClass": "swiper-slide-duplicate-prev",
    "wrapperClass": "swiper-wrapper",
    "runCallbacksOnInit": true,
    "_emitClasses": true,
    "observer": false,
    "observeParents": false,
    "observeSlideChildren": false,
    "fadeEffect": {
        "crossFade": false
    },
    "autoplay": {
        "enabled": false,
        "delay": 3000,
        "waitForTransition": true,
        "disableOnInteraction": true,
        "stopOnLastSlide": false,
        "reverseDirection": false,
        "pauseOnMouseEnter": false
    },
    "navigation": {
        "nextEl": null,
        "prevEl": null,
        "hideOnClick": false,
        "disabledClass": "swiper-button-disabled",
        "hiddenClass": "swiper-button-hidden",
        "lockClass": "swiper-button-lock"
    },
    "pagination": {
        "el": null,
        "bulletElement": "span",
        "clickable": false,
        "hideOnClick": false,
        "renderBullet": null,
        "renderProgressbar": null,
        "renderFraction": null,
        "renderCustom": null,
        "progressbarOpposite": false,
        "type": "bullets",
        "dynamicBullets": false,
        "dynamicMainBullets": 1,
        "bulletClass": "swiper-pagination-bullet",
        "bulletActiveClass": "swiper-pagination-bullet-active",
        "modifierClass": "swiper-pagination-",
        "currentClass": "swiper-pagination-current",
        "totalClass": "swiper-pagination-total",
        "hiddenClass": "swiper-pagination-hidden",
        "progressbarFillClass": "swiper-pagination-progressbar-fill",
        "progressbarOppositeClass": "swiper-pagination-progressbar-opposite",
        "clickableClass": "swiper-pagination-clickable",
        "lockClass": "swiper-pagination-lock"
    },
    "a11y": {
        "enabled": true,
        "notificationClass": "swiper-notification",
        "prevSlideMessage": "Previous slide",
        "nextSlideMessage": "Next slide",
        "firstSlideMessage": "This is the first slide",
        "lastSlideMessage": "This is the last slide",
        "paginationBulletMessage": "Go to slide {{index}}",
        "slideLabelMessage": "{{index}} / {{slidesLength}}",
        "containerMessage": null,
        "containerRoleDescriptionMessage": null,
        "itemRoleDescriptionMessage": null,
        "slideRole": "group"
    },
    "on": {}
}

let cartSwiperInterval = setInterval(() => {
    let emptyCart = document.querySelector(`[data-comp="Sidebar"] [data-comp="Empty"]`)
    if (!emptyCart || !Swiper || document.querySelector(`#emptyCartSwiperContainer`) || document.querySelector(`#emptyCartCategoriesContainer`)) {
        return
    }
    // clearInterval(cartSwiperInterval)
    if (window.location.href.includes(`v2`)) {
        v2(emptyCart)
        return
    }
    let emptyCartSwiperContainer = document.createElement(`div`)
    emptyCartSwiperContainer.id = `emptyCartSwiperContainer`
    emptyCartSwiperContainer.className = `swiper-container`
    let html = ``
    swiperJson.forEach(item => {
        let itemHtml = `
            <div class="swiper-slide">
                <a href="${item.link}">
                    <img src="${item.image}" />
                    <div>${item.title}</div>
                    <div>${item.price}</div>
                    <button>Shop Now</button>
                </a>
            </div>
        `
        html += (itemHtml)
    })

    emptyCartSwiperContainer.innerHTML = `<div class="swiper-wrapper">${html}</div>`

    emptyCart.append(emptyCartSwiperContainer)
    let emptyCartSwiper = new Swiper('#emptyCartSwiperContainer', swiperSettings)
}, 250)


function v2 (emptyCart) {
    let emptyCartCategoriesContainer = document.createElement(`div`)
    emptyCartCategoriesContainer.id = `emptyCartCategoriesContainer`
    emptyCartCategoriesContainer.innerHTML = `
        <a href="/collections/towels">Shop All Towels</a>
        <a href="/collections/bundle-packs">Shop Bundles</a>
        <a href="/collections/bath-towels">Shop Bath</a>
        <a href="/collections/kitchen">Shop Kitchen</a>
    `
    emptyCart.append(emptyCartCategoriesContainer)

}