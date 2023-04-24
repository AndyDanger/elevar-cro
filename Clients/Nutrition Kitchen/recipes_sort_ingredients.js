clearInterval(sortIngredientsInterval)
window.preventClick = false
var sortIngredientsInterval = setInterval(function () {
    var modal = document.querySelector('#ProductSection-')
    if (!modal) {
        window.preventClick = false
        return
    }

    if (window.preventClick) {
        return
    }

    window.preventClick = true
    var ingredientNodes = document.querySelectorAll('.product__ingredients p')
    ingredientNodes.forEach(function (node) {
        var ingredientsArray = node.innerText.split(/,\s+/)
        node.innerText = ingredientsArray.sort().join(', ')
    })


}, 250)