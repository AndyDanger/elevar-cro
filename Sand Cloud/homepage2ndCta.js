let secondCtaInterval = setInterval(() => {
    let marquee = document.querySelector(`section[data-comp="marquee"]`)
    if (!marquee) {
        return
    }
    let secondCta = document.createElement(`div`)
    secondCta.id = `secondCta`
    secondCta.innerHTML = `
        <div class="cursive">Save the fishes</div>
        <div class="bold">Sustainable linens on a mission to save marine life</div>
        <a href="https://www.sandcloud.com/collections/new-products">Shop Beach, Home & More</a>
        <div><span class="stamped-starrating stamped-badge-starrating" aria-hidden="true"><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i></span>100,000+ Happy Customers</div>`
    marquee.parentElement.insertBefore(secondCta, marquee)
    marquee.remove()

}, 250)