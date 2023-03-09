var skus = [
    "1406039162931",
    "6542291796019",
    "6542291796019",
    "1406054072371",
    "6657112735795",
    "6657112113203",
    "4534979297331",
    "4534977888307",
    "4193757265971",
    "1406004985907",
    "4732625846323",
    "6663212957747",
    "1406083694643",
    "4732626075699",
    "4746184884275",
    "6666420682803",
    "6666421010483",
    "1729256489011",
    "4447811764275",
    "4448172867635",
    "4545131806771",
    "4448172900403",
    "6588752920627",
    "4569473810483",
    "6588750495795",
    "4732626599987",
    "6672572416051",
    "6672573005875",
    "6568636579891",
    "6670807892019",
    "4700383739955",
    "4672321978419",
    "4672322928691",
    "4672324927539",
    "4672320897075",
    "4672321978419",
    "4670729879603",
    "4658347409459",
    "4670731845683",
    "4670731518003",
    "6540847775795",
    "4721380032563",
    "6561281900595",
    "4721379377203",
    "4746259791923",
    "4721377116211",
    "4721423253555",
    "4721424007219",
    "6595000172595",
    "4721423712307",
    "6595000565811",
    "4721424826419",
    "4746259726387",
    "4721422893107",
    "6595001057331",
    "4721424629811",
    "4721423056947",
    "4721422794803"
]


var responses = []

skus.forEach(function(sku, index) {
    // if (index > 1) {
    //     return
    // }
    fetch("https://drinksupercoffee.com/v1/app/reviews/get/", {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "sec-gpc": "1"
            },
            "referrer": "https://drinksupercoffee.com/products/coffee/blueberry-latte-super-coffee/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"per_page\":\"100\",\"page\":\"1\",\"sort\":\"date\",\"direction\":\"desc\",\"product_id\":\"" + sku + "\"}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(response => response.json())
        .then(data => {
            var sorted = data.reviews.sort((a, b) => b.votes_up - a.votes_up).slice(0, 3)
            sorted.forEach(function(object) {
                responses.push({
                    content: object.content,
                    product_id: object.product_id,
                    product_name: object.product_name,
                    title: object.title,
                    name: object.user.display_name,
                    verified_buyer: object.verified_buyer,
                    votes_up: object.votes_up
                })
            })
        });
})

[{
        "content": "Little bit of a aftertaste",
        "product_id": "4732625846323",
        "product_name": "French Vanilla Super Coffee",
        "title": "Little bit of a aftertaste",
        "name": "Michael C.",
        "verified_buyer": true,
        "votes_up": 20
    },
    {
        "content": "Love this coffee! Love new French vanilla. Love the taste and no sugar!!!",
        "product_id": "4732625846323",
        "product_name": "French Vanilla Super Coffee",
        "title": "Super coffer",
        "name": "Susan R.",
        "verified_buyer": true,
        "votes_up": 4
    },
    {
        "content": "Love it",
        "product_id": "4732625846323",
        "product_name": "French Vanilla Super Coffee",
        "title": "Love it",
        "name": "Jason H.",
        "verified_buyer": true,
        "votes_up": 3
    },
    {
        "content": "haven&#x27;t had the creamer yet (still have hazelnut left from last shipment) but the mocha cans are fantastic!!!",
        "product_id": "4721423056947",
        "product_name": "Plant-Based Power-Up",
        "title": "yum",
        "name": "Lisa K.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "I love the product but your delivery leaves a lot to be desired. The last two packages delivered to my house have had creamer. When delivered the creamer is leaking all over my porch and unusable.",
        "product_id": "4721423056947",
        "product_name": "Plant-Based Power-Up",
        "title": "Love the product",
        "name": "Bonnie H.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "THANK YOU for making an amazing product that tastes incredible and gives me more focused, healthy energy than ever before!",
        "product_id": "4700383739955",
        "product_name": "Super Coffee Ground Variety Pack",
        "title": "BEST GROUND COFFEE EVER!!!!",
        "name": "Jordan C.",
        "verified_buyer": true,
        "votes_up": 1
    },
    {
        "content": "Nothing to write home about. Slightly metallic taste that only gets worse when you add the creamer.",
        "product_id": "4700383739955",
        "product_name": "Super Coffee Ground Variety Pack",
        "title": "Average at Best",
        "name": "Meghan K.",
        "verified_buyer": true,
        "votes_up": 1
    },
    {
        "content": "Great flavor",
        "product_id": "4700383739955",
        "product_name": "Super Coffee Ground Variety Pack",
        "title": "Great flavor",
        "name": "Kalia F.",
        "verified_buyer": true,
        "votes_up": 1
    },
    {
        "content": "I love Super Coffee&#x27;s Cold Brew Bold and Smooth. I have tried it with their Sweet Sweet Creamer and recently their Pumpkin Creamer. It&#x27;s the best Cold Brew I have had. I love the smooth but bold flavor. I add ice to my cup, pour the cold brew over the ice. Then I add the creamer and mix it in. I find if you let it sit for a few minutes and them stir. The flavor is so rich. I definitely highly recommend it!",
        "product_id": "4721424826419",
        "product_name": "Iced Perfecta",
        "title": "The Best Cold Brew Ever!",
        "name": "Shannon S.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "This was such a great addition to my morning!!! I love the tastes and to think there are nutrition benefits also! Wow!\nI’m hooked!!! Thank you!",
        "product_id": "4721423253555",
        "product_name": "Power Couple",
        "title": "Amazing!!!",
        "name": "Barbara O.",
        "verified_buyer": true,
        "votes_up": 1
    },
    {
        "content": "Taste is very good…most important to us is that it’s healthier.",
        "product_id": "4721423253555",
        "product_name": "Power Couple",
        "title": "Love it.",
        "name": "Linda G.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "The super coffee grounds and the creamer is great!",
        "product_id": "4721423253555",
        "product_name": "Power Couple",
        "title": "Love it",
        "name": "April F.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "Flavor is very good",
        "product_id": "4721424629811",
        "product_name": "Plant-Based & Chill",
        "title": "GREAT PAIRING",
        "name": "tia p.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "Nothing beats the sweet cream flavor! Smooth, creamy, and delicious!",
        "product_id": "4732626075699",
        "product_name": "Sweet Cream Super Coffee",
        "title": "My favorite!",
        "name": "Ashley K.",
        "verified_buyer": true,
        "votes_up": 3
    },
    {
        "content": "This is just the best!! It’s so creamy, sweet but not too sweet, and gets my energy levels pumping! Keep doing your thing Super coffee Team!",
        "product_id": "4732626075699",
        "product_name": "Sweet Cream Super Coffee",
        "title": "Tastebuds prepare to explode",
        "name": "Nicole R.",
        "verified_buyer": true,
        "votes_up": 3
    },
    {
        "content": "This is my ALL time favorite product and flavor! Of course it’s sold out lol wish I had bought more now! Can’t wait to get it again and now I have to hide my last few cans from myself lol!! Props Super Coffee!!",
        "product_id": "4732626075699",
        "product_name": "Sweet Cream Super Coffee",
        "title": "Oh no sold out!",
        "name": "Christy B.",
        "verified_buyer": true,
        "votes_up": 3
    },
    {
        "content": "The dark roast pod with the sweet cream creamer is my favorite combination. Right now it is my go-to morning coffee.",
        "product_id": "4721423712307",
        "product_name": "Pods ‘n’ Cream",
        "title": "Perfect Combination",
        "name": "Wendy N.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "Seriously... couldn&#x27;t get enough coffee before... now addicted to the k-cups. When will my love for Super Coffee end?! Never. The answer is never.",
        "product_id": "4721423712307",
        "product_name": "Pods ‘n’ Cream",
        "title": "Another &quot;must have&quot;",
        "name": "Jennifer W.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "It’s really good",
        "product_id": "4721423712307",
        "product_name": "Pods ‘n’ Cream",
        "title": "It’s really good",
        "name": "Kathy W.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "LOVE LOVE LOVE!",
        "product_id": "4721424007219",
        "product_name": "Variety Brews",
        "title": "Super coffee",
        "name": "Marguerite M.",
        "verified_buyer": true,
        "votes_up": 2
    },
    {
        "content": "Love, love, love",
        "product_id": "4721424007219",
        "product_name": "Variety Brews",
        "title": "Always delicious",
        "name": "Kara C.",
        "verified_buyer": true,
        "votes_up": 2
    },
    {
        "content": "I have completely quit crappy coffee like Starbucks, Dunkin Donuts and Panera. When I try and drink it now it tastes gross and leaves me feeling like crap.",
        "product_id": "4721424007219",
        "product_name": "Variety Brews",
        "title": "I am obsessed with this coffee",
        "name": "Danielle G.",
        "verified_buyer": true,
        "votes_up": 2
    },
    {
        "content": "Great",
        "product_id": "6595000565811",
        "product_name": "Go Hazelnutz",
        "title": "Great",
        "name": "Pat C.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "The creamer wasn’t as thick creamy like the regular hazelnut (prefer).",
        "product_id": "6568636579891",
        "product_name": "Toasted Hazelnut Super Creamer",
        "title": "Not as creamy like regular (non plant-based)",
        "name": "Catalina K.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "Love the rich taste it adds to my coffee",
        "product_id": "6568636579891",
        "product_name": "Toasted Hazelnut Super Creamer",
        "title": "Love the rich taste it",
        "name": "Stacey G.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "Fantastic company and products! I look forward to my morning coffee. Hazelnut is my favorite but all the flavors are delicious, grateful for a plant based non- sugar bomb creamer.",
        "product_id": "6568636579891",
        "product_name": "Toasted Hazelnut Super Creamer",
        "title": "Fantastic company and products! I",
        "name": "Mary S.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "I love having a coffee after my morning walks. Vanilla is creamy with rich flavor, and mocha never disappoints! Just right!",
        "product_id": "4721377116211",
        "product_name": "Coffee Hall of Fame",
        "title": "I love having a coffee",
        "name": "Valerie R.",
        "verified_buyer": true,
        "votes_up": 3
    },
    {
        "content": "Great, healthy choice to start my morning.",
        "product_id": "4721377116211",
        "product_name": "Coffee Hall of Fame",
        "title": "Love it",
        "name": "Teresa B.",
        "verified_buyer": true,
        "votes_up": 3
    },
    {
        "content": "Super Coffee has to be the best flavored, energy packed coffee on the market. I used to have a Starbucks with espresso problem, and a daily Cafe Bustello/espresso coffee. But all are so heavy! Super Coffee is the best of all things COFFEE with a punch. Tastes amazing, energy boosts without jitters, and light on the stomach so you don&#x27;t feel overly full and weighed down. I could go on and ON!!! I&#x27;m so glad I found Super Coffee and have shared with all of my special diet friends from Gluten-free to Vegan and they are also impressed!!!!",
        "product_id": "4721377116211",
        "product_name": "Coffee Hall of Fame",
        "title": "New coffee addiction",
        "name": "Deanna W.",
        "verified_buyer": true,
        "votes_up": 2
    },
    {
        "content": "Blueberry Latte caused me to lose sleep last night, not because I drank it too late in the day yesterday but because I was so excited to try it this morning. Wow! Blueberry Latte exceeded my expectations. With the sharp crack of the plastic as I twisted open the cap my mouth started to water. As I peeled off the aluminum seal of freshness my nose detected a faint smell of blueberries in the air and my excitement elevated. I lifted the bottle to my lips and the smooth and creamy coffee poured into my mouth coating my tastebuds with a sweet nectar they had never tasted before but immediately knew they couldn’t get enough. The taste profile of the blueberry latte is perfectly balanced between coffee and blueberry that is strong enough to enjoy but is in no was too much. It blows my mind that this flavor profile is created with ZERO sugar! It’s the perfect drink.",
        "product_id": "6542291796019",
        "product_name": "Blueberry Muffin Super Coffee",
        "title": "Blue my mind berry",
        "name": "Kevin S.",
        "verified_buyer": true,
        "votes_up": 66
    },
    {
        "content": "The most refreshing bottled coffee ever. It’s perfect for summer. I’m FEELING IT. Thank you Super Fam!",
        "product_id": "6542291796019",
        "product_name": "Blueberry Muffin Super Coffee",
        "title": "Beyond incredible!!",
        "name": "Ben K.",
        "verified_buyer": true,
        "votes_up": 20
    },
    {
        "content": "I love the Blueberry Latte but won&#x27;t be ordering again. I feel they charge too much money. I can buy super coffee in my local grocery store for 2.00 each when on sale. Also when I ordered the blueberry an offer showed up for super creamer for 7.99. Knowing they sell the creamer in a 3 pack I was under the impression I was getting a 3-pack for a special price. Who in their right mind would pay 7.99 for a container of cream? Apparently me the idiot. I can buy the creamer in my local grocery store for under 4.00. So I will now only buy these products on sale at my local store. Thanks for showing loyalty doesn&#x27;t really matter. I also emailed them about this and got no response and left a comment on an instagram post. No one reached out proves they don&#x27;t care. Save your money buy local.",
        "product_id": "6542291796019",
        "product_name": "Blueberry Muffin Super Coffee",
        "title": "Blueberry Latte",
        "name": "Elizabeth S.",
        "verified_buyer": true,
        "votes_up": 8
    },
    {
        "content": "Blueberry Latte caused me to lose sleep last night, not because I drank it too late in the day yesterday but because I was so excited to try it this morning. Wow! Blueberry Latte exceeded my expectations. With the sharp crack of the plastic as I twisted open the cap my mouth started to water. As I peeled off the aluminum seal of freshness my nose detected a faint smell of blueberries in the air and my excitement elevated. I lifted the bottle to my lips and the smooth and creamy coffee poured into my mouth coating my tastebuds with a sweet nectar they had never tasted before but immediately knew they couldn’t get enough. The taste profile of the blueberry latte is perfectly balanced between coffee and blueberry that is strong enough to enjoy but is in no was too much. It blows my mind that this flavor profile is created with ZERO sugar! It’s the perfect drink.",
        "product_id": "6542291796019",
        "product_name": "Blueberry Muffin Super Coffee",
        "title": "Blue my mind berry",
        "name": "Kevin S.",
        "verified_buyer": true,
        "votes_up": 66
    },
    {
        "content": "The most refreshing bottled coffee ever. It’s perfect for summer. I’m FEELING IT. Thank you Super Fam!",
        "product_id": "6542291796019",
        "product_name": "Blueberry Muffin Super Coffee",
        "title": "Beyond incredible!!",
        "name": "Ben K.",
        "verified_buyer": true,
        "votes_up": 20
    },
    {
        "content": "I love the Blueberry Latte but won&#x27;t be ordering again. I feel they charge too much money. I can buy super coffee in my local grocery store for 2.00 each when on sale. Also when I ordered the blueberry an offer showed up for super creamer for 7.99. Knowing they sell the creamer in a 3 pack I was under the impression I was getting a 3-pack for a special price. Who in their right mind would pay 7.99 for a container of cream? Apparently me the idiot. I can buy the creamer in my local grocery store for under 4.00. So I will now only buy these products on sale at my local store. Thanks for showing loyalty doesn&#x27;t really matter. I also emailed them about this and got no response and left a comment on an instagram post. No one reached out proves they don&#x27;t care. Save your money buy local.",
        "product_id": "6542291796019",
        "product_name": "Blueberry Muffin Super Coffee",
        "title": "Blueberry Latte",
        "name": "Elizabeth S.",
        "verified_buyer": true,
        "votes_up": 8
    },
    {
        "content": "Nice &quot;rich&quot; flavor!",
        "product_id": "4670729879603",
        "product_name": "Dark Roast Super Pods",
        "title": "Nice &quot;rich&quot; flavor!",
        "name": "Jean T.",
        "verified_buyer": true,
        "votes_up": 2
    },
    {
        "content": "Great!",
        "product_id": "4670729879603",
        "product_name": "Dark Roast Super Pods",
        "title": "Great!",
        "name": "Patti M.",
        "verified_buyer": true,
        "votes_up": 1
    },
    {
        "content": "I’m actually here at work drinking your coffee right now as we speak. The flavor is good. It gives me energy. I love the hazelnut creamer, you don’t need to add any more sugar on the coffee for me it’s a light sweet that you need instead of pouring tons of sugar in it. You don’t need it.",
        "product_id": "4670729879603",
        "product_name": "Dark Roast Super Pods",
        "title": "I’m actually here at work",
        "name": "Nelson G.",
        "verified_buyer": true,
        "votes_up": 1
    },
    {
        "content": "Great tasting coffee pod with a great caffeine kick. It was a great surprise and it pairs great with the Super Creamer!!!",
        "product_id": "4658347409459",
        "product_name": "Maple Pumpkin Super Pods",
        "title": "Great taste and great kick",
        "name": "Brandon A.",
        "verified_buyer": true,
        "votes_up": 144
    },
    {
        "content": "I cannot even use them in my Keurig so they are useless for me. I also purchased the creamer which is terrible. It has a horrible aftertaste. The entire purchase was not at all what I was expecting unfortunately",
        "product_id": "4658347409459",
        "product_name": "Maple Pumpkin Super Pods",
        "title": "I cannot even use them",
        "name": "Jacki S.",
        "verified_buyer": true,
        "votes_up": 4
    },
    {
        "content": "This coffee smells like comfort food and tastes like Fall. LOVE it!",
        "product_id": "4658347409459",
        "product_name": "Maple Pumpkin Super Pods",
        "title": "This coffee smells like comfort",
        "name": "Lois K.",
        "verified_buyer": true,
        "votes_up": 3
    },
    {
        "content": "I thought I loved Super Coffee and then they came out with their vegan formulation....so stinking good. Love it.",
        "product_id": "4534977888307",
        "product_name": "Coconut Mocha Super Coffee",
        "title": "Love love love!!",
        "name": "Melony P.",
        "verified_buyer": true,
        "votes_up": 109
    },
    {
        "content": "This is an awesome drink. I feel the energy almost immediately after drinking this coffee. It tastes great and goes down smooth!",
        "product_id": "4534977888307",
        "product_name": "Coconut Mocha Super Coffee",
        "title": "Awesome",
        "name": "Adan E.",
        "verified_buyer": true,
        "votes_up": 41
    },
    {
        "content": "I have only found this item on line and was excited to try it. My two favorite flavors are chocolate and coconut. This product did not disappoint. So creamy and just the right balance between the two flavors.",
        "product_id": "4534977888307",
        "product_name": "Coconut Mocha Super Coffee",
        "title": "Coconut Mocha Super Coffee is my Favorite!",
        "name": "Tammy H.",
        "verified_buyer": true,
        "votes_up": 19
    },
    {
        "content": "Best flavored pod I have had! Usually the flavor doesn’t taste anything like it should with other flavor pods. This one actually tastes like chocolate.",
        "product_id": "4670731845683",
        "product_name": "Mocha Super Pods",
        "title": "Yum",
        "name": "Casey D.",
        "verified_buyer": true,
        "votes_up": 20
    },
    {
        "content": "Absolutely love it",
        "product_id": "4670731845683",
        "product_name": "Mocha Super Pods",
        "title": "Excellent Mocha flavor",
        "name": "Misty P.",
        "verified_buyer": true,
        "votes_up": 1
    },
    {
        "content": "Great coffee",
        "product_id": "4670731845683",
        "product_name": "Mocha Super Pods",
        "title": "Great coffee",
        "name": "Richard R.",
        "verified_buyer": true,
        "votes_up": 1
    },
    {
        "content": "Finally!! A coffee that doesn&#x27;t cost $6 per cup, isn&#x27;t loaded with sugar, and has a great taste. Very well done!",
        "product_id": "1406083694643",
        "product_name": "Super Coffee Variety Pack",
        "title": "Best Coffee",
        "name": "Noah W.",
        "verified_buyer": true,
        "votes_up": 172
    },
    {
        "content": "I&#x27;m glad I got the chance to try it before buying more. I like strong coffee, but this is way too strong for me. Also, I don&#x27;t like the sweetener being used. It leaves a weird aftertaste. The only way I can drink it is to dilute it with milk, so it won&#x27;t go to waste.",
        "product_id": "1406083694643",
        "product_name": "Super Coffee Variety Pack",
        "title": "Too Strong / too sweet",
        "name": "Ellen G.",
        "verified_buyer": true,
        "votes_up": 38
    },
    {
        "content": "Love love love super coffee. Thank you again for making my shipment right. Will purchase again. Merry Christmas 🎄🎁",
        "product_id": "1406083694643",
        "product_name": "Super Coffee Variety Pack",
        "title": "Outstanding",
        "name": "Jeanne M.",
        "verified_buyer": true,
        "votes_up": 25
    },
    {
        "content": "SOOOOOO delicious. It’s got enough of a caramel sweet pop to it with a good taste of coffee to balance it out. It’s not sugary sweet but a rich smooth sweet. I also have blended this up as a blended coffee too! So versatile!",
        "product_id": "1729256489011",
        "product_name": "Caramel Super Espresso",
        "title": "Creamy sweet goodness!",
        "name": "Jane M.",
        "verified_buyer": true,
        "votes_up": 11
    },
    {
        "content": "I absolutely love the taste of this product, the energy it gives, and the health aspect!!!!! I would recommend it to anyone!!!!",
        "product_id": "1729256489011",
        "product_name": "Caramel Super Espresso",
        "title": "LOVE IT!!!!!",
        "name": "Lisa R.",
        "verified_buyer": true,
        "votes_up": 3
    },
    {
        "content": "So good. Easy. I’m passing up my Starbucks routine to stay home and drink these!! Love it!",
        "product_id": "1729256489011",
        "product_name": "Caramel Super Espresso",
        "title": "So good. Easy. I’m passing",
        "name": "Dania J.",
        "verified_buyer": true,
        "votes_up": 2
    },
    {
        "content": "Speedy shipping, I had been having some problem with shipping, but I reached out and they immediately corrected the issues, completely fits my keto and weight loss lifestyle, and the taste is AMAZING, I recommend it to everyone! It’s how I start everyday! I’ve been a customer for about 6 months now and I plan on staying one for life.",
        "product_id": "1406004985907",
        "product_name": "Hazelnut Latte Super Coffee",
        "title": "How I start every single day!",
        "name": "Rebecca B.",
        "verified_buyer": true,
        "votes_up": 10
    },
    {
        "content": "This is the perfect coffee solution for me. The taste is great, it is not too acidic, and it gives me truly positive energy. I have just purchased a 24-pack with a variety of flavors because I know I am going to enjoy them all.",
        "product_id": "1406004985907",
        "product_name": "Hazelnut Latte Super Coffee",
        "title": "Incredible!",
        "name": "Jay H.",
        "verified_buyer": true,
        "votes_up": 4
    },
    {
        "content": "I absolutely love this coffee and try not to have it on a daily basis....",
        "product_id": "1406004985907",
        "product_name": "Hazelnut Latte Super Coffee",
        "title": "Addicting",
        "name": "Amber M.",
        "verified_buyer": true,
        "votes_up": 2
    },
    {
        "content": "This creamer makes my morning coffee the best part of my day. With just the right sweetness and creaminess, I have a perfect latte every day.",
        "product_id": "4447811764275",
        "product_name": "Sweet Cream Super Creamer",
        "title": "Morning treat",
        "name": "Julie O.",
        "verified_buyer": true,
        "votes_up": 23
    },
    {
        "content": "Absolutely a game changer if you are on a low carb diet. I began Keto and was discouraged with choices of creamers. I am a huge coffee drinker and was wasting carbs. I ran across this product at my local grocery store and gave it a try. Then I order the caramel and mocha super coffee in a can and was hooked! Worth every penny to me. These products rock!",
        "product_id": "4447811764275",
        "product_name": "Sweet Cream Super Creamer",
        "title": "Game Changer!",
        "name": "Jennifer P.",
        "verified_buyer": true,
        "votes_up": 21
    },
    {
        "content": "I searched and searched for acceptable creamers when I started keto. All fell flat...powders, almond, coconut, you name it I tried it. These saved my love of (coffee) and creamer!! Yes more spendy than bad for you creamer....but the quality matches the price. Auto-ship is awesome, company has EXCELLENT communication! Love this so much I take it with me when I travel!",
        "product_id": "4447811764275",
        "product_name": "Sweet Cream Super Creamer",
        "title": "Travels with me!!",
        "name": "Pam",
        "verified_buyer": true,
        "votes_up": 5
    },
    {
        "content": "Flavor and energy receive a 5 star rating. No matter how much I shake the drink before and during drinking, I can’t get some chunks to go away that either settle at the bottom or around the cap at the top. It just makes the last sip really chunky. I think it’s the protein though so I drink it up. Don’t want to waste any of the benefits of drinking these!",
        "product_id": "4534979297331",
        "product_name": "Caramel Latte Super Coffee",
        "title": "Delicious flavor but chunky",
        "name": "Sara D.",
        "verified_buyer": true,
        "votes_up": 47
    },
    {
        "content": "I look forward to getting up each morning to enjoy my super coffee! It taste great and is all natural with healthy ingredients.",
        "product_id": "4534979297331",
        "product_name": "Caramel Latte Super Coffee",
        "title": "Super Coffee Rocks!",
        "name": "Laurie L.",
        "verified_buyer": true,
        "votes_up": 24
    },
    {
        "content": "Love the low carbs",
        "product_id": "4534979297331",
        "product_name": "Caramel Latte Super Coffee",
        "title": "Love the low carbs",
        "name": "Dawn M.",
        "verified_buyer": true,
        "votes_up": 21
    },
    {
        "content": "I love it!!!!!!!!! Not as much as Maple Pumpkin, but well, pumpkin.",
        "product_id": "1406039162931",
        "product_name": "Mocha Latte Super Coffee",
        "title": "Mocha Super Coffee",
        "name": "Janis B.",
        "verified_buyer": true,
        "votes_up": 19
    },
    {
        "content": "Hands down, Super coffee is the best tasting bottled coffee out there that has this nutrition label. I am blown away. The taste is really good! Strong with a hint of sweet but not at all too sweet. I have been drinking these for about a year and a half and introduced many people to them as well. They all love it",
        "product_id": "1406039162931",
        "product_name": "Mocha Latte Super Coffee",
        "title": "Tastes so naughty but with out the harmful ingredients. Yumm",
        "name": "Amy E.",
        "verified_buyer": true,
        "votes_up": 14
    },
    {
        "content": "I just wanted to try it! I figured that it would just be something to try once but the taste is phenomenal! I’m not a fan of cold or iced coffee but I freeze it and drink it like a slush! I love it!",
        "product_id": "1406039162931",
        "product_name": "Mocha Latte Super Coffee",
        "title": "I just wanted to try",
        "name": "Natalie D.",
        "verified_buyer": true,
        "votes_up": 13
    },
    {
        "content": "I just can’t say enough happiness and joy that I have found your products!!!\nMy last shipment arrived w one of my creamers leaking inside the box. Including photos… guessing it was dropped during shipping. Other than that I’m so happy!",
        "product_id": "4721422794803",
        "product_name": "Deadline Maker",
        "title": "Love my order!",
        "name": "Barbara O.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "Love the variety!! I absolutely love the creamers!! It&#x27;s such a great way to switch up your morning coffee!! Options are always the best way to start your day!",
        "product_id": "6588750495795",
        "product_name": "Super Creamer Variety Pack",
        "title": "Sarah J.",
        "name": "Sarah J.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "Love the variety and the taste!",
        "product_id": "6588750495795",
        "product_name": "Super Creamer Variety Pack",
        "title": "Love the variety and the",
        "name": "Tom B.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "Delicious 😋 and creamy…with no worries…love it ❤️",
        "product_id": "6588750495795",
        "product_name": "Super Creamer Variety Pack",
        "title": "Delicious 😋 and creamy…with no",
        "name": "Anthonya S.",
        "verified_buyer": true,
        "votes_up": 0
    },
    {
        "content": "I really like this product. I wish it was more readily available in all supermarkets! I like the lack of sweetness in the Original flavor.",
        "product_id": "4448172900403",
        "product_name": "Original Super Creamer",
        "title": "I love Original Super Creamer",
        "name": "Stefanie S.",
        "verified_buyer": true,
        "votes_up": 26
    },
    {
        "content": "I love this creamer.... it tastes like half and half but without the sugar and carbs.",
        "product_id": "4448172900403",
        "product_name": "Original Super Creamer",
        "title": "The best creamer",
        "name": "Linda H.",
        "verified_buyer": true,
        "votes_up": 5
    },
    {
        "content": "I have tried a few of their flavored creamers but the Original Super Creamer is hands down my fave. It&#x27;s creamy &amp; delicious!",
        "product_id": "4448172900403",
        "product_name": "Original Super Creamer",
        "title": "Love this!",
        "name": "Ivy P.",
        "verified_buyer": true,
        "votes_up": 5
    },
    {
        "content": "Love the taste",
        "product_id": "4672324927539",
        "product_name": "Vanilla Super Coffee Ground",
        "title": "Great taste",
        "name": "Carissa A.",
        "verified_buyer": true,
        "votes_up": 3
    },
    {
        "content": "I love Super Coffee! My GF loves it as well. I put the coffee in the pot and it brews before I wake up. My house gets filled with the lovely smell of Super Coffee. It&#x27;s how EVERY coffee drinker should begin their day!",
        "product_id": "4672324927539",
        "product_name": "Vanilla Super Coffee Ground",
        "title": "Awesome",
        "name": "Chris B.",
        "verified_buyer": true,
        "votes_up": 2
    },
    {
        "content": "The hype is real folks. Really good coffee with the benefits of being SUPER. Great no crash enrrgy",
        "product_id": "4672324927539",
        "product_name": "Vanilla Super Coffee Ground",
        "title": "Great Coffee Great energy!",
        "name": "Jeff N.",
        "verified_buyer": true,
        "votes_up": 2
    },
    {
        "content": "Great!",
        "product_id": "1406054072371",
        "product_name": "Vanilla Latte Super Coffee",
        "title": "Great!",
        "name": "Judy T.",
        "verified_buyer": true,
        "votes_up": 11
    },
    {
        "content": "I ABSOLUTELY LOVE your Super Coffee!!!! Very tasty and good for me too!!! :)",
        "product_id": "1406054072371",
        "product_name": "Vanilla Latte Super Coffee",
        "title": "Vanilla Super Coffee",
        "name": "Mary S.",
        "verified_buyer": true,
        "votes_up": 9
    },
    {
        "content": "Love love love these coffees.. Gives me so much energy without a crash..",
        "product_id": "1406054072371",
        "product_name": "Vanilla Latte Super Coffee",
        "title": "Love love love these coffees..",
        "name": "Andrea S.",
        "verified_buyer": true,
        "votes_up": 8
    },
    {
        "content": "I love this product, this company, their staff... this creamer has been a Keto dream. SO.GOOD.",
        "product_id": "4545131806771",
        "product_name": "Caramel Super Creamer",
        "title": "AMAZEBALLS",
        "name": "Amber P.",
        "verified_buyer": true,
        "votes_up": 48
    },
    {
        "content": "This is the best keto creamer I&#x27;ve found out there. No clumping, no messy powders...just great taste, natural, healthy ingredients and terrifically priced. Win/win/win!",
        "product_id": "4545131806771",
        "product_name": "Caramel Super Creamer",
        "title": "GOTTA LOVE CARAMEL!",
        "name": "Elaine W.",
        "verified_buyer": true,
        "votes_up": 9
    },
    {
        "content": "Great flavor. Coffee is not the same without it.",
        "product_id": "4545131806771",
        "product_name": "Caramel Super Creamer",
        "title": "Great flavor. Coffee is not",
        "name": "Michael B.",
        "verified_buyer": true,
        "votes_up": 2
    }
]