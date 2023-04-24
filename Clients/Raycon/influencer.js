function influencers() {
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

    // let klarna = document.querySelector(`.product__klarna`)
    // if (klarna && !klarna.parentElement.querySelector(`.influencerHere`)) {
    //     let productElement = document.createElement(`p`)
    //     productElement.innerHTML = `Save 20% with code <strong class="influencerHere">${sessionStorage.getItem('testkey')}</strong> today`
    //     klarna.parentElement.insertBefore(productElement, klarna)
    // }

    // let cartFooter = document.querySelector(`.cart__sidebar__footer .cart__sidebar__text`)
    // if (cartFooter && !cartFooter.parentElement.querySelector(`.influencerHere`)) {
    //     let cartElement = document.createElement(`p`)
    //     cartElement.innerHTML = `Save 20% with code <strong class="influencerHere">${sessionStorage.getItem('testkey')}</strong> today`
    //     cartFooter.parentElement.insertBefore(cartElement, cartFooter)
    // }


    // let mothersdaybanner = document.querySelector('#mothers-day-sale-2023-promo')
    // if (mothersdaybanner && !mothersdaybanner.querySelector(`.influencerHere`)) {
    //     mothersdaybanner.innerHTML = `SAVE 20% WITH PROMO CODE <strong class="influencerHere">${sessionStorage.getItem('testkey')}</strong> TODAY`
    // }

    let replaceText = (selector, newElement, percent = 20) => {
        let elementToReplace = document.querySelector(selector)
        let testKey = sessionStorage.getItem('testkey')
        if (!elementToReplace || elementToReplace.querySelector(`.influencerHere`) || !testKey) return
        let html = `Save ${percent}% with promo code <strong class="influencerHere">${testKey}</strong> today`
        if (newElement) {
            let newElement = document.createElement(`p`)
            newElement.innerHTML = html
            elementToReplace.parentElement.insertBefore(newElement, elementToReplace)
        } else {
            elementToReplace.innerHTML = html
        }
    }

    replaceText(`.product__klarna`, true)
    replaceText(`.cart__sidebar__footer .cart__sidebar__text`, true)
    replaceText(`#mothers-day-sale-2023-promo`, false)

}

influencers()