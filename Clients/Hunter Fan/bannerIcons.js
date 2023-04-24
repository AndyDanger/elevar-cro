let script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/955c376981.js'; // andydangermarshall@gmail.com
document.head.appendChild(script);

let topBannerInterval = setInterval(function () {
    let banner = document.querySelector('.announcement-bar__message')
    if (!banner) {
        return
    }
    clearInterval(topBannerInterval)
    // do something with buttons
    // let header = document.querySelector('#shopify-section-header .top-header')
    // let innerBanner = banner.querySelector('.SWbannerInner')
    // header.parentElement.insertBefore(banner, header)
    banner.innerHTML = `
        <div class="SWbannerInner">
            <i class="fa-solid fa-lightbulb" style="height: 20px;fill: white;margin-right: 10px;vertical-align: sub;"></i>
            <div>
                ${banner.innerHTML}
            </div>
            <i class="fa-solid fa-lightbulb" style="height: 20px;fill: white;margin-left: 10px;vertical-align: sub;"
        </div>`
}, 250)