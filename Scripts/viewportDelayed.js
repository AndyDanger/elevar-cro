// Select the node that will be observed for mutations
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true, characterData: true, characterDataOldValue: true };

window.mutationsWaitingToBeProcessed = true

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    window.mutationsWaitingToBeProcessed = true
    console.log(`mutations occurred`)
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// window.addEventListener(`click`, () => {
//     window.mutationsWaitingToBeProcessed = true
//     console.log(`click occurred`)
// })

// window.addEventListener(`touchstart`, () => {
//     window.mutationsWaitingToBeProcessed = true
//     console.log(`touchstart occurred`)
// })

const processingInterval = setInterval(() => {
    if (!window.mutationsWaitingToBeProcessed) return
    window.mutationsWaitingToBeProcessed = false
    const unprocessedProducts = document.querySelectorAll(`[href*="/product/"]:not(.processed), [href*="/products/"]:not(.processed)`)
    if (!unprocessedProducts.length) return
    console.log(`processing ${unprocessedProducts.length} products`)
    unprocessedProducts.forEach(product => {
        product.classList.add(`processed`)
        viewportObserver.observe(product);
    })
}, 500)

const options = {
    root: null,
    rootMargin: "0px",
    threshold: .80,
};

const intersectionCallBack = (entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        console.log(`product seen in viewport`)
        viewportObserver.unobserve(entry.target)
    });
};

const viewportObserver = new IntersectionObserver(intersectionCallBack, options);
