let pdpReviewSortingInterval = setInterval(() => {
    let reviewsSelect = document.querySelector('#stamped-sort-select')
    if (!reviewsSelect) return
    clearInterval(pdpReviewSortingInterval)
    reviewsSelect.value = "with-photos"
    if (window.location.href.includes(`variant=highest`)) {
        reviewsSelect.value = `highest-rating`
    }
    StampedFn.sortReviews(reviewsSelect)
}, 250)