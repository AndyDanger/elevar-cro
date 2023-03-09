var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);

var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://cdn1.stamped.io/files/widget.min.css"); // Loads default Stamped.io stylings because that's what is used on this client's PDP's. Different clients use different reviews widgets so the default stylings will be different
document.getElementsByTagName("head")[0].appendChild(element);

var plpReviewStarsInterval = setInterval(function () {
    var productWraps = document.querySelectorAll('.grow-aov-collection__grid-item:not(.reviewInserted)') // Get any product card that doesn't have the reviews inserted yet
    if (!productWraps.length) {
        return
    }
    productWraps.forEach(function (productWrap) {
        var productId = productWrap.getAttribute('data-product-id') // Get the product id
        productWrap.classList.add('reviewInserted')
        let request = jQuery.getJSON(`https://stamped.io/api/widget?productId=${productId}&page=1&apiKey=pubkey-d5EADc30NR5Bkk7mg04C18uuQ1upJ9&sId=219303&take=5`); // Get the reviews for a productID. Different clients use different widgets so the URL will change for each client
        request.done(function () {
            var reviewDetails = request.responseJSON;
            console.log(reviewDetails)
            var count = reviewDetails.count
            var rating = (Math.round(reviewDetails.rating * 10) / 10).toFixed(1)
            if (!count || !rating) {
                return
            }
            // Copy some reviews HTML from the PDP to get your basic look and then adjust it dynamically
            var reviewHtml = `<span class="stamped-badge"><span class="stamped-starrating stamped-badge-starrating" aria-hidden="true"><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i></span><span class="stamped-badge-caption">| ${rating} | ${count}<span> reviews</span></span></span>`
            var reviewDiv = document.createElement('div')
            reviewDiv.className = "plpReviewsDiv"
            reviewDiv.innerHTML = reviewHtml

            var productTitle = productWrap.querySelector('.grow-aov-collection__product-title') // Insert after the product title
            productTitle.append(reviewDiv)
            reviewDiv.addEventListener('click', function () { // Makes the reviews link to the PDP
                productTitle.querySelector('span').click()
            })
        })
    })
}, 350)
