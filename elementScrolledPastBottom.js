window.addEventListener("scroll", function () {
  let elementTarget = document.querySelector(".add-to-cart-wrap > div > div");
  console.log(`window.scrollY: ${window.scrollY} - elementTarget.offsetHeight: ${elementTarget.offsetHeight}`)
  if (window.scrollY > (elementTarget.offsetHeight + 20)) {
    elementTarget.classList.add('tw-fixed')
  } else {
    elementTarget.classList.remove('tw-fixed')
  }
});