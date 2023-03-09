clearInterval(subscriptionUpsellInterval)
var subscriptionUpsellInterval = setInterval(function () {
    var checkoutButton = document.querySelector('.grow-aov__checkout-button')
    var clickableButtons = document.querySelectorAll('.grow-aov__item-switcher-clickable')
    if (!checkoutButton || !clickableButtons.length) {
        return
    }

    var checkmarks = document.querySelectorAll('.grow-aov__item-switcher .grow-aov__icon--checkmark')
    var htmlString = `<input type="checkbox" checked />You're Saving 25% by Subscribing!`
    window.enable = false
    if (clickableButtons.length > checkmarks.length) {
        htmlString = `<input type="checkbox" />Subscribe Now to Save 25%`
        window.enable = true
    }


    var upsellDiv = document.querySelector('.upsellDiv')
    if (!upsellDiv) {
        upsellDiv = document.createElement('div')
        upsellDiv.className = "upsellDiv"
        checkoutButton.parentElement.append(upsellDiv)

        upsellDiv.addEventListener('click', function () {
            triggerClick(0, window.enable)
        })
    }
    upsellDiv.innerHTML = htmlString



}, 250)


function triggerClick(index, enable) {
    console.log(`triggerClick ${index} ${enable}`)
    var clickableButtons = document.querySelectorAll('.grow-aov__item-switcher-clickable')
    if (index >= clickableButtons.length) {
        return
    }

    if (document.querySelector('.grow-aov__body--disable-buttons')) {
        setTimeout(function () {
            triggerClick(index, enable)
        }, 50)
        return
    }

    var controls = document.querySelectorAll('.grow-aov__item-switcher-control')
    if ((enable && !controls[index].querySelector('.grow-aov__icon--checkmark')) || (!enable && controls[index].querySelector('.grow-aov__icon--checkmark'))) {
        clickableButtons[index].click()
    }

    var triggerClickInterval = setInterval(function () {
        var controls = document.querySelectorAll('.grow-aov__item-switcher-control')
        if ((enable && !controls[index].querySelector('.grow-aov__icon--checkmark')) || (!enable && controls[index].querySelector('.grow-aov__icon--checkmark'))) {
            return
        }
        console.log(`clearing ${index} ${enable}`)
        clearInterval(triggerClickInterval)
        triggerClick(index + 1, enable)
    }, 250)

}