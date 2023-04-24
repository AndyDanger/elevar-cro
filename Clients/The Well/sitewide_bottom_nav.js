var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);

var bottomStickyNavInterval = setInterval(function() {
    var links = document.querySelectorAll("#bottomNav a")
    if (!links) {
        return
    }
    clearInterval(bottomStickyNavInterval)
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            var trackers = ga.getAll()
            trackers[0].send('event', 'navigation', 'bottom nav', this.innerText)
        })
    })
}, 250)