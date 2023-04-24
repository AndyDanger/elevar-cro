window.pageSize = 40
var productsSelector = '.product-grid-item'

function totalPages() {
    return Math.ceil($(productsSelector).length / 40)
}

function changePage(pageNumber) {
    window.currentPage = pageNumber
    window.location.hash = pageNumber
    $('#middleDiv').text(`${window.currentPage} of ${totalPages()}`)
    var products = $(productsSelector)
    products.hide();
    products.each(function(product) {
        if (product >= pageSize * (pageNumber - 1) && product < pageSize * pageNumber)
            $(this).show();
    });
    $('html, body').animate({
        scrollTop: 0,
        duration: 600
    })
}

var plpPaginationInterval = setInterval(function() {
    var products = $(productsSelector)
    if (!products.length) {
        return
    }
    clearInterval(plpPaginationInterval)
    window.currentPage = parseInt(window.location.hash.replace('#', '')) || 1
    changePage(window.currentPage)

    // insert controls
    var controls = document.querySelector('#paginationWrapper') || document.createElement('div')
    controls.id = "paginationWrapper"
    controls.innerHTML = `<div id="leftDiv">< Back</div><div id="middleDiv">${window.currentPage} of ${totalPages()}</div><div id="rightDiv">Next ></div>`
    $('.collection__body').append(controls)
    $('#leftDiv').on('click', function() {
        window.currentPage > 1 ? changePage(window.currentPage - 1) : null
    })

    $('#rightDiv').on('click', function() {
        window.currentPage < totalPages() ? changePage(window.currentPage + 1) : null
    })

}, 250)