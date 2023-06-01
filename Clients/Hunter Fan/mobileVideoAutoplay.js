let mobileVideoInterval = setInterval(() => {
    let hero = document.querySelector(`#shopify-section-5c2b5ae0-77f8-48c6-bed6-a459e9b85e31 .image-and-text-3__column.image-and-text-3__image`)
    if (!hero || typeof ga !== `function` || typeof ga.getAll !== `function`) return
    clearInterval(mobileVideoInterval)
    hero.innerHTML = `<div class="overlay"></div><video autoplay loop muted playsinline id="mobileVideo" src="https://cdn.shopify.com/videos/c/o/v/fb35b40e4e8a4e9f9dc013d03fe6834b.mp4"></video>`

    let tracker = ga.getAll().find(tracker => tracker.model.data.ea[':trackingId'] == 'UA-16414780-1') // insert their UA number here
    let video = document.querySelector('#mobileVideo');
    video.addEventListener(`play`, (event) => {
        // alert(`video played`)
        if (!tracker) return
        tracker.send('event', 'homepage', 'mobile video played', window.location.href, { 'nonInteraction': 1 }) // replace event category and event action
    })
    let promise = video.play();

    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay started!
            // alert(`autoplayed`)
            if (!tracker) return
            tracker.send('event', 'homepage', 'mobile video autoplayed', window.location.href, { 'nonInteraction': 1 }) // replace event category and event action
        }).catch(error => {
            // Autoplay not allowed!
            // alert(`couldn't autoplay`)

            if (!tracker) return
            tracker.send('event', 'homepage', 'mobile video disabled', window.location.href, { 'nonInteraction': 1 }) // replace event category and event action
        });
    }

}, 250)