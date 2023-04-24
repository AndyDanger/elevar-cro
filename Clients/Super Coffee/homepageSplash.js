var array = [
    {
        text: 'Ready to Drink',
        link: 'https://drinksupercoffee.com/products/ready-to-drink/'
    },
    {
        text: 'Creamer',
        link: 'https://drinksupercoffee.com/products/creamer/'
    },
    {
        text: 'Grounds',
        link: 'https://drinksupercoffee.com/products/grounds/'
    },
    {
        text: 'Pods',
        link: 'https://drinksupercoffee.com/products/pods/'
    },
]
var splashInterval = setInterval(function () {
    var splash = document.querySelector('.subscription-builder:not(.moved)')
    if (!splash) {
        return
    }
    // clearInterval(splashInterval)
    // do something with buttons
    var clone = splash.cloneNode(true)
    clone.id = "movedSubscriptionBuilder"
    clone.classList.add('moved')
    splash.parentElement.insertBefore(splash, document.querySelector('.benefits'))
    var buttons = splash.querySelectorAll('.cat-selection button.no-fill')
    buttons.forEach(function(button, index) {
        button.outerHTML = `<a class="btn no-fill" href="${array[index].link}">${array[index].text}</a>`
    })
}, 250)
