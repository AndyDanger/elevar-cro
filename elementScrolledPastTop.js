let elementTarget = document.querySelector(".add-to-cart-wrap > div > div");
elementTarget.classList.remove('tw-fixed')

window.addEventListener("scroll", function() {
  let elementTarget = document.querySelector(".add-to-cart-wrap > div > div");
  console.log(`window.scrollY: ${window.scrollY} - window.screen.height: ${window.screen.height} - elementTarget.offsetTop: ${elementTarget.offsetTop} - elementTarget.offsetHeight: ${elementTarget.offsetHeight}`)
  if ((window.scrollY + window.screen.height) > (elementTarget.offsetTop + elementTarget.offsetHeight + 150)) {
      elementTarget.classList.add('tw-fixed')
  }else {
    elementTarget.classList.remove('tw-fixed')
  }
});