var mobileMenuPromoInterval = setInterval(function () {
    var menu = document.querySelector('#shopify-section-gl_mobile_menu')
    if (!menu) {
        return
    }
    clearInterval(mobileMenuPromoInterval)
    // do something with buttons
    var link = document.createElement('a')
    link.id = `mobileMenuInsert`
    link.href = 'https://mtnops.com/pages/hunt'
    link.innerHTML = `
        <div class="slide-content" style="display: flex; flex-direction: column; align-items: center;">
            <img src="https://cdn.shopify.com/s/files/1/2786/4584/files/11-2-22-PheasantHuntLogo2022.svg?v=1667237970" alt="">
            <button class="mtnops-btn">LEARN HOW TO ENTER</button>
        </div>`

    if (window.location.href.includes('variant=product')) {
        link.href = `https://mtnops.com/products/ignite`
        link.innerHTML = `
            <img src="//cdn.shopify.com/s/files/1/2786/4584/products/BugleBerry-Ignite-45Serving-Splash-Web_5b0291d2-a56c-4491-9485-fd0901c2f68b_600x.png?v=1667338789">
            <h3>IGNITE</h3>
            <button class="mtnops-btn-sm" style="background: #ff5100;">BUY NOW</button>`
    }
    menu.append(link)
}, 250)