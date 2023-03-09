var navigationJSON = [{
    text: 'Shop All',
    link: 'https://schoolmaskpack.com/collections/all',
}, {
    text: 'Masks',
    link: 'https://schoolmaskpack.com/collections/masks',
    subLinks: [{
        text: 'Toddlers & Kids',
        link: 'https://schoolmaskpack.com/collections/kids-mask-packs',

    }, {
        text: 'Adults',
        link: 'https://schoolmaskpack.com/collections/adult-mask-packs',

    }, {
        text: 'Disposable Masks',
        link: 'https://schoolmaskpack.com/collections/3-layer-breathable-disposable-masks',

    }, {
        text: 'Filter Masks',
        link: 'https://schoolmaskpack.com/collections/max-filter-collection',

    }, {
        text: 'Bundles',
        link: 'https://schoolmaskpack.com/collections/classpack-bundle',

    }, ]
}, {
    text: 'Accessories',
    link: 'https://schoolmaskpack.com/collections/mask-accessories',
    subLinks: [{
        text: 'Mask Accessories',
        link: 'https://schoolmaskpack.com/collections/maskaccessories',

    }, {
        text: 'Crayola™ Sanitizers',
        link: 'https://schoolmaskpack.com/collections/crayola-hand-sanitizer',

    }]
}, {
    text: 'Clean Shield Kids Shirts',
    link: 'https://schoolmaskpack.com/collections/clean-shield-kids-shirts',
    subLinks: [{
        text: 'T-Shirts',
        link: 'https://schoolmaskpack.com/collections/clean-shield-kids-t-shirts',

    }, {
        text: 'School Uniform Polo Shirts',
        link: 'https://schoolmaskpack.com/collections/clean-shield-kids-polo',

    }, {
        text: 'Long-Sleeve T-Shirt',
        link: 'https://schoolmaskpack.com/collections/clean-shield-kids-long-sleeve-t-shirt',

    }]
}, {
    text: 'Sales',
    link: 'https://schoolmaskpack.com/pages/spring-discount-2022',
}, {
    text: 'FAQ',
    link: 'https://schoolmaskpack.com/pages/faqs',
    subLinks: [{
        text: 'Take Size Quiz',
        link: 'https://schoolmaskpack.com/pages/size-chart',

    }, {
        text: 'How to Wear',
        link: 'https://schoolmaskpack.com/pages/how-to-wear-masks',

    }, {
        text: 'How to Wash',
        link: 'https://schoolmaskpack.com/pages/how-to-care-your-masks',

    }]
}, ]


var navigationReworkInterval = setInterval(function() {
            var navList = document.querySelectorAll('.accessibleNav')
            if (!navList.length) {
                return
            }
            clearInterval(navigationReworkInterval)

            var navHTML = ''
            navigationJSON.forEach(function(object) {
                        navHTML +=
                            `<li class="${object.subLinks ? "parent" : "child"}">
                                <a href="${object.link}" class="nav-link" aria-haspopup="true" aria-expanded="false">${object.text}</a>
                                ${object.subLinks ? '<a href="#" class="nav-carat" aria-haspopup="true" aria-expanded="false"><span class="plus">+</span><span class="minus">-</span></a>' : ""}
                                <div class="main-menu-dropdown">
                                <ul>
                                 ${object.subLinks ? object.subLinks.map(function (subLinks) {
                return `<li class="child ">
                        <a href="${subLinks.link}" class="nav-link" aria-expanded="false">${subLinks.text}</a>
                    </li>`
            }).join('') : ''}
                </ul>
            </div>
        </li>`
    })
    navHTML += document.querySelector('.cart-text-link').outerHTML
    navList[0].innerHTML = navHTML
    navList[1].innerHTML = navHTML

    $(".nav--desktop li.parent").on("mouseenter", function () {
        $(".hover").removeClass('hover')
        $(this).addClass('hover')
    })

    var clickBindingInterval = setInterval(function () {
        var events = jQuery._data($('.nav--mobile .nav-carat')[0], "events");
        if (!events || events.click < 1) {
            return
        }
        console.log('unbound')
        clearInterval(clickBindingInterval)
        $('.nav--mobile .nav-carat').unbind('click')
        $('.nav--mobile .nav-carat').click(function () {
            console.log('clicked')
            $(this).closest('.parent').toggleClass('main-menu--expanded')
        })
    }, 200)

    let throttle = (func, delay) => {
        let prev = Date.now() - delay;
        return (...args) => {
            let current = Date.now();
            if (current - prev >= delay) {
                prev = current;
                func.apply(null, args);
            }
        }
    };
    document.addEventListener('mousemove', throttle(function () {
        var x = event.clientX, y = event.clientY,
            elementMouseIsOver = document.elementFromPoint(x, y);
        if (!$(elementMouseIsOver).closest('.hover').length) {
            $(".hover").removeClass('hover')
        }
    }, 200));

}, 300);