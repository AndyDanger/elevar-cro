$(document).ready(function () {

    setTimeout(function () {
        if ($('.section-banner-image .no-translation').length) {
            var influencerName = $('.section-banner-image .no-translation:first').text();
            sessionStorage.setItem('testkey', influencerName);
        }

        $('.influencerHere').text(sessionStorage.getItem('testkey'));
        $(`.info-bar__slider p:first`).text(`Save 15% with code ${sessionStorage.getItem('testkey')} today`)

    }, 450);
});