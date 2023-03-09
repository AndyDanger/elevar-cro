clearInterval(cutOffInterval)
var cutOffInterval = setInterval(function () {
  var topBanner = document.querySelector('.info-bar__message')
  if (!topBanner) {
    return
  }
  var languageSelector = document.querySelector('.info-bar__message .weglot-container')
  if (languageSelector) {
    var languageSelectorClone = languageSelector.cloneNode(true)
    var countrySwitcher = document.querySelector('.nav--mobile .country-switcher')
    var footerSecondary = document.querySelector('.footer__secondary')
    languageSelector.id = "languageSelector"
    languageSelectorClone.id = "languageSelectorClone"
    footerSecondary.parentElement.insertBefore(languageSelector, footerSecondary)
    countrySwitcher.parentElement.insertBefore(languageSelectorClone, countrySwitcher)
    var links = languageSelector.querySelectorAll('a')
    var clonedLinks = languageSelectorClone.querySelectorAll('a')
    clonedLinks.forEach((clonedLink, index) => {
      clonedLink.addEventListener('click', function() {
        links[index].click()
      })
    })
  }

  var hongKongDate = new Date();
  hongKongDate.setHours(hongKongDate.getHours() + (hongKongDate.getTimezoneOffset() / 60) + 8)

  var nextFridayDate = getNextFriday(hongKongDate)
  nextFridayDate.setHours(12, 0, 0)
  var delta = Math.abs(nextFridayDate - hongKongDate) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60; // in theory the modulus is not required

  var topBannerCutOff = document.querySelector('#topBannerCutOff') || document.createElement('div')
  topBannerCutOff.id = "topBannerCutOff"
  topBannerCutOff.innerText = `Order before our weekly cut off in ${days} days, ${hours} hours, ${minutes} minutes, ${Math.floor(seconds)} seconds.`
  topBanner.append(topBannerCutOff)

  var footerThing = document.querySelector('.card__wrap .card__footer')
  if (!footerThing) {
    return
  }

  var checkoutCutOff = document.querySelector('#checkoutCutOff') || document.createElement('div')
  checkoutCutOff.id = "checkoutCutOff"
  checkoutCutOff.innerText = `To confirm these menu choices, order before our weekly cut off in ${days} days, ${hours} hours, ${minutes} minutes, ${Math.floor(seconds)} seconds.`
  footerThing.append(checkoutCutOff)

}, 1000)


function getNextFriday(date = new Date()) {
  const dateCopy = new Date(date.getTime());

  const nextFriday = new Date(
    dateCopy.setDate(
      dateCopy.getDate() + ((7 - dateCopy.getDay() + 5) % 7 || 7),
    ),
  );

  return nextFriday;
}