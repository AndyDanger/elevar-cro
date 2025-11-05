// Select the node that will be observed for mutations
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true, characterData: true, characterDataOldValue: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
            console.log(`The ${mutation.attributeName} attribute was modified.`);
        } else if (mutation.type === "characterData") {
            console.log(`The ${mutation} characterData was modified.`);
        }
        console.log(mutation)
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);