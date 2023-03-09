var pdpUpsellInterval = setInterval(function() {
    var upsellLinks = document.querySelectorAll('.upsellTitle a')
    if (!upsellLinks.length) {
        return
    }
    clearInterval(pdpUpsellInterval)

    window.upsellProducts = []
    var prices = document.querySelectorAll('.ufe-price')
    upsellLinks.forEach(function(link, index) {
        fetch(link.href + '.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(json => {
                window.upsellProducts.push(json)
                $(prices[index]).after(`<button index='${index}' type="button" class="btn qv-btn btn-default">View Details</button>`);
                $(`.qv-btn[index="${index}"]`).click(function() {
                    $('#slideout').toggleClass('on');
                    var product = window.upsellProducts[this.getAttribute('index')].product
                    $('#slideout .title').text(product.title)
                    var imagesHTML = ''
                    product.images.forEach(function(image) {
                        imagesHTML += `<img src="${image.src}" />`
                    })
                    $('.gallery').attr('class', 'gallery')
                    $('.gallery').html(imagesHTML)
                    $('.gallery').slick({
                        dots: true,
                        arrows: false,
                        slidesToShow: 1,
                    });

                    $('#slideout .price').text('$' + product.variants[0].price)
                    $('#slideout .desc').html(product.body_html)
                })
            })
            .catch(function() {
                window.dataError = true;
            })
    })

    $('.overlay-quickview').click(function() {
        $('#slideout').removeClass('on');
    });

}, 400);