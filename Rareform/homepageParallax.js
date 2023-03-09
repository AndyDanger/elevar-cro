var index = 0
var lastScrollTop = 0;
window.preventClick = false
window.locked = false
var timer = null;
$(document).bind('scroll', function () {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
          // do something
          var st = $(this).scrollTop();
          var scrollingDown = false
          if (st > lastScrollTop) {
              scrollingDown = true
          }
          lastScrollTop = st;
          // console.log('bind')
          checkStuff(scrollingDown)
    }, 100);
})

function checkStuff(scrollingDown) {
    if (window.preventClick) {
        return
    }
    var scrollTop = $(document).scrollTop()
    var element = $('[id*="shop-by-type"]')
    var elementTop = element.position().top
    var withinRange = (scrollTop + 205 > elementTop && scrollTop < elementTop + 205)
    console.log(`SCROLL: ${scrollTop}`)
    console.log(`ELEMENT: ${elementTop}`)
    console.log(`WITHIN RANGE: ${withinRange}`)
    var navItems = document.querySelectorAll('.index-shop-type-nav__item')
    navItems.forEach(function(navItem, i) {
        if (navItem.querySelector('.active')) {
            index = i
        }
    })

    if ((index >= 3 && scrollingDown) || (index == 0 && !scrollingDown)) {
        window.locked = false
        enableScroll()
    } else if (withinRange) {
        window.scrollTo(0, elementTop)
        console.log(`disabling: ${index}`)
        disableScroll()
        window.preventClick = true
        setTimeout(function () {
            window.preventClick = false
        }, 500)
        if (!window.locked) {
            window.locked = true
            return
        }

        index = scrollingDown ? index + 1 : index - 1
        element.find('a.index-shop-type-nav__link').eq(index)[0].click()
    }
}


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    console.log('preventing')
    console.log(e)
    var scrollingDown = e.deltaY > 0
    console.log(scrollingDown)
    var element = $('[id*="shop-by-type"]')
    var elementTop = element.position().top
    window.scrollTo(0, elementTop)
    checkStuff(scrollingDown)
    window.locked ? e.preventDefault() : null
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}