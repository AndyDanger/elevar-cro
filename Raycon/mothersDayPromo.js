function test() {
    if ($('.section-banner-image .no-translation').length) {
        let influencerName = $('.section-banner-image .no-translation:first').text();
        sessionStorage.setItem('testkey', influencerName);
    }

    if ($('.rte._rte--discount-content strong:eq(1)').length) {
        let influencerName = $('.rte._rte--discount-content strong:eq(1)').text();
        sessionStorage.setItem('testkey', influencerName);
    }


    if ($('.influencerHere').length) {
        $('.influencerHere').text(sessionStorage.getItem('testkey'));
    }

    let klarna = document.querySelector(`.product__klarna`)
    if (klarna && !klarna.parentElement.querySelector(`.influencerHere`)) {
        let productElement = document.createElement(`p`)
        productElement.innerHTML = `Save 15% with code <strong class="influencerHere">${sessionStorage.getItem('testkey')}</strong> today`
        klarna.parentElement.insertBefore(productElement, klarna)
    }

    let cartFooter = document.querySelector(`.cart__sidebar__footer .cart__sidebar__text`)
    if (cartFooter && !cartFooter.parentElement.querySelector(`.influencerHere`)) {
        let cartElement = document.createElement(`p`)
        cartElement.innerHTML = `Save 15% with code <strong class="influencerHere">${sessionStorage.getItem('testkey')}</strong> today`
        cartFooter.parentElement.insertBefore(cartElement, cartFooter)
    }


    let mothersdaybanner = document.querySelector('#mothers-day-sale-2023-promo')
    if (mothersdaybanner && !mothersdaybanner.querySelector(`.influencerHere`)) {
        mothersdaybanner.innerHTML = `SAVE 15% WITH PROMO CODE <strong class="influencerHere">${sessionStorage.getItem('testkey')}</strong> TODAY`
    }
}

test()