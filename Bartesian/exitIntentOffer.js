function exitIntentFunction() {
    if (window.location.pathname.includes(`winter-bundle`)
        && !window.location.pathname.includes(`winter-bundle-2`)
        && !window.location.href.includes(`prevent_redirect=true`)) {
        if (window.location.href.includes(`en-ca`)) {
            window.location.pathname = `/en-ca/collections/winter-bundle-2`
            return
        }
        window.location.pathname = `/collections/winter-bundle-2`
    }

    let exitIntentInterval = setInterval(() => {
        let mainBanner = document.querySelector(`.hero`)
        if (!mainBanner) return
        clearInterval(exitIntentInterval)
        mainBanner.innerHTML = `
        <a class="newBanner" href="https://bartesian.com/collections/winter-bundle-2">
            <div class="absoluteWrapper">
                <div class="bannerWrapper">
                    <div class="bannerHeader">
                        Bring the Cocktail Lounge Home
                    </div>
                    <div class="bannerText">
                        The Bartesian® cocktail maker freshly crafts your favorite cocktails at the touch of a button. No recipes, no mixing, no cleanup.
                    </div>
                    <div class="bannerButton">
                        SHOP THE BARTESIAN
                    </div>
                </div>
            </div>
            <img class="small-hide" src="https://i.imgur.com/JdEDh38.jpg" style="width: 100%;">
            <img class="medium-hide large-up-hide" src="https://i.imgur.com/aDjfLaE.jpg" style="width: 100%;">
        </a>
    `
    }, 250)
}

exitIntentFunction()