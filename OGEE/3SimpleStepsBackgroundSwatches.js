if (window.location.href.includes('variant=hearts')) {
    let insertSwatchesInterval = setInterval(function () {
        let sections = document.querySelectorAll(`.shg-c > .shg-row`)
        if (!sections.length) {
            return
        }
        clearInterval(insertSwatchesInterval)
        // do something with buttons

        let styleElement = document.createElement(`style`)
        styleElement.innerHTML = `
            @media only screen and (max-width: 767px) {
                #s-7ee783f5-ed64-456d-8969-828b63a715f7 {
                    margin-right: 0px !important
                }

                #s-727086b2-defb-4a7c-b78f-bb390b8e482b {
                    margin-left: 0px !important;
                }
            
                [id="s-531e199d-9caa-4499-8ab8-539b8b3d419c"]>.shg-row>.shg-c-xs-6, 
                [id="s-0498ffda-5d86-488d-b1c7-8a9fc1841b27"]>.shg-row>.shg-c-xs-6,
                [id="s-559e30e7-f6c0-4f93-9811-198f8ad0dd03"]>.shg-row>.shg-c-xs-6
                 {
                    width: 100% !important;
                }
            }
        `
        document.body.append(styleElement)

        let firstTextDiv = document.createElement(`div`)
        firstTextDiv.className = `textDiv`
        sections[0].parentElement.append(firstTextDiv)
        sections[0].firstElementChild.querySelectorAll(`div.shg-c`).forEach(thing => {
            firstTextDiv.append(thing)
        })
        let bronzeSwatch = document.createElement('img')
        bronzeSwatch.id = `bronzeSwatch`
        bronzeSwatch.className = `heartSwatch`
        bronzeSwatch.src = `https://i.imgur.com/2zrF0pu.jpg`
        sections[0].firstElementChild.append(bronzeSwatch)

        let secondTextDiv = document.createElement(`div`)
        secondTextDiv.className = `textDiv`
        sections[1].parentElement.append(secondTextDiv)
        sections[1].lastElementChild.querySelectorAll(`div.shg-c`).forEach(thing => {
            secondTextDiv.append(thing)
        })

        let blushSwatch = document.createElement('img')
        blushSwatch.id = `blushSwatch`
        blushSwatch.className = `heartSwatch`
        blushSwatch.src = `https://i.imgur.com/xed5o8F.jpg`
        sections[1].lastElementChild.append(blushSwatch)
        sections[1]

        let thirdTextDiv = document.createElement(`div`)
        thirdTextDiv.className = `textDiv`
        sections[2].parentElement.append(thirdTextDiv)
        sections[2].firstElementChild.querySelectorAll(`div.shg-c`).forEach(thing => {
            thirdTextDiv.append(thing)
        })

        let highlightSwatch = document.createElement('img')
        highlightSwatch.id = `highlightSwatch`
        highlightSwatch.className = `heartSwatch`
        highlightSwatch.src = `https://i.imgur.com/VYTt3OV.jpg`
        sections[2].firstElementChild.append(highlightSwatch)
    }, 250)

} else {
    let insertSwatchesInterval = setInterval(function () {
        let sections = document.querySelectorAll(`.shg-c > .shg-row`)
        if (!sections.length) {
            return
        }
        clearInterval(insertSwatchesInterval)
        // do something with buttons
        sections[0].parentElement.classList.add('bronzeSection')
        sections[1].parentElement.classList.add('blushSection')
        sections[2].parentElement.classList.add('highlightSection')

    }, 250)
}
