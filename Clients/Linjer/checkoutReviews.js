var checkoutReviewsInterval = setInterval(function () {
    var orderSummary = document.querySelector("#order-summary > .order-summary__sections")
    var main = document.querySelector('main')
    if (!orderSummary || !main) {
        return
    }
    clearInterval(checkoutReviewsInterval)
    var json = [
        {
            "name": "Naomi",
            "title": "Favourite piece of jewelry I own!",
            "body": "The ring is stunning and was everything I had hoped/expected! Quality is fabulous, and the colors are gorgeous, especially when the sun catches them.",
            "location": "Canada"
        },
        {
            "name": "Veronica",
            "title": "My favourite ring",
            "body": "Super cute simple yet elegant. I’m already looking into purchasing more jewelry through Linjer.",
            "location": "Canada"
        },
        {
            "name": "Rachel",
            "title": "Absolutely beautiful",
            "body": "So delicate and simple yet the colors make it stand out over other rings I also wear. It’s perfect and I’m in love with this ring.",
            "location": "United States"
        },
        {
            "name": "Isabelle",
            "title": "LOVE IT!!!",
            "body": "Love wearing it every time I go out! Classy and minimal!",
            "location": "Singapore"
        },
        {
            "name": "Tyler",
            "title": "Wonderful Present",
            "body": "My girlfriend loved it, she loves gold and opal so this combination was simply perfect and the delivery was quick.",
            "location": "Hong Kong"
        },
        {
            "name": "Ranee",
            "title": "Beautiful design and impeccable quality",
            "body": "I bought this ring for my mom for my wedding day. I haven't given it to her yet but am already impressed by the quality, I know she'll love it.",
            "location": "United States"
        },
        {
            "name": "Grace",
            "title": "So pretty!",
            "body": "Big fan of this ring. Fits well and sits nicely. I wear it pretty much all the time and it’s still shiny and clean.",
            "location": "New Zealand"
        },
        {
            "name": "Jennifer",
            "title": "A Beautiful Piece!",
            "body": "I am extremely pleased with the quality of this ring; fits perfectly and compliments my other rings wonderfully!",
            "location": "Canada"
        },
        {
            "name": "Kristle",
            "title": "Perfect jewellery",
            "body": "I am so happy with this piece! Looks very pretty. I don't ever take my rings off and this is still perfect after 2 weeks.",
            "location": "New Zealand"
        },
        {
            "name": "Sophia",
            "title": "Beautiful",
            "body": "They are so elegant and classy. I always get asked where they are from!",
            "location": "Canada"
        },
        {
            "name": "Kate",
            "title": "WOW",
            "body": "I am in love with this ring. Such a unique design and the stones are so sparkly. Adds a pop of colour to my usual stack.",
            "location": "Canada"
        },
        {
            "name": "Areya",
            "title": "Super cute!!",
            "body": "Beautiful piece! I love the look. I am planning to wear it for my friend's wedding.",
            "location": "Canada"
        },
        {
            "name": "Isabella",
            "title": "Beautiful!",
            "body": "A beautiful addition to my everyday wear. It is absolutely gorgeous!",
            "location": "New Zealand"
        },
        {
            "name": "Ayla",
            "title": "Great to stack",
            "body": "Great quality. Simple and great to wear with other rings.",
            "location": "United States"
        }
    ]

    var random = getRandomInt(json.length)

    var html = `
      <div class="reviewTopHeader">A few of our 5,000+ five-star reviews</div>
      <div class="reviewWrapper">
        <div class="reviewHeader">
            <div class="reviewHeaderText">${json[random].title}</div>
            <div class="reviewHeaderStars">★★★★★</div>
        </div>
        <div class="reviewContent">${json[random].body}</div>
        <div class="reviewname">—${json[random].name} (${json[random].location})</div>
      </div>
    `

    var desktopReviewDiv = document.querySelector('#desktopReviewDiv') || document.createElement('div')
    desktopReviewDiv.id = 'desktopReviewDiv'
    desktopReviewDiv.innerHTML = html
    orderSummary.append(desktopReviewDiv)

    var mobileReviewDiv = document.querySelector('#mobileReviewDiv') || document.createElement('div')
    mobileReviewDiv.id = 'mobileReviewDiv'
    mobileReviewDiv.innerHTML = html
    main.append(mobileReviewDiv)

}, 250)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}