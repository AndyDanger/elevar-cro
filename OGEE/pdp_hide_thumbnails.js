var productGallery = $(".product_gallery")
productGallery.slick('slickUnfilter')
var options = productGallery.get(0).slick.options
options.dots = true
productGallery.slick('unslick')
productGallery.slick(options)
var title = $('.swatch_options .swatch[data-option-name="Color"] input[type="radio"]:checked+.swatch-element').data('title')

if (!title) {
    return
}
productGallery.slick("slickFilter", (function(t, e) {
    return productGallery.slick("slickGoTo", 0),
        $(e).find('[data-title="' + title + '"]').length > 0
}))