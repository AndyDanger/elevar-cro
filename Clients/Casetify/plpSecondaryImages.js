if (!window.slickScriptLoaded) {
    window.slickScriptLoaded = true
    let slickScript = document.createElement('script');
    slickScript.src = '//cdn.jsdelivr.net/npm/slick-carousel@1.7.1/slick/slick.min.js';
    document.head.appendChild(slickScript);

    let slickCss = document.createElement("link");
    slickCss.setAttribute("rel", "stylesheet");
    slickCss.setAttribute("type", "text/css");
    slickCss.setAttribute("href", "//cdn.jsdelivr.net/npm/slick-carousel@1.7.1/slick/slick.css");
    document.getElementsByTagName("head")[0].appendChild(slickCss);
}

let plpSecondaryImagesInterval = setInterval(() => {
    let productWraps = document.querySelectorAll(`.card:not(.replaced)`)
    let unreplacedBlocks = document.querySelectorAll(`.angledImageAdded.sideImageAdded:not(.slick-slider)`)
    if ((!productWraps.length && !unreplacedBlocks.length) || typeof jQuery == `undefined`) return
    productWraps.forEach(function (productWrap, index) {
        if (!productWrap.querySelector(`a .product-link`)) {
            let details = productWrap.querySelector(`.details`)
            $(details).wrap(`<a href="${productWrap.querySelector(`.product-link`).href}"></a>`)
        }
        let previewImage = productWrap.querySelector(`.preview-image`)
        let previewImageSource = previewImage.src
        let variantIdMatch = previewImageSource.match(/(\d+)\.png/)
        if (!variantIdMatch) return
        productWrap.classList.add(`replaced`)
        let variantId = variantIdMatch[1]
        let angledShotSource = `${previewImageSource.replace(`.png`, `__render8.png`)}`
        let sideShotSource = `https://cdn.casetify.com/img/case/side_color_preview_${variantId}.jpg`
        let block = productWrap.querySelector(`.block`)
        block.innerHTML = `<div><img src="${previewImageSource}" /></div>`

        let angledImage = $("<img />").attr('src', angledShotSource)
            .on('load', function () {
                if (this.className.includes(`angledImageBroken`) || !this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                    // alert('broken image!');
                } else {
                    $(block).append(angledImage)
                }
                block.classList.add(`angledImageAdded`)
            })
            .one(`error`, function () {
                this.classList.add(`angledImageBroken`)
                this.src = `https://cdn-stamplib.casetify.com/cms/image/d175037c3a25fb9011c0488671ce8570.jpg`
            });

        let sideImage = $("<img />").attr('src', sideShotSource)
            .on('load', function () {
                if (this.className.includes(`sideImageBroken`) || !this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                    // alert('broken image!');
                } else {
                    $(block).append(sideImage)
                }
                block.classList.add(`sideImageAdded`)

            })
            .one(`error`, function () {
                this.classList.add(`sideImageBroken`)
                this.src = `https://cdn-stamplib.casetify.com/cms/image/d175037c3a25fb9011c0488671ce8570.jpg`
            })

    })

    unreplacedBlocks.forEach(function (block) {
        $(block).slick({
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            rows: 0
        })
    })

}, 250)