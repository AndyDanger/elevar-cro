var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js'; // andrew@getelevar.com
document.head.appendChild(script);

if (window.location.pathname == `/`) {
    let homepagePayLaterInterval = setInterval(function () {
        let homepageIcons = document.querySelectorAll(`.display-table-cell`)
        if (!homepageIcons) {
            return
        }
        clearInterval(homepagePayLaterInterval)
        let newIcon = homepageIcons[0].cloneNode(true)
        homepageIcons[0].parentElement.insertBefore(newIcon, homepageIcons[0])
        newIcon.querySelector(`p`).innerText = `Buy Now, Pay Later`
        newIcon.querySelector(`svg`).outerHTML = `<svg id="creditCardIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z"/></svg>`
    }, 250)
}

let plpPayLaterInterval = setInterval(function () {
    let plpIcons = document.querySelectorAll(`.icon-item`)
    if (!plpIcons.length) {
        return
    }
    clearInterval(plpPayLaterInterval)
    let newIcon = plpIcons[0].cloneNode(true)
    plpIcons[0].parentElement.insertBefore(newIcon, plpIcons[0])
    newIcon.querySelector(`span`).innerText = `Buy Now, Pay Later`
    newIcon.querySelector(`svg`).outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168 336C181.3 336 192 346.7 192 360C192 373.3 181.3 384 168 384H120C106.7 384 96 373.3 96 360C96 346.7 106.7 336 120 336H168zM360 336C373.3 336 384 346.7 384 360C384 373.3 373.3 384 360 384H248C234.7 384 224 373.3 224 360C224 346.7 234.7 336 248 336H360zM512 32C547.3 32 576 60.65 576 96V416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H512zM512 80H64C55.16 80 48 87.16 48 96V128H528V96C528 87.16 520.8 80 512 80zM528 224H48V416C48 424.8 55.16 432 64 432H512C520.8 432 528 424.8 528 416V224z"/></svg>`
}, 250)