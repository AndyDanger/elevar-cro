var reviews = [{
        "product": 'Tinted Lip Set',
        "sku": 755470,
        "url": 'https://ogee.com/products/daring-darling-gift-set-of-4-tinted-lip-oils',
        "final": '"The colors are beautiful, very long-lasting and make my lips feel soft and smooth." <span>-Joanne K.</span>'
    }, {
        "product": 'Ultimate Color Collection',
        "sku": 755794,
        "url": 'https://ogee.com/products/ultimate-color-collection',
        "final": '"The texture is fabulous, the results are glowy and natural and best of all, everything is versatile. Highly recommend!" <span>-Kelly J.</span>'
    },
    {
        "product": 'Signature Skincare Collection',
        "sku": 755795,
        "url": 'https://ogee.com/products/signature-skincare-collection',
        "final": '"Left my skin feeling fresh, super moisturized, and dewy! Extremely gentle and soft in scent." <span>-Rhiannon K.</span>'
    },
    {
        "product": 'Dew Kit',
        "sku": 755573,
        "url": 'https://ogee.com/products/dew-kit',
        "final": '"Makes my skin feel so nourished while adding just the right amount of glow. I feel smooth and sunkissed." <span>-Emily P.</span>'
    },
    {
        "product": 'Dynamic Duo',
        "sku": 755503,
        "url": 'https://ogee.com/products/dynamic-duo',
        "final": '"Light, airy, and moisturizing. Feels like a little bit of heaven." <span>-Felice S.</span>'
    },
    {
        "product": 'Nourishing Trio',
        "sku": 755655,
        "url": 'https://ogee.com/products/nourishing-trio',
        "final": '"Absorbs right into my skin and leaves it nourished and moisturized all day long." <span>-Vita K.</span>'
    },
    {
        "product": 'Cleanse & Treat',
        "sku": 755505,
        "url": 'https://ogee.com/products/cleanse-treat',
        "final": '"Leaves your skin looking clean & clear - it feels fantastic! Clean, hydrated, beautiful! Then add the anti-aging serum - wow!" <span>-Kelly F.</span>'
    },
    {
        "product": 'Glow Trio',
        "sku": 755730,
        "url": 'https://ogee.com/products/glow-trio',
        "final": '"The best skincare regimen I have ever used! It gently soothes and moisturizes my skin and prepares it for makeup in a gentle and calming way." <span>-Anita W.</span>'
    },
    {
        "product": 'Sunkissed Set',
        "sku": 755750,
        "url": 'https://ogee.com/products/sunkissed-set',
        "final": '"Leaves my skin feeling dewy and fresh. I love the cheek color that gives me a subtle pink glow." <span>-Kay C.</span>'
    },
    {
        "product": 'Velvet Botanical Moisturizer',
        "sku": 755613,
        "url": 'https://ogee.com/products/velvet-botanical-moisturizer',
        "final": '“Keeps my skin hydrated but is also lightweight. Feels like silk and is the perfect base for day and night. Also smells amazing!” <span>-Mary S.</span>'
    },
    {
        "product": 'Jojoba Glow Face Oil',
        "sku": 755411,
        "url": 'https://ogee.com/products/organic-anti-aging-moisturizing-face-oil',
        "final": '"My skin is perfectly moisturized. Not greasy or shiny - just soft, healthy, and balanced." <span>-Lauren B.</span>'
    },
    {
        "product": 'Cleansing Cloths',
        "sku": 755718,
        "url": 'https://ogee.com/products/gentle-glow-cleansing-cloths',
        "final": '“I love the feel and smell! The material is soft and they make my skin feel clean and refreshed. <span>-Lindsey H.</span>'
    },
    {
        "product": 'Clear Lip Oil',
        "sku": 755432,
        "url": 'https://ogee.com/products/organic-moisturizing-lip-balm-with-jojoba-oil',
        "final": '“I use it first thing in the morning and during the day as needed. It keeps my lips soft and kissable.” <span>-Katherine B.</span>'
    },
    {
        "product": 'Tinted Lip Oil',
        "sku": 755454,
        "url": 'https://ogee.com/products/camellia',
        "final": '"Glides on beautifully, feels silky and lasts well. Lovely color!" <span>-Roslyn F.</span>'
    },
    {
        "product": 'Sculpted Face Stick',
        "sku": 755498,
        "url": 'https://ogee.com/products/sculpted-face-stick',
        "final": '"Beautiful color, goes on smoothly and looks so natural." <span>-Michele</span>'
    },
    {
        "product": 'Sculpted Face Stick Trio',
        "sku": 755575,
        "url": 'https://ogee.com/products/sculpted-face-stick-bundle-3pc',
        "final": '"Lightweight, easy to blend, and give me that perfect natural glow." <span>-Jade G.</span>'
    },
    {
        "product": 'Cleansing Oil',
        "sku": 755388,
        "url": 'https://ogee.com/products/liquid-gold-cleansing-oil',
        "final": '"It not only melts off my makeup but leaves my skin so soft and moisturized." <span>-Carrie C.</span>'
    },
    {
        "product": 'Face Mist',
        "sku": 755484,
        "url": 'https://ogee.com/products/luminous-botanical-face-mist',
        "final": '"My skin feels soft, dewy, and refreshed after using this morning and night." <span>-Jody K.</span>'
    },
    {
        "product": 'Seeds of Youth Serum',
        "sku": 755410,
        "url": 'https://ogee.com/products/organic-anti-aging-hydrating-serum-with-jojoba-oil',
        "final": '"Love this serum! Smells amazing & makes my skin soft & beautiful!" <span>-Kara K.</span>'
    }
]
var product = reviews[0]
reviews.forEach(function(review) {
    if (document.title.indexOf(review.product) !== -1 || window.location.href.indexOf(review.url) !== -1) {
        product = review
    }
})

console.log(product)
var reviewQuoteDiv = document.querySelector('.reviewQuoteDiv') || document.createElement('div')
reviewQuoteDiv.className = 'reviewQuoteDiv'
reviewQuoteDiv.innerHTML = product["final"]
var reviewsElements = document.querySelectorAll('#alon1')
reviewsElements.forEach(function(review) {
    review.parentElement.insertBefore(reviewQuoteDiv.cloneNode(true), review.nextSibling)
})