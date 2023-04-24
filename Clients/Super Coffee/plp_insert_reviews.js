//var plpReviewsInterval = setInterval(function() {
var productCards = document.querySelectorAll('.product-card')
if (!productCards.length || document.querySelector('.reviewsDiv')) {
    return
}


console.log('running plp test')
var reviews = [{
    "url": "https://drinksupercoffee.com/products/creamer/sweet-creamer-super-creamer/",
    "ratings": "270",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/grounds/mocha-super-coffee-grounds/",
    "ratings": "38",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/creamer/super-creamer-variety-pack-2/",
    "ratings": "43",
    "average": "4.5"
},
{
    "url": "https://drinksupercoffee.com/products/creamer/french-vanilla-super-creamer/",
    "ratings": "179",
    "average": "4.5"
},
{
    "url": "https://drinksupercoffee.com/products/creamer/super-creamer-plant-based-variety-pack/",
    "ratings": "39",
    "average": "4.6"
},
{
    "url": "https://drinksupercoffee.com/products/grounds/super-coffee-ground-variety-pack/",
    "ratings": "51",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/espresso/caramel-super-espresso/",
    "ratings": "122",
    "average": "4.9"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/cinnamon-roll-super-coffee/",
    "ratings": "11",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/super-coffee-variety-pack/",
    "ratings": "426",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/blueberry-latte-super-coffee/",
    "ratings": "156",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/caramel-super-coffee/",
    "ratings": "808",
    "average": "4.7"
},
{
    "url": "https://drinksupercoffee.com/products/grounds/vanilla-super-coffee-grounds/",
    "ratings": "23",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/creamer/original-super-creamer/",
    "ratings": "108",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/hazelnut-super-coffee/",
    "ratings": "423",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/french-vanilla-super-coffee/",
    "ratings": "75",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/super-coffee-plant-based-variety-pack/",
    "ratings": "83",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/coconut-mocha-super-coffee/",
    "ratings": "330",
    "average": "4.7"
},
{
    "url": "https://drinksupercoffee.com/products/grounds/dark-roast-super-coffee-grounds/",
    "ratings": "68",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/vanilla-super-coffee/",
    "ratings": "945",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/mocha-super-coffee/",
    "ratings": "1140",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/creamer/caramel-super-creamer/",
    "ratings": "222",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/grounds/hazelnut-super-coffee-grounds/",
    "ratings": "17",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/coco-for-mocha/",
    "ratings": "10",
    "average": "4.5"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/super-cold-brew/",
    "ratings": "66",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/coffee-hall-of-fame/",
    "ratings": "65",
    "average": "4.9"
},
{
    "url": "https://drinksupercoffee.com/products/creamer/toasted-hazelnut-super-creamer/",
    "ratings": "56",
    "average": "4.5"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/iced-perfecta/",
    "ratings": "1",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/vegan-drip/",
    "ratings": "2",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/pods/mocha-super-coffee-pods/",
    "ratings": "80",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/sweet-cream-super-coffee/",
    "ratings": "79",
    "average": "4.7"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/variety-brews/",
    "ratings": "6",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/pods/dark-roast-super-coffee-pods/",
    "ratings": "103",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/pods/maple-pumpkin-super-coffee-pods/",
    "ratings": "101",
    "average": "4.7"
},
{
    "url": "https://drinksupercoffee.com/products/pods/super-pods-variety-pack-40ct/",
    "ratings": "3",
    "average": "4.7"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/power-couple/",
    "ratings": "7",
    "average": "4.9"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/hotgirlsummer/",
    "ratings": "14",
    "average": "4.9"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/go-hazelnutz/",
    "ratings": "1",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/creamer/coconut-mocha-super-creamer/",
    "ratings": "87",
    "average": "4.7"
},
{
    "url": "https://drinksupercoffee.com/products/creamer/vanilla-super-creamer/",
    "ratings": "117",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/deadline-maker/",
    "ratings": "1",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/super-coffee-trial-pack/",
    "ratings": "61",
    "average": "4.5"
},
{
    "url": "https://drinksupercoffee.com/products/coffee/blueberry-latte-super-coffee/",
    "ratings": "156",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/vegan-power-up/",
    "ratings": "2",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/pods-n-cream/",
    "ratings": "8",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/pure-nrg/",
    "ratings": "7",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/plant-based-chill/",
    "ratings": "1",
    "average": "5"
},
{
    "url": "https://drinksupercoffee.com/products/grounds/dark-roast-super-coffee-grounds/",
    "ratings": "68",
    "average": "4.8"
},
{
    "url": "https://drinksupercoffee.com/products/pods/vanilla-super-coffee-pods/",
    "ratings": "59",
    "average": "4.7"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/vanilla-magic/",
    "ratings": "16",
    "average": "4.6"
},
{
    "url": "https://drinksupercoffee.com/products/bundles/totally-nuts/",
    "ratings": "2",
    "average": "4.5"
}
]

//clearInterval(plpReviewsInterval)

productCards.forEach(function (card) {
    var link = card.querySelector('a')
    var productReview = null
    reviews.forEach(function (review) {
        if (review.url.indexOf(link.href) !== -1) {
            productReview = review
        }
    })

    if (!productReview) {
        return
    }

    var reviewsDiv = card.querySelector('.reviewsDiv') || document.createElement('div')
    reviewsDiv.className = "reviewsDiv"
    reviewsDiv.innerHTML = `<div class="reviews-summary yotpo-baseline"><div class="stars"><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg></div>
      <p class="rating">${productReview.average}</p>
                  <span class="v-bar"></span>
      <p class="review-count">${productReview.ratings} Reviews</p>
              </div>`
    link.parentElement.insertBefore(reviewsDiv, link.nextElementSibling)
})

    //}, 250)