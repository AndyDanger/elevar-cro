var moveUpCheckoutInterval = setInterval(function() {

    var updateButton = document.querySelector('.update-cart')
    var clearButton = document.querySelector('.clear-button')
    var checkoutButton = document.querySelector('.checkout-button')
    if (!updateButton || !clearButton || !checkoutButton) {
      return
    }
      clearInterval(moveUpCheckoutInterval)
      
      clearButton.innerText = "Clear Cart"
      
      clearButton.parentElement.insertBefore(updateButton, clearButton)
      var newProductSampler = document.querySelector('.new--product-sampler')
      newProductSampler.parentElement.insertBefore(checkoutButton, newProductSampler)

    }, 250)