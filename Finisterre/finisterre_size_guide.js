var sizeGuideInterval = setInterval(function() {
    var sizeGuide = $('#size-guide')
    if (!sizeGuide.length || $('.sizeGuideTable').length) {
        return
    }
    clearInterval(sizeGuideInterval)

    var imagesObject = [{
        image: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1880411_AW21_winetr_outerwear_377_720x.jpg?v=1633016589',
        headerText: "Men's Tops & Jackets",
        subHeaderText: 'Finisterre Engineered Insulation',
        link: 'https://finisterre.com/collections/mens-outerwear-jackets'
    }, {
        image: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1760364_TRANS_SS21_legware_jumpsuits_062_720x.jpg?v=1609749674',
        headerText: "Men's Bottoms",
        subHeaderText: 'Comfort, Functionality and Sustainability',
        link: 'https://finisterre.com/collections/mens-trousers-and-jeans'
    }, {
        image: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1897166_ABBI_wetsuit_gwithian-119_7c1f63ca-ac91-4606-8e74-3f67ffa8f3a5_720x.jpg?v=1635938611',
        headerText: "Men's Wetsuits",
        subHeaderText: 'Plant Based Performance',
        link: 'https://finisterre.com/collections/mens-wetsuits-swimwear'
    }, {
        image: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1879674_AW21_winetr_outerwear_30_1c9ced3c-a851-47fd-ba12-448ff26d6bf4_720x.jpg?v=1633014927',
        headerText: "Women's Tops & Jackets",
        subHeaderText: 'Finisterre Engineered Insulation',
        link: 'https://finisterre.com/collections/womens-outerwear'
    }, {
        image: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1887252_AW21_lifestyle_winter_legwear095_58c7e734-14d2-4f58-b80c-b61ab71f737c_720x.jpg?v=1634304647',
        headerText: "Women's Bottoms",
        subHeaderText: 'Comfort, Functionality and Sustainability',
        link: 'https://finisterre.com/collections/womens-trousers-shorts'
    }, {
        image: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1897171_ABBI_wetsuit_gwithian-121_67e4f57c-d3d2-4a09-924c-2b4ce474a074_720x.jpg?v=1635937851',
        headerText: "Women's Wetsuits ",
        subHeaderText: 'Plant Based Performance',
        link: 'https://finisterre.com/collections/womens-swimwear'
    }]
    $('#size-guide table').wrap("<div class='sizeGuideTable'></div>")
    $('.sizeGuideTable').append("<div class='sizeGuideImageDiv'><div class='sizeGuideImageWrapper'><div class='sizeGuideHeader'></div><div class='sizeGuideSubHeader'></div><div class='sizeGuideButton'><a>Shop Now</a></div><div class='sizeGuideImage'></div></div></div>")
    document.querySelectorAll('.sizeGuideImageDiv').forEach(function(div, index) {
        $(div).find('.sizeGuideHeader').text(imagesObject[index].headerText)
        $(div).find('.sizeGuideSubHeader').text(imagesObject[index].subHeaderText)
        $(div).find('.sizeGuideImage').css('background-image', "url(" + imagesObject[index].image + ")")
        $(div).find('.sizeGuideButton a').attr('href', imagesObject[index].link)

    })

}, 250)