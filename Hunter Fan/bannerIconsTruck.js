var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/955c376981.js'; // andydangermarshall@gmail.com
document.head.appendChild(script);

var topBannerInterval = setInterval(function () {
    var banner = document.querySelector('#SWbannerWrapper')
    if (!banner) {
        return
    }
    clearInterval(topBannerInterval)
    // do something with buttons
    var header = document.querySelector('#shopify-section-header .top-header')
    var innerBanner = banner.querySelector('.SWbannerInner')
    header.parentElement.insertBefore(banner, header)
    banner.innerHTML = `
        <div class="SWbannerInner">
            <i class="fa-solid fa-truck-fast" style="height: 20px;fill: white;margin-right: 10px;vertical-align: sub;"></i>
            <div>
                ${innerBanner.innerHTML}
            </div>
            <i class="fa-solid fa-truck-fast" style="height: 20px;fill: white;margin-left: 10px;vertical-align: sub;"
        </div>`
}, 250)