let spinnerInterval = setInterval(() => {
    let image = document.querySelector(`#wr360holder:not(.hide-icon) #wr360image_wr360_player`)
    if (!image) return
    let match = image.src.match(/_(\d+)/)
    if (!match) return
    let count = parseInt(match[1])
    count++
    if (count > 60) {
        count = 0
    }
    image.src = image.src.replace(match[1], `00${count.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`)
}, 200)