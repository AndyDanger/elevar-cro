window.oldDesktopGrid = 0
window.newDesktopGrid = 5
window.oldMobileGrid = 0
window.newMobileGrid = 4

var gridJSON = {
    2: {
        mobile: true,
        url: 'https://i.imgur.com/8ozPN16.png',
    },
    3: {
        mobile: false,
        url: 'https://i.imgur.com/HB3QOke.png',
    },
    4: {
        mobile: true,
        url: 'https://i.imgur.com/BPl23Ic.png',
    },
    5: {
        mobile: false,
        url: 'https://i.imgur.com/hL6ZWfK.png',
    },
    8: {
        mobile: false,
        url: 'https://i.imgur.com/wnGfFiL.png',
    },
}

var moreProductsInterval = setInterval(function() {
    var sortFilters = document.querySelector('.isp_sorting_and_result_view_wrapper')
    if (!sortFilters || (window.oldDesktopGrid == window.newDesktopGrid && window.oldMobileGrid == window.newMobileGrid)) {
        return
    }
    window.oldDesktopGrid = window.newDesktopGrid
    window.oldMobileGrid = window.newMobileGrid
    var gridFilters = document.querySelector('#gridFilters') || document.createElement('div')
    gridFilters.id = "gridFilters"
    var htmlString = ''
    Object.keys(gridJSON).forEach(function(key) {
        htmlString += `<img data-grid-count=${key} src="${gridJSON[key].url}" selected="${key == window.newDesktopGrid || key == window.newMobileGrid}"/>`
    })
    gridFilters.innerHTML = htmlString
    addNewStyle()

    sortFilters.parentElement.insertBefore(gridFilters, sortFilters)

    $('[data-grid-count="2"], [data-grid-count="4"]').click(function() {
        window.newMobileGrid = this.getAttribute('data-grid-count')
        addNewStyle()
    })

    $('[data-grid-count="3"], [data-grid-count="5"], [data-grid-count="8"]').click(function() {
        window.newDesktopGrid = this.getAttribute('data-grid-count')
        addNewStyle()
    })

}, 250)

function addNewStyle() {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    var eightGrid = window.newDesktopGrid > 5 ? `
    .isp_product_info {
       display: none !important;
    }` : ``
    styleElement.innerHTML = `
        @media only screen and (max-width: 767px) {
           #isp_search_results_container {
               grid-template-columns:${"1fr ".repeat(window.newMobileGrid)} !important;
            }
        }
        @media only screen and (min-width: 768px) {
            #isp_search_results_container {
                grid-template-columns:${"1fr ".repeat(window.newDesktopGrid)} !important;}
                ${eightGrid}
        }`

}