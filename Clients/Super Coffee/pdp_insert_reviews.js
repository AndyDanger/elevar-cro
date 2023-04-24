function doStuff() {
    var reviewsSummary = document.querySelector('.pdp-hero .reviews-summary')

    if (!reviewsSummary || document.querySelector('.userReviewDiv')) {
        return
    }

    var reviews = [{
            "title": "Love love love this coffee",
            "content": "Obsessed with Super Coffee! This coffee is healthy and gives all the energy without the crash.",
            "product_name": "Vanilla Latte Super Coffee",
            "product_id": 1406054072371,
            "name": "Andrea S.",
        }, {
            "title": "Super Cold Brew is great",
            "content": "This is my favorite go-to cold brew. It packs a nice punch but is super smooth. Overall love this stuff and highly recommend it!",
            "product_name": "Cold Brew",
            "product_id": 4193757265971,
            "name": "Rohan P.",
        }, {
            "title": "Obsessed with this Super Coffee",
            "content": "Love this coffee! Love the French Vanilla flavor. Love the taste and no sugar!!!",
            "product_name": "French Vanilla Super Coffee",
            "product_id": 4732625846323,
            "name": "Susan R.",
        },
        {
            "title": "yum",
            "content": "haven't had the creamer yet (still have hazelnut left from last shipment) but the mocha cans are fantastic!!!",
            "product_name": "Plant-Based Power-Up",
            "product_id": 4721423056947,
            "name": "Lisa K.",
        },
        {
            "title": "BEST GROUND COFFEE EVER!!!!",
            "content": "THANK YOU for making an amazing product that tastes incredible and gives me more focused, healthy energy than ever before!",
            "product_name": "Super Coffee Ground Variety Pack",
            "product_id": 4700383739955,
            "name": "Jordan C.",
        },
        {
            "title": "The Best Cold Brew Ever!",
            "content": "I love Super Coffee's Cold Brew Bold and Smooth. It's the best Cold Brew I have had.",
            "product_name": "Iced Perfecta",
            "product_id": 4721424826419,
            "name": "Shannon S.",
        },
        {
            "title": "Amazing!!!",
            "content": "This was such a great addition to my morning!!! I love the tastes and to think there are nutrition benefits also! Wow!\nI’m hooked!!! Thank you!",
            "product_name": "Power Couple",
            "product_id": 4721423253555,
            "name": "Barbara O.",
        },
        {
            "title": "GREAT PAIRING",
            "content": "Flavor is very good",
            "product_name": "Plant-Based & Chill",
            "product_id": 4721424629811,
            "name": "Tia P.",
        },
        {
            "title": "Tastebuds prepare to explode",
            "content": "This is just the best!! It’s so creamy, sweet but not too sweet, and gets my energy levels pumping! Keep doing your thing, Super Coffee team!",
            "product_name": "Sweet Cream Super Coffee",
            "product_id": 4732626075699,
            "name": "Nicole R.",
        },
        {
            "title": "Perfect Combination",
            "content": "The dark roast pod with the sweet cream creamer is my favorite combination. Right now it is my go-to morning coffee.",
            "product_name": "Pods ‘n’ Cream",
            "product_id": 4721423712307,
            "name": "Wendy N.",
        },
        {
            "title": "I am obsessed with this coffee",
            "content": "I have completely quit crappy coffee like Starbucks, Dunkin Donuts and Panera. When I try and drink it now it tastes gross and leaves me feeling like crap.",
            "product_name": "Variety Brews",
            "product_id": 4721424007219,
            "name": "Danielle G.",
        },
        {
            "title": "Fantastic company and products! I",
            "content": "Fantastic company and products! I look forward to my morning coffee. Hazelnut is my favorite but all the flavors are delicious, grateful for a plant based non- sugar bomb creamer.",
            "product_name": "Toasted Hazelnut Super Creamer",
            "product_id": 6568636579891,
            "name": "Mary S.",
        },
        {
            "title": "Love it",
            "content": "Great, healthy choice to start my morning.",
            "product_name": "Coffee Hall of Fame",
            "product_id": 4721377116211,
            "name": "Teresa B.",
        },
        {
            "title": "New coffee addiction",
            "content": "Super Coffee has to be the best flavored, energy packed coffee on the market. I used to have a Starbucks with espresso problem, and a daily Cafe Bustello/espresso coffee. But all are so heavy! Super Coffee is the best of all things COFFEE with a punch.",
            "product_name": "Coffee Hall of Fame",
            "product_id": 4721377116211,
            "name": "Deanna W.",
        },
        {
            "title": "Beyond incredible!!",
            "content": "The most refreshing bottled coffee ever. It’s perfect for summer. I’m FEELING IT. Thank you Super Fam!",
            "product_name": "Blueberry Muffin Super Coffee",
            "product_id": 6542291796019,
            "name": "Ben K.",
        },
        {
            "title": "I’m actually here at work",
            "content": "I’m actually here at work drinking your coffee right now as we speak. The flavor is good. It gives me energy.",
            "product_name": "Dark Roast Super Pods",
            "product_id": 4670729879603,
            "name": "Nelson G.",
        },
        {
            "title": "This coffee smells like comfort",
            "content": "This coffee smells like comfort food and tastes like Fall. LOVE it!",
            "product_name": "Maple Pumpkin Super Pods",
            "product_id": 4658347409459,
            "name": "Lois K.",
        },
        {
            "title": "Love love love!!",
            "content": "I thought I loved Super Coffee and then they came out with their vegan formulation....so stinking good. Love it.",
            "product_name": "Coconut Mocha Super Coffee",
            "product_id": 4534977888307,
            "name": "Melony P.",
        },
        {
            "title": "Yum",
            "content": "Best flavored pod I have had! Usually the flavor doesn’t taste anything like it should with other flavor pods. This one actually tastes like chocolate.",
            "product_name": "Mocha Super Pods",
            "product_id": 4670731845683,
            "name": "Casey D.",
        },
        {
            "title": "Best Coffee",
            "content": "Finally!! A coffee that doesn't cost $6 per cup, isn't loaded with sugar, and has a great taste. Very well done!",
            "product_name": "Super Coffee Variety Pack",
            "product_id": 1406083694643,
            "name": "Noah W.",
        },
        {
            "title": "Creamy sweet goodness!",
            "content": "SOOOOOO delicious. It’s got enough of a caramel sweet pop to it with a good taste of coffee to balance it out. It’s not sugary sweet but a rich smooth sweet. I also have blended this up as a blended coffee too! So versatile!",
            "product_name": "Caramel Super Espresso",
            "product_id": 1729256489011,
            "name": "Jane M.",
        },
        {
            "title": "How I start every single day!",
            "content": "Completely fits my keto and weight loss lifestyle, and the taste is AMAZING, I recommend it to everyone! ",
            "product_name": "Hazelnut Latte Super Coffee",
            "product_id": 1406004985907,
            "name": "Rebecca B.",
        },
        {
            "title": "Morning treat",
            "content": "This creamer makes my morning coffee the best part of my day. With just the right sweetness and creaminess, I have a perfect latte every day.",
            "product_name": "Sweet Cream Super Creamer",
            "product_id": 4447811764275,
            "name": "Julie O.",
        },
        {
            "title": "Super Coffee Rocks!",
            "content": "I look forward to getting up each morning to enjoy my super coffee! It taste great and is all natural with healthy ingredients.",
            "product_name": "Caramel Latte Super Coffee",
            "product_id": 4534979297331,
            "name": "Laurie L.",
        },
        {
            "title": "Tastes so naughty but without the harmful ingredients!",
            "content": "Hands down, Super Coffee is the best tasting bottled coffee out there that has this nutrition label. The taste is really good! Strong with a hint of sweet but not at all too sweet.",
            "product_name": "Mocha Latte Super Coffee",
            "product_id": 1406039162931,
            "name": "Amy E.",
        },
        {
            "title": "Love my order!",
            "content": "I just can’t say enough happiness and joy that I have found your products!!!",
            "product_name": "Deadline Maker",
            "product_id": 4721422794803,
            "name": "Barbara O.",
        },
        {
            "title": "Delicious 😋 and creamy…with no",
            "content": "Delicious 😋 and creamy…with no worries…love it ❤️",
            "product_name": "Super Creamer Variety Pack",
            "product_id": 6588750495795,
            "name": "Anthonya S.",
        },
        {
            "title": "Love this!",
            "content": "I have tried a few of their flavored creamers but the Original Super Creamer is hands down my fave. It's creamy & delicious!",
            "product_name": "Original Super Creamer",
            "product_id": 4448172900403,
            "name": "Ivy P.",
        },
        {
            "title": "Great Coffee Great energy!",
            "content": "The hype is real folks. Really good coffee with the benefits of being SUPER. Great no crash enrrgy",
            "product_name": "Vanilla Super Coffee Ground",
            "product_id": 4672324927539,
            "name": "Jeff N.",
        },
        {
            "title": "GOTTA LOVE CARAMEL!",
            "content": "This is the best keto creamer I've found out there. No clumping, no messy powders...just great taste, natural, healthy ingredients and terrifically priced. Win/win/win!",
            "product_name": "Caramel Super Creamer",
            "product_id": 4545131806771,
            "name": "Elaine W.",
        }
    ]

    var sku = reviewsSummary.getAttribute('data-product-id')
    var productReview = reviews[0]
    reviews.forEach(function(review) {
        if (review.product_id == sku) {
            productReview = review
        }
    })

    var userReviewDiv = document.querySelector('.userReviewDiv') || document.createElement('div')
    userReviewDiv.className = "userReviewDiv"
    userReviewDiv.innerHTML = `<article class="review" data-review_id="211620722" style="opacity: 1;">
    <h4 class="review-title">${productReview.title}</h4>
    <p class="review-body">“${productReview.content}”</p>
    <p class="review-attribution">-${productReview.name}</p>
    </article>`
    reviewsSummary.parentElement.insertBefore(userReviewDiv, reviewsSummary.nextElementSibling)
}

doStuff()