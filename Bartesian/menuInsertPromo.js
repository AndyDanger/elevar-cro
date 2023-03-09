let menuInsertPromoInterval = setInterval(() => {
    let menu = document.querySelector(`.menu-drawer__navigation`)
    if (!menu) return
    clearInterval(menuInsertPromoInterval)
    let mobileMenuPromo = document.createElement(`div`)
    mobileMenuPromo.id = `mobileMenuPromo`
    mobileMenuPromo.innerHTML = `
        <a href="https://bartesian.com/collections/valentines-day">
            <img src="https://cdn.shopify.com/s/files/1/0038/6049/6433/files/valentine-bartesian-slider-0.png" />
            <div>
                💘 Free choice of cocktails with your purchase
                <br>
                🚛 Ships Free & Fast
                <br>
                🕑 Offer Ends On 2/14
            </div>
            <div class="button button--primary button--full-width">GET YOURS NOW</div>
        </a>
    `
    menu.parentElement.append(mobileMenuPromo)
}, 250)