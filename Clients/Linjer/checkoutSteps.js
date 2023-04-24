var checkoutStepsInterval = setInterval(function () {
    var steps = document.querySelector('[aria-label="Breadcrumb"]')
    if (!steps) {
        return
    }
    clearInterval(checkoutStepsInterval)
    // do something with buttons

    var url = new URL(window.location.href)
    var stepParam = url.searchParams.get('step')
    var step = 1
    switch (stepParam) {
        case "payment_method":
            step = 3
            break;
        case "shipping_method":
            step = 2
            break;
        default:
            step = 1
    }

    var links = []
    steps.querySelectorAll('li').forEach(function (list) {
        var link = list.querySelector('a')
        links.push(link ? link.href : '')
    })

    
    var bubblesDiv = document.createElement('div')
    bubblesDiv.className = "bubbles"
    bubblesDiv.innerHTML =  `
        <div class="step">
            <div class="bubble">&#10004;&#xFE0E;</div><div class="checkoutStep">CART</div>
        </div>
        <div class="divider"></div>
        <a class="step ${links[0] ? '' : 'linkDisabled'}" href="${links[0]}">
            <div class="bubble">2</div><div class="checkoutStep">INFORMATION</div>
        </a>
        <div class="divider"></div>
        <a class="step ${links[1] ? '' : 'linkDisabled'}" href="${links[1]}">
            <div class="bubble">3</div><div class="checkoutStep">SHIPPING</div>
        </a>
        <div class="divider"></div>
        <a class="step ${links[2] ? '' : 'linkDisabled'}" href="${links[2]}">
            <div class="bubble">4</div><div class="checkoutStep">PAYMENT</div>
        </a>
        <div class="divider"></div>
        <div class="step">
            <div class="bubble">5</div><div class="checkoutStep">COMPLETE</div>
        </div>
    `

    document.body.insertBefore(bubblesDiv, document.querySelector('aside[role="complementary"]'))

    document.querySelectorAll('.bubble').forEach(function (bubble, index) {
        if (index < step) {
            bubble.classList.add('completed')
        } else if (index == step) {
            bubble.classList.add('current')
        } else {
            bubble.classList.add('incomplete')
        }
    })

}, 250)
