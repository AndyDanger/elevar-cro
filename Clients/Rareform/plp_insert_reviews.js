var counter = 0
var plpReviewsInterval = setInterval(function() {
    var productTitle = document.querySelector('.pcp__product-details')

    if (!productTitle || document.querySelector('.userReviewDiv')) {
        if (counter++ > 25) {
            clearInterval(plpReviewsInterval)
        }
        return
    }

    var reviews = [{
            "Product": "Blake Tote",
            "Page": "https://www.rareform.com/collections/blake-tote",
            "Rating": 4.9,
            "Reviews": 456,
            "Title": "A New Obsession!",
            "Name": "Patricia G.",
            "Content": "I just love these bags. They are unique and I love finding and using unique, clothes, accessories etc. The story is great to tell and they are made so sturdy!"
        },
        {
            "Product": "Zippered Blake Tote",
            "Page": "https://www.rareform.com/collections/bt-zippered",
            "Rating": 5,
            "Reviews": 33,
            "Title": "Cute and durable!",
            "Name": "Cindy",
            "Content": "Bought this as a gift to my daughter, who lives in NYC, and she loves the versatility of it. High cuteness factor too!"
        },
        {
            "Product": "Mini Blake",
            "Page": "https://www.rareform.com/collections/bt-mini",
            "Rating": 4.9,
            "Reviews": 20,
            "Title": "Perfect size and shape!",
            "Name": "Michelle",
            "Content": "This is the best little tote! I needed something roomy enough to fit my wallet, keys, glasses, phone, and iPad without feeling overstuffed or like I was carrying a giant bag. The Mini Blake is lightweight, sturdy, and holds a lot! It's easy to clean, and I love the bright colors."
        },
        {
            "Product": "Hudson Tote",
            "Page": "https://www.rareform.com/collections/hudson-tote",
            "Rating": 4.9,
            "Reviews": 29,
            "Title": "Nice and roomy + Durable",
            "Name": "Ginna",
            "Content": "Love how big this size is with straps that seem sturdy as well so you can fill it to the brim (which I do using it for work). Knowing how durable the outside is also super comforting for day over day use."
        },
        {
            "Product": "Maya Tote",
            "Page": "https://www.rareform.com/collections/maya",
            "Rating": 4.9,
            "Reviews": 587,
            "Title": "Super cute and functional",
            "Name": "Sara S.",
            "Content": "Love my crossbody! The travel bag is awesome! Perfect size with a deep zip container that fits so much stuff. The little zipper pockets such a nice touch to store more things!\n\n\n\n\n"
        },
        {
            "Product": "Cora Tote",
            "Page": "https://www.rareform.com/collections/cora-tote",
            "Rating": 4.9,
            "Reviews": 614,
            "Title": "Great colors and sturdy.",
            "Name": "Sandi",
            "Content": "I was very excited to get the Cora bag. It was a super quick turn around from order to delivery! The colors are great and the fabric is sturdy. I love that I can wash the bottom easily. The interior pockets are good for organizing items."
        },
        {
            "Product": "Beck Cooler",
            "Page": "https://www.rareform.com/collections/beck-cooler-bag",
            "Rating": 4.9,
            "Reviews": 76,
            "Title": "Excellent experience!",
            "Name": "Teressa B.",
            "Content": "Great quality, great service! Arrived in 3 days! The color is brilliant and trendy! Can’t wait to order my next one. Such a unique concept! Thanks Rareform!"
        },
        {
            "Product": "Sierra Cooler Bag",
            "Page": "https://www.rareform.com/collections/sierra-cooler-bag",
            "Rating": 5,
            "Reviews": 1,
            "Title": "Best cooler",
            "Name": "Ryan L.",
            "Content": "Love it! The colors are so summery! I can’t wait to fill it and go! Love the creativity and repurposed design!"
        },
        {
            "Product": "Mini Weekender Duffle",
            "Page": "https://www.rareform.com/collections/mini-weekender-duffle",
            "Rating": 4.8,
            "Reviews": 332,
            "Title": "Great Gym Bag",
            "Name": "Jaye L.",
            "Content": "Purchased for my son in law to be able to have a back up gym bag. He loves it! Thank you"
        },
        {
            "Product": "Weekender",
            "Page": "https://www.rareform.com/collections/weekender-duffle",
            "Rating": 4.9,
            "Reviews": 625,
            "Title": "Love this bag!!",
            "Name": "Lela C.",
            "Content": "Workmanship is excellent , color is vibrant and it’s easy to clean the outside of it! I bought it to take on a trip involving lots of water and everything stayed dry!"
        },
        {
            "Product": "Union Duffle",
            "Page": "https://www.rareform.com/collections/union-duffle",
            "Rating": 4.9,
            "Reviews": 152,
            "Title": "Union Duffle is a hit!",
            "Name": "Janice L F.",
            "Content": "I purchased this as a birthday gift for my granddaughter who turned 14. She thought everything about it was cool. She was especially excited to know that she got something no one else would have. I'm glad I purchased it and will be purchasing from Rareform again."
        },
        {
            "Product": "Charlie Pouch",
            "Page": "https://www.rareform.com/collections/charlie",
            "Rating": 4.9,
            "Reviews": 111,
            "Title": "Great for quick trips!",
            "Name": "Kacy",
            "Content": "I love this little pouch! So easy to clean and everything is safe with the fleecey material inside!"
        },
        {
            "Product": "Oliver Notebook",
            "Page": "https://www.rareform.com/collections/oliver-notebook",
            "Rating": 4.5,
            "Reviews": 4,
            "Title": "Oliver Notebook",
            "Name": "Tom B.",
            "Content": "I received my Oliver Notebook the other day and eagerly opened it. I’ve been journaling for some time now and loved the size of the pages and the way the notebook stays open while writing. Of course the beautiful Rareform cover did not disappoint. I highly recommend."
        },
        {
            "Product": "Zion Sling Bag",
            "Page": "https://www.rareform.com/collections/zion-sling-bag",
            "Rating": 4.9,
            "Reviews": 125,
            "Title": "Perfect travel companion",
            "Name": "Meg B.",
            "Content": "Great size, love the ability to wear different ways. Perfect for a phone, some cash and cards and my passport while in Thailand!"
        },
        {
            "Product": "Roam Keychain",
            "Page": "https://www.rareform.com/collections/roam-keychain",
            "Rating": 4.6,
            "Reviews": 34,
            "Title": "Great Keychain",
            "Name": "Kathy",
            "Content": "Love this keychain. I am really attracted to the colors but it is also very handy. The clip makes is easy to attach and unattach the keychain to a beltloop or backpack other Rareform totes, of which I have a few."
        },
        {
            "Product": "Vienna Toiletry Bag",
            "Page": "https://www.rareform.com/collections/vienna",
            "Rating": 4.9,
            "Reviews": 127,
            "Title": "Awesome!",
            "Name": "Alyssa",
            "Content": "Love this toiletry bag! Material is waterproof and design is cool. Zip pocket, pouches, and hanger make it easy to keep things organized and it fits a lot of stuff!\n"
        },
        {
            "Product": "Munich Toiletry Bag",
            "Page": "https://www.rareform.com/collections/munich",
            "Rating": 4.8,
            "Reviews": 80,
            "Title": "Purposeful & Classy",
            "Name": "Heather P.",
            "Content": "Looks great & sturdy! Holds everything & leaks/spills clean up easily. Everyone on my gift list is getting one this year!!"
        },
        {
            "Product": "Salvador Luggage Tag",
            "Page": "https://www.rareform.com/collections/salvador",
            "Rating": 4.9,
            "Reviews": 37,
            "Title": "Really good quality and a stand out design",
            "Name": "Lorraine",
            "Content": "Love this luggage tag. It will be easy to spot when trying to find my luggage at the airport. I will have to buy one for my husband for Christmas in his favourite colour. No-one else will have the same one. The gift box is a nice touch."
        }
    ]

    var url = window.location.href
    var productReview = null
    reviews.forEach(function(review) {
        if (url.indexOf(review.Page) !== -1) {
            productReview = review
        }
    })

    var userReviewDiv = document.querySelector('.userReviewDiv') || document.createElement('div')
    userReviewDiv.className = "userReviewDiv"
    userReviewDiv.innerHTML = `
    <div class="firstLine">
      <img class="stars" src="https://i.imgur.com/DOmRBa5.png" />
      <div class="rating">${productReview.Rating} | </div>
      <div class="reviews">${productReview.Reviews} reviews</div>
    </div>
    <div class="title">${productReview.Title}</div>
    <div class="content">"${productReview.Content}"</div>
    <div class="name">-${productReview.Name}</div>`
    productTitle.parentElement.insertBefore(userReviewDiv, productTitle.nextElementSibling)

}, 250)