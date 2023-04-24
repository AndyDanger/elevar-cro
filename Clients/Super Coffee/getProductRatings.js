var links = document.querySelectorAll('h1 .product-click')

var array = []

links.forEach(function(link, index) {
    // if (index > 5) {
    //     return
    // }
    var request = new XMLHttpRequest();

    request.addEventListener("load", function(evt) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(evt.currentTarget.response, "text/html");
        var html = doc.querySelector('[type="application/ld+json"]').innerHTML
        var json = JSON.parse(html)
        array.push({
            url: json.offers.url,
            ratings: json.aggregateRating.reviewCount,
            average: json.aggregateRating.ratingValue
        })
        console.log('done')
    }, false);

    request.open('GET', link.href, true),
        request.send();
})