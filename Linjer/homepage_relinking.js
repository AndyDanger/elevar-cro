var jsonObject = [{
    image: 'https://i.imgur.com/hiKKQs2.png',
    text: 'Gemstones Galore',
    link: 'https://www.linjer.co/collections/gemstones'
}, {
    image: 'https://i.imgur.com/lKgGE92.jpg',
    text: 'Dainty & Understated',
    link: 'https://www.linjer.co/collections/dainty-jewelry'
}, {
    image: 'https://i.imgur.com/O7R1voM.png',
    text: 'Pretty in Pearls',
    link: 'https://www.linjer.co/collections/pearls'
}, {
    image: 'https://i.imgur.com/pX8W1xt.png',
    text: 'Personalized to You',
    link: 'https://www.linjer.co/collections/personalized-jewelry'
}, {
    image: 'https://cdn.shopify.com/s/files/1/0757/9123/files/ilse-ring-lbt-540_180x.jpg?v=1637732947',
    text: 'Rings',
    link: 'https://www.linjer.co/collections/rings'
}, {
    image: 'https://cdn.shopify.com/s/files/1/0757/9123/files/kirsten-pearl-huggies_180x.jpg?v=1626852878',
    text: 'Earrings',
    link: 'https://www.linjer.co/collections/earrings'
}, {
    image: 'https://cdn.shopify.com/s/files/1/0757/9123/files/necklaces-bp_180x.jpg?v=1626852872',
    text: 'Necklaces',
    link: 'https://www.linjer.co/collections/necklaces'
}, {
    image: 'https://cdn.shopify.com/s/files/1/0757/9123/files/bracelets-category_180x.jpg?v=1626852866',
    text: 'Bracelets',
    link: 'https://www.linjer.co/collections/bracelets'
}, ]

var homepageRelinkingInterval = setInterval(function() {
    var items = document.querySelectorAll('.section-image-grid .slick-track .product-grid-item')
    console.log('running')
    if (!items.length || !items[0].querySelector('div.grid__image').style.backgroundImage) {
        return
    }
    console.log('DONE')
    clearInterval(homepageRelinkingInterval)
    items.forEach(function(item, index) {
        var json = jsonObject[index]
        item.querySelector('h4.grid__title').innerText = json.text
        item.querySelector('.grid__header a.grid__link').href = json.link
        item.querySelector('.grid__body a.grid__link').href = json.link
        item.querySelector('div.grid__image').style.backgroundImage = `url(${json.image})`
    })
}, 250)