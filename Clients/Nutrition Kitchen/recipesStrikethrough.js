clearInterval(strikeIngredientsInterval)
window.preventClick = false
var strikeIngredientsInterval = setInterval(function () {
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
    let ingredentArraysArray = []
    let mostIngredients = []
    ingredientNodes.forEach(function (node) {
        var ingredientsArray = node.innerText.split(/,\s+/).sort()
        ingredentArraysArray.push(ingredientsArray)
        if (ingredientsArray.length > mostIngredients.length) {
            mostIngredients = ingredientsArray
        }
    })

    ingredentArraysArray.forEach((array, index) => {
        let html = mostIngredients.map(ingredient => {
            return array.includes(ingredient) ? `<p>${ingredient}, </p>` : `<p class="strike-through">${ingredient}, </p>`
        })
        ingredientNodes[index].innerHTML = html.join('').replace(new RegExp(', $'), '');
    })

}, 250)