var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script);

var mobileNavInterval = setInterval(function () {
  var newMobileNav = document.querySelector('#newMobileNav')
  var wrapper = document.querySelector('#mobile-menu--wrapper')
  if (!newMobileNav || !wrapper || !wrapper.getAttribute('style') || typeof $ == "undefined") {
    return
  }
  clearInterval(mobileNavInterval)

  setTimeout(function () {
    var leftMenu = document.querySelector('#main-navigation .left')
    var hammyMenu = document.querySelector('#mobile-menu-hammy')
    var clone = hammyMenu.cloneNode(true)
    clone.id = "newMobileMenuHammy"
    leftMenu.parentElement.insertBefore(clone, leftMenu)
    clone.addEventListener('click', function () {
      hammyMenu.click()
    })
    $('#navShopButton').on('click', function () {
      $('#navShopList').slideToggle()
      $(this).find('.dd-arrow').toggleClass('arrowFlipped');
    })

    $('#navLearnButton').on('click', function () {
      $('#navLearnList').slideToggle()
      $(this).find('.dd-arrow').toggleClass('arrowFlipped');
    })

    $('#mobile-tiles-slider, .tiles-nav').wrapAll( "<div id='newWrapper' />");
    $('#newWrapper').insertBefore('#insertSlider')
  }, 1000);

}, 250)