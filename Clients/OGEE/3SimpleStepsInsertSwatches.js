let insertSwatchesInterval = setInterval(function () {
    let sections = document.querySelectorAll(`.shg-c > .shg-row`)
    if (!sections.length) {
        return
    }
    clearInterval(insertSwatchesInterval)
    // do something with buttons
    let bronzeSwatch = document.createElement('img')
    bronzeSwatch.id = `bronzeSwatch`
    bronzeSwatch.className = `heartSwatch`
    bronzeSwatch.src = `https://i.imgur.com/2zrF0pu.jpg`
    sections[0].firstElementChild.append(bronzeSwatch)

    let blushSwatch = document.createElement('img')
    blushSwatch.id = `blushSwatch`
    blushSwatch.className = `heartSwatch`
    blushSwatch.src = `https://i.imgur.com/xed5o8F.jpg`
    sections[1].lastElementChild.append(blushSwatch)

    let highlightSwatch = document.createElement('img')
    highlightSwatch.id = `highlightSwatch`
    highlightSwatch.className = `heartSwatch`
    highlightSwatch.src = `https://i.imgur.com/VYTt3OV.jpg`
    sections[2].firstElementChild.append(highlightSwatch)
}, 250)
