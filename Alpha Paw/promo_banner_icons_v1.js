var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);


var promoBannerV1Interval = setInterval(function() {
    var promoBar = document.querySelector('.announcement-bar__message')
    if (!promoBar) {
        return
    }
    clearInterval(promoBannerV1Interval)

    var currentPaws = document.querySelectorAll('.fa-paw')
    currentPaws.forEach(function(paw){
        paw.remove()
    })

    var newDiv = document.createElement('i')
    newDiv.className = "fa-solid fa-paw"
    promoBar.parentElement.insertBefore(newDiv, promoBar)
    promoBar.parentElement.append(newDiv.cloneNode(true))
}, 250)