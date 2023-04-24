var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);


var navigationDropdownsInterval = setInterval(function() {
    var buttons = document.querySelectorAll(`[x-show="$store.mainNav.active == 'mobileNav'"] button`)
    if (!buttons.length || document.querySelector('[nav-index]')) {
        return
    }
    clearInterval(navigationDropdownsInterval)
    var productCards = document.querySelectorAll('.header-v2-main-nav .tw-grid.tw-relative')
    buttons.forEach(function(button, index) {
        button.removeAttribute('@click')
        button.innerHTML += `<i class="fa-solid fa-chevron-down" nav-index="${index}"></i>`

        button.parentNode.insertBefore(productCards[index], button.nextSibling);
        $(productCards[index]).wrap(`<div class='dropdownWrapper' nav-index='${index}'></div>`)
        button.setAttribute('nav-index', index)
            //productCards[index].setAttribute('nav-index', index)
        button.addEventListener('click', function() {
            var navIndex = this.getAttribute('nav-index')
            $(`div[nav-index="${navIndex}"]`).slideToggle()
            $(`i[nav-index="${navIndex}"]`).toggleClass('fa-chevron-down').toggleClass('fa-chevron-up')
        })
    })

}, 250)