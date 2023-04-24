let valuePropsInterval = setInterval(() => {
    let descriptions = document.querySelectorAll(`.bundle-description, .bundle-description-mobile`)
    if (!descriptions.length) return
    clearInterval(valuePropsInterval)
    descriptions.forEach(description => {
        description.innerHTML = `
            💘 The Perfect Valentine's Day Gift
            <br>
            🕑 Limited Time Offer Ends On 2/14
        `
    })
}, 250)