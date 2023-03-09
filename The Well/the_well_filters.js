var filtersInterval = setInterval(function() {
    var checkboxes = document.querySelectorAll('.filtersDivCheckbox > input')
    if (checkboxes.length < 1) {
        return
    }
    clearInterval(filtersInterval)
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', checkboxChanged)
    })

    function checkboxChanged() {
        var products = document.querySelectorAll('.c-collectionProducts__item')
        var wrappers = document.querySelectorAll('.c-collectionProducts__wrapper')
        var checkboxes = document.querySelectorAll('.filtersDivCheckbox > input')
        var countChecked = 0
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                countChecked++
            }
        })

        if (countChecked == 0 || countChecked == 4) {
            wrappers.forEach(function(wrapper) {
                wrapper.style.display = "block"
            })
            products.forEach(function(product) {
                product.style.display = "block"
            })
            return
        }


        products.forEach(function(product) {
            var price = parseInt(product.querySelector('.c-productsBox1__price').innerText.replaceAll(/\$|,/g, ''))
            var display = "block"
            checkboxes.forEach(function(checkbox) {
                if (!checkbox.checked && price >= checkbox.getAttribute('minprice') && price <= checkbox.getAttribute('maxPrice')) {
                    display = 'none'
                }
            })
            product.style.display = display
        })

        wrappers.forEach(function(wrapper) {
            var wrapperProducts = wrapper.querySelectorAll('.c-collectionProducts__item')
            var wrapperDisplay = "none"
            wrapperProducts.forEach(function(wrapperProduct) {
                if (wrapperProduct.style.display !== "none") {
                    wrapperDisplay = "block"
                }
            })
            wrapper.style.display = wrapperDisplay
        })
    }
    setInterval(checkboxChanged, 1000)

}, 200)

var tabsInterval = setInterval(function() {
    // var priceTab = document.querySelector('#priceTab')
    var tabs = document.querySelectorAll('.c-collectionFilter1__tab')
        // var pricePanel = document.querySelector('#pricePanel')
    var panels = document.querySelectorAll('.c-collectionFilter1__panel')
    if (tabs.length < 3) {
        return
    }
    clearInterval(tabsInterval)

    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            tabs.forEach(function(innerTab) {
                innerTab.classList.remove('c-collectionFilter1__tab--isActive')
            })
            panels.forEach(function(panel) {
                panel.classList.remove('c-collectionFilter1__panel--isActive')
            })
            tabs[index].classList.add('c-collectionFilter1__tab--isActive')
            panels[index].classList.add('c-collectionFilter1__panel--isActive')
        })
    })

}, 300)