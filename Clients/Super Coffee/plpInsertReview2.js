var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://cdn1.stamped.io/files/widget.min.css"); // Loads default Stamped.io stylings because that's what is used on this client's PDP's. Different clients use different reviews widgets so the default stylings will be different
document.getElementsByTagName("head")[0].appendChild(element);

var plpReviewStarsInterval = setInterval(function () {
    var productWraps = document.querySelectorAll('.product-card:not(.reviewInserted)') // Get any product card that doesn't have the reviews inserted yet
    if (!productWraps.length) {
        return
    }
    productWraps.forEach(function (productWrap) {
        var productId = productWrap.getAttribute('data-product-id') // Get the product id
        var link = productWrap.querySelector('a')
        productWrap.classList.add('reviewInserted')
        let jsonToSend = { // Get the reviews for a productID. Different clients use different widgets so the URL will change for each client
            direction: "desc",
            page: "1",
            per_page: "100",
            product_id: productId,
            sort: "date",
        };

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://drinksupercoffee.com/v1/app/reviews/get/", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(jsonToSend));
        xhr.onload = function () {
            var data = JSON.parse(this.responseText);

            if (!data.baseline) {
                return
            }
            var count = data.baseline.total_review
            var rating = (Math.round(data.baseline.average_score * 10) / 10).toFixed(1)
            if (!count || !rating || rating < 4.5) {
                return
            }

            var reviewsDiv = productWrap.querySelector('.reviewsDiv') || document.createElement('div')
            reviewsDiv.className = "reviewsDiv"
            reviewsDiv.innerHTML = `<div class="reviews-summary yotpo-baseline"><div class="stars"><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg><svg version="1.1" class="bolt-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 8 20" xml:space="preserve"><polygon points="6.8,0 0,11.7 3.7,11.1 1.6,20 8,8.4 4.7,8.7 "></polygon></svg></div>
              <p class="rating">${rating}</p>
                          <span class="v-bar"></span>
              <p class="review-count">${count} Reviews</p>
                      </div>`
            link.parentElement.insertBefore(reviewsDiv, link.nextElementSibling)
        }
    })
}, 350)