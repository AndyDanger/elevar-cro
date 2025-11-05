window.viewedProducts = []
const lodashScript = document.createElement('script');
lodashScript.type = "text/javascript";
lodashScript.src = 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
lodashScript.addEventListener("load", function (event) {
    main()
});
document.getElementsByTagName('head')[0].appendChild(lodashScript);

const main = () => {
    // Options for the observer (which mutations to observe)
    const mutationObserverConfig = { attributes: false, childList: true, subtree: true, characterData: true, characterDataOldValue: true };

    // Callback function to execute when mutations are observed
    const mutationCallback = () => {
        console.log(`mutations occurred`)
        const unobservedProducts = document.querySelectorAll(`[href*="/product/"]:not(.alreadyObserved, .beingObserved), [href*="/products/"]:not(.alreadyObserved, .beingObserved)`)
        if (!unobservedProducts.length) return
        let newlyObservedProducts = 0
        unobservedProducts.forEach(product => {
            if (window.viewedProducts.includes(product.pathname)) {
                product.classList.add(`alreadyObserved`)
                return
            }
            product.classList.add(`beingObserved`)
            newlyObservedProducts++
            viewportObserver.observe(product)

        })
        console.log(`adding intersection observer to ${newlyObservedProducts} products`)

    };

    // Create an observer instance linked to the callback function
    const mutationObserver = new MutationObserver(_.debounce(mutationCallback, 250));

    // Start observing the target node for configured mutations
    mutationObserver.observe(document.body, mutationObserverConfig);

    const intersectionObserverConfig = {
        root: null,
        rootMargin: "0px",
        threshold: 0.80,
    };

    const intersectionCallBack = (entries, observer) => {
        entries.forEach((entry) => {
            if (window.viewedProducts.includes(entry.target.pathname)) return
            if (entry.isIntersecting) {
                // scrolled into view
                console.log(`scrolled into view`)
                entry.target.dataset.viewStatus = `scrolledIntoView`
                setTimeout(() => {
                    if (entry.target.dataset.viewStatus == `scrolledOutOfView`) return
                    entry.target.dataset.viewStatus = `eventSent`
                    console.log(`product seen in viewport`)
                    window.viewedProducts.push(entry.target.pathname)
                    const sameProductLinks = document.querySelectorAll(`[href*="${entry.target.pathname}"]`)
                    sameProductLinks.forEach(product => {
                        product.classList.add(`alreadyObserved`)
                        viewportObserver.unobserve(product)
                    })
                }, 250)
            } else {
                // scrolled out of view
                console.log(`scrolled out of view`)
                if (entry.target.dataset.viewStatus == `eventSent`) return
                entry.target.dataset.viewStatus = `scrolledOutOfView`
            }
        });
    };

    const viewportObserver = new IntersectionObserver(intersectionCallBack, intersectionObserverConfig);

    // Run this once on page load
    mutationCallback()
}
