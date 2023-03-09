window.currentColumns = 'medium'
var firstSwap = setInterval(function () {
    var productsGrid = $(".collection-grid__products");
    if (productsGrid && productsGrid.hasClass('large')) {
        clearInterval(firstSwap)
        swap()
    }
}, 250);


var clickInterval = setInterval(function () {
    var buttons = $('.collection-top__grid-btn')
    if (!buttons) {
        return
    }
    clearInterval(clickInterval)
    buttons.click(function () {
        console.log('clicked')
        var clickedClass = $(this).find('span').text()
        window.currentColumns = clickedClass.replace('Grid view ')
    })
    $('.collection-grid__load-cta').click(function () {
        var loadInterval = setInterval(function () {
            var productsGrid = $(".collection-grid__products")
            if (productsGrid && !productsGrid.hasClass('loading')) {

                clearInterval(loadInterval)
                swap()
            }
        }, 250)
    })


}, 250)

function swap() {
    console.log('swap')
    var productsGrid = $(".collection-grid__products");
    productsGrid.removeClass("large").removeClass("medium").removeClass("small").addClass(window.currentColumns);
    $(".collection-top__grid-options .btn-icon.is-active").removeClass("is-active");
    $(`.icon--grid-view-${window.currentColumns}`).closest('button').addClass('is-active');
}

var buttonsInterval = setInterval(function () {
    var buttons = $(".collection-top__grid-btn");
    if (!buttons.length) {
        return
    }
    clearInterval(buttonsInterval)
    window['ga-disable-UA-65922448-1'] = true;
    buttons[1].click()
    window['ga-disable-UA-65922448-1'] = false;
}, 250);






var columnsInterval = setInterval(function() {
    var productsGrid = $(".collection-grid__products.large");
    if (!productsGrid.length) {
      return;
    }
    clearInterval(columnsInterval);
    productsGrid.removeClass("large").addClass("medium");
    $(".collection-top__grid-options .btn-icon.is-active").removeClass("is-active");
    $('.icon--grid-view-medium').closest('button').addClass('is-active');
}, 250);
document.getElementsByClassName('collection-grid__load-cta')[0].onclick = function(){ 
  var loadInterval = setInterval(function() {
     console.log('interval');
  var productsGrid = $(".collection-grid__products.large");
  if (!productsGrid.length) {
      return;
    }
    clearInterval(loadInterval);
    setTimeout(function(){productsGrid.removeClass("large").addClass("medium");
    $(".collection-top__grid-options .btn-icon.is-active").removeClass("is-active");
    $('.icon--grid-view-medium').closest('button').addClass('is-active');
}, 250);
}, 250);
};