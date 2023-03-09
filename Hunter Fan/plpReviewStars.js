var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);

var plpReviewStarsInterval = setInterval(function () {
    var productWraps = document.querySelectorAll('.productList .grid__item:not(.reviewInserted)') // Get any product card that doesn't have the reviews inserted yet
    if (!productWraps.length) {
        return
    }
    productWraps.forEach(function (productWrap) {
        var productId = productWrap.querySelector('.swym-button').getAttribute('data-product-id') // Get the product id
        var link = productWrap.querySelector('a')
        productWrap.classList.add('reviewInserted')

        let request = jQuery.getJSON(`https://api.bazaarvoice.com/data/display/0.2alpha/product/summary?PassKey=ca20bzfytTPF6C35sA6jxtpSt4goJz702tc9jmADiE6jk&productid=${productId}&contentType=reviews,questions&reviewDistribution=primaryRating,recommended&rev=0&contentlocale=en_US`); // Get the reviews for a productID. Different clients use different widgets so the URL will change for each client
        request.done(function () {
            var reviewDetails = request.responseJSON;
            console.log(reviewDetails)
            var count = reviewDetails.reviewSummary.numReviews
            var rating = (Math.round(reviewDetails.reviewSummary.primaryRating.average * 10) / 10).toFixed(1)
            if (!count || !rating) {
                return
            }
            // Copy some reviews HTML from the PDP to get your basic look and then adjust it dynamically
            var reviewHtml = `<dl class="bv-stars-container" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating"> <span itemprop="itemReviewed" itemscope="" itemtype="http://schema.org/IndividualProduct" class="bv-hidden"> <span itemprop="name">Zeal with LED Light 44 inch</span> </span>    <dt class="bv-rating-ratio">  <button class="bv-rating-stars-container bv-focusable" role="link" title="Read 24 Reviews">   <span class="bv-rating-stars bv-rating-stars-off" aria-hidden="true">  ★★★★★  </span> <span class="bv-rating-stars-on bv-rating-stars bv-width-from-rating-stats-94" aria-hidden="true">  ★★★★★  </span>    <meta itemprop="bestRating" content="5">     <span class="bv-off-screen">4.7 out of 5 stars. Read reviews for Zeal with LED Light 44 inch</span>     </button>  </dt>   <dd class="bv-rating-ratio-number">  <span class="bv-rating"><span itemprop="ratingValue" aria-hidden="true">4.7</span></span>   </dd>     <dd class="bv-rating-ratio-count">    <a href="#" class="bv-rating-label bv-text-link bv-focusable"> <span itemprop="reviewCount">24</span> Reviews  <span class="bv-off-screen">This action will navigate to reviews.</span> </a>     </dd>    </dl>`
            var reviewDiv = document.createElement('div')
            reviewDiv.className = "plpReviewsDiv"
            reviewDiv.innerHTML = reviewHtml

            var productTitle = productWrap.querySelector('.grid-view-item__title') // Insert after the product title
            productTitle.append(reviewDiv)
            reviewDiv.addEventListener('click', function () { // Makes the reviews link to the PDP
                productTitle.querySelector('span').click()
            })
        })
    })
}, 350)