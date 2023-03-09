let homepageReviewsCarouselInterval = setInterval(function () {
    let reviewsCarousel = document.querySelector('[data-comp="testimonial-slider"]')
    let ambassadorDiv = document.querySelector(`[data-comp="half-media"]`)
    if (!reviewsCarousel || !ambassadorDiv) return
    clearInterval(homepageReviewsCarouselInterval)
    // do something with buttons
    ambassadorDiv.parentElement.insertBefore(reviewsCarousel, ambassadorDiv)
}, 250)
