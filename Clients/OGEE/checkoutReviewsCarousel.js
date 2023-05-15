let checkoutValuePropsInterval = setInterval(() => {
    let orderSummary = document.querySelector(`.order-summary__sections`)
    if (!orderSummary) return
    clearInterval(checkoutValuePropsInterval)

    let carouselHtml = `<div class="yotpo yotpo-reviews-carousel"  data-background-color="transparent"  data-mode="top_rated"  data-type="site"  data-count="9"  data-show-bottomline="1"  data-autoplay-enabled="1"  data-autoplay-speed="3000"  data-show-navigation="1">&nbsp;</div>`
    orderSummary.innerHTML += carouselHtml
    document.querySelector(`.main__content`).innerHTML += carouselHtml

    var e = document.createElement("script");
    e.type = "text/javascript", e.async = true, e.src = "//staticw2.yotpo.com/7VodKpu02UDnrkemILSlULj4cFvI8cuvOvSZ5uzr/widget.js";
    var t = document.getElementsByTagName("script")[0]; 
    t.parentNode.insertBefore(e, t)
}, 250)