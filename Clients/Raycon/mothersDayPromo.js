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
        productElement.innerHTML = `Save 20% with code <strong class="influencerHere">${sessionStorage.getItem('testkey')}</strong> today`
        klarna.parentElement.insertBefore(productElement, klarna)
    }

    let cartFooter = document.querySelector(`.cart__sidebar__footer .cart__sidebar__text`)
    if (cartFooter && !cartFooter.parentElement.querySelector(`.influencerHere`)) {
        let cartElement = document.createElement(`p`)
        cartElement.innerHTML = `Save 20% with code <strong class="influencerHere">${sessionStorage.getItem('testkey')}</strong> today`
        cartFooter.parentElement.insertBefore(cartElement, cartFooter)
    }


    let mothersdaybanner = document.querySelector('#mothers-day-sale-2023-promo')
    if (mothersdaybanner && !mothersdaybanner.querySelector(`.influencerHere`)) {
        mothersdaybanner.innerHTML = `SAVE 20% WITH PROMO CODE <strong class="influencerHere">${sessionStorage.getItem('testkey')}</strong> TODAY`
    }
}

test()

function() {
    var influencers = ['jana', 'LAURIES', 'KATIESTARKS', 'dandd', 'pacificnorth', 'hlp', 'BOOTH', 'mary', 'janssen', 'merrick', 'ashleytracks', 'stay', 'tamra', 'thesassybarn', 'GINGYPANTS', 'OHSNAP', 'crystel', 'kaley', 'MBW', 'MAKENNA', 'CASEYH', 'ABBYL', 'ALEXANDRA', 'ALEXSIS', 'ALYSSAG', 'ALYSSAJ', 'AMBERG', 'AMYB', 'ANGELAL', 'ANNAWANG', 'APRILW', 'CARRIEA', 'CHANDLER', 'CHARLOTTE', 'CHELSEY', 'COURTNEY', 'DANIELLE', 'DEANNAW', 'EMERSON', 'HILLARY', 'JACKIE', 'JANIE', 'JENAS', 'JENNAP', 'JELLY', 'JORDAN', 'JULIAG', 'KAITLIN', 'KELSEY', 'LBEAVERS', 'LBURKE', 'LMANZO', 'LORI', 'MACY', 'MEGANE', 'MELISSAC', 'MELISSAOG', 'NATALIEJ', 'NICOLEH', 'OAKLEY', 'SAVANNAH', 'STEFANIE', 'THISTLEWOOD', 'TONI', 'TRACY', 'WHITNEYR','hailey','michelebell','KELLEY15','KALEME','swan', 'JAMINATO', 'LAURAB', 'COLLINS', 'PAIGEH', 'BRISTOL', 'HILARYL']
    var utm_parameter_exists = false
    influencers.forEach(function (influencer) {
        if (window.location.href.toLowerCase().includes("utm_campaign=" + influencer.toLowerCase()) || sessionStorage.getItem('testkey')) {
            utm_parameter_exists = true
        }
    })
    return utm_parameter_exists;
}