var mobileMenuPromoInterval = setInterval(function () {
  var menuSections = document.querySelectorAll('.drawer__content .drawer__inner .drawer__menu, .drawer__content .drawer__inner .drawer__menu .sliderule__panel')
  let slideRules = document.querySelectorAll(`.sliderule__wrapper`)
  if (!menuSections.length || slideRules.length < 15) {
    return
  }
  clearInterval(mobileMenuPromoInterval)
  // do something with buttons

  menuSections.forEach(section => {
    var link = document.createElement('a')
    link.className = `mobileMenuInsert`
    link.href = 'https://snugglemeorganic.com/collections/snuggle-me-organic-infant'
    link.innerHTML = `
    <div class="grid__body"><div class="rating-stars">
    <ul class="rating-stars__list"><li class="rating-stars__item"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-star" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.844l-5.817 3.058 1.111-6.477L.588 7.838l6.504-.945L10 1l2.908 5.893 6.504.945-4.706 4.587 1.11 6.477L10 15.844z" stroke-linecap="round" stroke-linejoin="round"></path></svg></li><li class="rating-stars__item"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-star" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.844l-5.817 3.058 1.111-6.477L.588 7.838l6.504-.945L10 1l2.908 5.893 6.504.945-4.706 4.587 1.11 6.477L10 15.844z" stroke-linecap="round" stroke-linejoin="round"></path></svg></li><li class="rating-stars__item"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-star" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.844l-5.817 3.058 1.111-6.477L.588 7.838l6.504-.945L10 1l2.908 5.893 6.504.945-4.706 4.587 1.11 6.477L10 15.844z" stroke-linecap="round" stroke-linejoin="round"></path></svg></li><li class="rating-stars__item"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-star" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.844l-5.817 3.058 1.111-6.477L.588 7.838l6.504-.945L10 1l2.908 5.893 6.504.945-4.706 4.587 1.11 6.477L10 15.844z" stroke-linecap="round" stroke-linejoin="round"></path></svg></li><li class="rating-stars__item"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-star" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.844l-5.817 3.058 1.111-6.477L.588 7.838l6.504-.945L10 1l2.908 5.893 6.504.945-4.706 4.587 1.11 6.477L10 15.844z" stroke-linecap="round" stroke-linejoin="round"></path></svg></li></ul>
  </div>
  <div class="grid__richtext rte mt0 mb0"><p>Postpartum is hard but I feel like the Snuggle Me Lounger made recovery so much easier and smoother. We love the Snuggle Me Lounger!</p></div><p class="grid__title body--h6 mt0 mb0 uppercase">Sofia G., Snuggle Me Mama</p></div><a class="btn btn--grey hero__btn btn--large btn--long uppercase" href="/collections/snuggle-me-organic-infant" style="" _data-aos="hero" _data-aos-anchor="[data-section-id='template--15740300951609__hero']" _data-aos-order="3">
  Shop Now
</a>`

    if (window.location.href.includes('variant=product')) {
      link.innerHTML = `
        <div class="product-grid-item " data-grid-item="" preorder-product-element="handle" d-handle="infant-lounger-natural">
        <img src="https://cdn.shopify.com/s/files/1/0076/6597/5353/products/bare_natural_1_1_360x.jpg?v=1570244748" style="
    height: 180px;
    margin: -20px;
">
        <div class="product__grid__info product__grid__info--under text-center">
          <a href="/products/infant-lounger-natural" data-preorder-handle="infant-lounger-natural">
            <div class="product__grid__title__wrapper"><p class="product__grid__title">
                Infant Lounger | Natural
              </p></div><div>
                <!-- Stamped - Begin Star Rating Badge -->
                <span class="stamped-product-reviews-badge" data-id="2498942861369" data-product-sku="infant-lounger-natural" data-product-type="lounger" data-product-title="Infant Lounger | Natural" style="display:block;">
                <span class="stamped-badge" data-rating="4.9" data-lang="en" aria-label="Rated 4.9 out of 5 stars 201reviews"><span class="stamped-starrating stamped-badge-starrating" aria-hidden="true"><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i><i class="stamped-fa stamped-fa-star" aria-hidden="true"></i></span><span class="stamped-badge-caption" data-reviews="201" data-rating="4.9" data-label="reviews" aria-label="201 reviews" data-version="2">201<span style="display:none;"> reviews</span></span></span>
                </span>
                <!-- Stamped - End Star Rating Badge -->
              </div></a></div>
      </div><a class="btn btn--grey hero__btn btn--large btn--long uppercase" href="/collections/snuggle-me-organic-infant" style="" _data-aos="hero" _data-aos-anchor="[data-section-id='template--15740300951609__hero']" _data-aos-order="3">
      Shop Now
    </a>`
    }
    section.append(link)
  })

}, 250)