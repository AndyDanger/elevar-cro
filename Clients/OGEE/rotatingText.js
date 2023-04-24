let rotatingTextInterval = setInterval(() => {
    let imageSlider = document.querySelector(`product-images-slider`)
    if (!imageSlider) return
    clearInterval(rotatingTextInterval)
    let rotatingStickerDiv = document.createElement(`div`)
    rotatingStickerDiv.className = `rotatingStickerDiv`
    rotatingStickerDiv.innerHTML = `
    <style>

        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

    </style>
    <div style="position: relative;">
        <svg id="rotating-text" viewBox="0 0 500 500">
            <defs>
                <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                    id="circle">
                </path>
            </defs>
            <text dy="70">
                <textPath xlink:href="#circle">BEYOND CLEAN BEAUTY ⭐ BEST SELLER ⭐</textPath>
            </text>
        </svg>
        <img src="https://cdn.shopify.com/s/files/1/0007/9858/8989/files/ogee-logo-luxury-organics-dark-grey-emails_140x.png?v=1625773146">
    </div>`
    imageSlider.append(rotatingStickerDiv)

}, 250)