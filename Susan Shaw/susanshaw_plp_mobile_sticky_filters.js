var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);

var stickyFilterInterval = setInterval(function() {
    if (window.toggleImages) {
        $('.product_image').addClass('toggle-images')
    } else {
        $('.product_image').removeClass('toggle-images')
    }
    if ($('.coll_sidebar').css('display') == 'none') {
        $('#filtersWrapper').removeClass('expanded')
        $('#filtersIcon').addClass('fa-sliders-h')
        $('#filtersIcon').removeClass('fa-times')

        return
    }
    $('#filtersWrapper').addClass('expanded')
    $('#filtersIcon').addClass('fa-times')
    $('#filtersIcon').removeClass('fa-sliders-h')
}, 200)

$(document).ready(function() {

    $('.section_select').closest('div.container').find('.sixteen, .section_select').wrapAll('<div id="filtersWrapper"></div>')
    $('<i id="filtersIcon" class="fas fa-sliders-h"></i>').insertBefore('.fliters')
    $('.sort_by').insertBefore('.fil_text ')
    $('.section_select ').append('<div id="omiDiv"><div id="productView" class="viewActive">Product View</div><div id="omiView">On Model View</div></div>')

    $('#productView').click(function() {
        window.toggleImages = false
        $('.product_image').removeClass('toggle-images')
        $('#productView').addClass('viewActive')
        $('#omiView').removeClass('viewActive')
    })

    $('#omiView').click(function() {
        window.toggleImages = true
        $('.product_image').addClass('toggle-images')
        $('#omiView').addClass('viewActive')
        $('#productView').removeClass('viewActive')
    })

    $('#filtersIcon').click(function() {
        $('.coll_sidebar').toggle()
    })
    $(window).scroll(function(e) {
        var $el = $('#filtersWrapper');
        var isPositionFixed = ($el.css('position') == 'fixed');
        if ($(this).scrollTop() > 200 && !isPositionFixed) {
            $el.addClass('fixed')
        }
        if ($(this).scrollTop() < 200 && isPositionFixed) {
            $el.removeClass('fixed')
        }
    });
})