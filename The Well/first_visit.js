var feature = window.__NUXT__.state.layouts.default.megaMenu.primaryItems.menuItem[0].highlightFeature
feature.text = 'Not Sure Where to Start?'
feature.linkText = "Find What You're Looking For"
feature.link = "https://www.the-well.com/new-york?first_visit=true"
feature.image.file.asset._ref = "14ed2482861bdd7b0804a28dfa6a8b41233ac44c-750x500-jpg"

var firstVisitMenuInterval = setInterval(function() {
    if (window.location.href == 'https://www.the-well.com/new-york' && document.querySelector('#firstVisitBanner')) {
        location.reload()
    }

    var section = document.querySelector('.c-sidebarNavigation__primary')
    if (!section || document.querySelector('#firstVisitLink')) {
        return
    }
    var mobileSection = document.createElement('div')
    mobileSection.innerHTML = `<div class="c-megaMenu__group c-megaMenu__group--highlightFeature"><div><img src="https://cdn.the-well.com/images/tl1ni0e8/production/14ed2482861bdd7b0804a28dfa6a8b41233ac44c-750x500.jpg?w=400&amp;q=80&amp;fm=jpg" class="c-photo c-photo--megaMenu ls-is-cached lazyloaded"></div> <p>
          Not Sure Where to Start?
        </p> <a id="firstVisitLink" href="https://www.the-well.com/new-york?first_visit=true" class="c-anchor c-anchor--primaryArrow c-megaMenu__link"><!---->
  Find What You're Looking For
  <span class="c-anchor__iconAfter c-icon">
<svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.9996 1.34315L20.6565 7L14.9996 12.6569" stroke="currentColor"></path>
  <path d="M0 7H20" stroke="currentColor"></path>
</svg>
</span> </a></div>`
    section.append(mobileSection)
}, 250)


var firstVisitInterval = setInterval(function() {
    var mainCarousel = document.querySelector('.c-carouselHero1__main')
    if (!mainCarousel || window.location.href.indexOf('first_visit=true') < 0) {
        return
    }
    clearInterval(firstVisitInterval)

    mainCarousel.innerHTML = `<div id="firstVisitBanner">
  <div class="c-carouselHero1__mainBody c-richText c-richText--isNaked"><div class="c-richText__wrapper"><p>Your First Visit</p><h1>Integrated health offerings, catered to your needs</h1></div></div>
  <button class="c-carouselHero1__mainButton c-button c-button--primary c-button--primary"><span class="c-button__text">Explore Services</span></button>
  
</div>`

    document.querySelector('#firstVisitBanner button').addEventListener('click', function() {
        document.querySelector('.c-heading').scrollIntoView({ behavior: "smooth" })
    })

    document.querySelector('#firstVisitBookNow button').addEventListener('click', function() {
        window.location.href = 'https://www.the-well.com/virtual/book-health-coaching-consultation-virtual';
    })

}, 250)