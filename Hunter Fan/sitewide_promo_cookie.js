function () {
    var url = new URL(window.location.href)
    var utmCampaign = url.searchParams.get('utm_campaign')
    if (utmCampaign && utmCampaign.indexOf('promo_july') !== -1) {
        setCookie('promo_july', utmCampaign, 40)
    }
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    return getCookie('promo_july')
}

function () {
    var url = new URL(window.location.href)
    var utmCampaign = url.searchParams.get('utm_campaign')
    var promoCookie = getCookie('promo_july')
    return utmCampaign.indexOf('promo_july') !== -1 || !!promoCookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

setCookie('promo_july', 'promo_july15', 40)

var julyPromo15Interval = setInterval(function () {
    var banner = document.querySelector('.blockHero-info')
    var footerBanner = document.querySelector('.SWbannerInner')
    if (!footerBanner) {
        return
    }
    clearInterval(julyPromo15Interval)
    if (banner && banner.innerText.indexOf("Use code") !== -1) {
        banner.innerHTML = `
                <h2>15% off</h2>
                <br>
<p>Use code: <strong> JULY15 </strong>to get 15% off your order of $100 or more</p> 
                <br>
                <p>Valid through July 31</p>
                <a class="InfoButton" href="/collections/ceiling-fans">Shop Now</a>
              `
    }
    $(footerBanner).contents()[0].textContent = `Use code: JULY15 to get 15% off your order of $100 or more `
    var plpBannerImage = document.querySelector('.category-banner img')
    if (!plpBannerImage) {
        return
    }
    plpBannerImage.src = "https://i.imgur.com/CffF9iW.jpg"
    plpBannerImage.className = "lazyloaded"
}, 250)



function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

setCookie('promo_july', 'promo_july20', 40)

var julyPromo20Interval = setInterval(function () {
    var banner = document.querySelector('.blockHero-info')
    var footerBanner = document.querySelector('.SWbannerInner')
    if (!footerBanner) {
        return
    }
    clearInterval(julyPromo20Interval)
    if (banner && banner.innerText.indexOf("Use code") !== -1) {
        banner.innerHTML = `
                    <h2>$20 off</h2>
                    <br>
  <p>Use code: <strong> JULY20 </strong>to get $20 off your order of $100 or more</p> 
                    <br>
                    <p>Valid through July 31</p>
                    <a class="InfoButton" href="/collections/ceiling-fans">Shop Now</a>
                  `
    }
    $(footerBanner).contents()[0].textContent = `Use code: JULY20 to get $20 off your order of $100 or more `
    var plpBannerImage = document.querySelector('.category-banner img')
    if (!plpBannerImage) {
        return
    }
    plpBannerImage.src = "https://i.imgur.com/wMTPvu6.jpg"
    plpBannerImage.className = "lazyloaded"
}, 250)



google_optimize.get('axYU7b-kSh-LF-LFqABBuw') // set cookies

google_optimize.get('zZGgu5PZTo6kR5aseWaZlQ') // $20 Off

google_optimize.get('sA3vpBkvTP6muuhiwyu-mw') // 15% Off