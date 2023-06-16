let control = () => {

}

let variant1 = () => {
    let variantInterval = setInterval(() => {
        let swatches = document.querySelectorAll(`.swatch__item`)
        if (!swatches.length) return
        clearInterval(variantInterval)
        document.body.classList.add(`v1`)
        let defaultImageInterval = setInterval(() => {
            console.log(`looking for photo`)
            let photo = document.querySelector(`.slick-dots`) ? document.querySelector(`.slick-dots li:nth-child(3)`) : document.querySelector(`.slick-track .product__photo[data-image-id="20719556263959"]`)
            if (!photo) return
            clearInterval(defaultImageInterval)
            photo.click()
        }, 250)
        let swatch = swatches[0]
        if (swatch.classList.contains(`active`)) return
        swatch.querySelector(`a`).click()
        console.log(`clicking`)
    }, 250)
}

let variant2 = () => {
    let variantInterval = setInterval(() => {
        let swatches = document.querySelectorAll(`.swatch__item`)
        if (!swatches.length) return
        clearInterval(variantInterval)
        document.body.classList.add(`v2`)
        let defaultImageInterval = setInterval(() => {
            console.log(`looking for photo`)
            let photo = document.querySelector(`.slick-dots`) ? document.querySelector(`.slick-dots li:nth-child(3)`) : document.querySelector(`.slick-track .product__photo[data-image-id="20719751659543"]`)
            if (!photo) return
            clearInterval(defaultImageInterval)
            photo.click()
        }, 250)
        let swatch = swatches[1]
        if (swatch.classList.contains(`active`)) return
        swatch.querySelector(`a`).click()
        console.log(`clicking`)
    }, 250)
}

let variant3 = () => {
    let variantInterval = setInterval(() => {
        let swatches = document.querySelectorAll(`.swatch__item`)
        if (!swatches.length) return
        clearInterval(variantInterval)
        document.body.classList.add(`v3`)
        let defaultImageInterval = setInterval(() => {
            console.log(`looking for photo`)
            let photo = document.querySelector(`.slick-dots`) ? document.querySelector(`.slick-dots li:nth-child(3)`) : document.querySelector(`.slick-track .product__photo[data-image-id="20719736029207"]`)
            if (!photo) return
            clearInterval(defaultImageInterval)
            photo.click()
        }, 250)
        let swatch = swatches[2]
        if (swatch.classList.contains(`active`)) return
        swatch.querySelector(`a`).click()
        console.log(`clicking`)
    }, 250)
}

let variants = [control, variant1, variant2, variant3]

let main = () => {
    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`test_variant`)
    if (variant) {
        elevarSetCookie(`test_variant`, variant, 7)
    }
    let storageVariant = elevarGetCookie(`test_variant`) || 1 // default to variant 1
    let svg = `<svg class="logo" data-name="Layer 1" style="fill: white;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1232.87 260"><title>elevar-logo</title><path d="M132,0V.07A93.26,93.26,0,0,0,40.35,76a120,120,0,0,0-1.61,22.33v81.2c0,6.81.08,13.6-.94,20.36-2.12,14.05-8.12,28.43-19.38,37.59A35.39,35.39,0,0,1,2,245.06c-.33.05-1.74,0-1.93.27s0,.47,0,.57A29.46,29.46,0,0,0,0,249v11a92.71,92.71,0,0,0,45.63-12.22c13.86-7.91,25.65-19.59,32.66-34a71.76,71.76,0,0,0,7-27.24,93.48,93.48,0,0,1-27.12-4,93.29,93.29,0,0,0,56-35.22A90.79,90.79,0,0,0,132,93.07q0-12.41,0-24.82V26.41H262.22L274.18,0ZM85.36,142.21A10.19,10.19,0,1,1,95.54,132,10.19,10.19,0,0,1,85.36,142.21Z"></path><polygon points="802.17 27.33 771.59 27.33 831.41 159.35 838.32 159.35 862 159.35 869.04 159.35 928.87 27.33 898.14 27.33 850.16 133.23 802.17 27.33"></polygon><polygon points="501.62 132.95 501.62 159.35 609.56 159.35 609.56 132.95 528.02 132.95 528.02 27.33 501.62 27.33 501.62 132.95"></polygon><polygon points="462.01 132.95 379.81 132.95 379.81 106.55 462.01 106.55 462.01 80.14 379.81 80.14 379.81 53.73 462.01 53.73 462.01 27.33 353.4 27.33 353.4 53.73 353.4 80.14 353.4 106.55 353.4 132.95 353.4 159.35 462.01 159.35 462.01 132.95"></polygon><path d="M1001,53.45,1025,106.55H976.93Zm18-26.12H982.95l-59.82,132H953L965,133h72l12,26.4h29.88Z"></path><polygon points="636.58 27.33 636.58 159.35 636.58 159.35 745.19 159.35 745.19 132.95 662.98 132.95 662.98 106.55 745.19 106.55 745.19 80.14 662.98 80.14 662.98 53.73 745.19 53.73 745.19 27.33 636.58 27.33"></polygon><path d="M1193.26,53.74h-61V80.14h61a13.2,13.2,0,1,0,0-26.41m0-26.41a39.59,39.59,0,0,1,14.43,76.46l25.18,55.56H1203l-23.93-52.81h-46.8v52.81h-26.41v-132h87.4"></path><path d="M138.16,158.43A87.92,87.92,0,0,1,93.65,184.8l0,0h67.83a45,45,0,0,0,41-26.41Z"></path><path d="M158.12,105.62A87.5,87.5,0,0,1,152,132h62.31l12-26.41Z"></path><polygon points="158.38 52.81 158.38 79.22 238.29 79.22 250.26 52.81 158.38 52.81"></polygon></svg>`
    const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`

    let styles = [
        `color: white`,
        `background-color:#6354eb`,
        `background-image: url(${svgDataUrl})`,
        `font-size: 28px`,
        `margin: 0px auto`,
        `padding: 110px 10px 10px 10px`,
        `text-align: center`,
        `line-height: -40px`,
        `background-size: contain`,
        `background-position: center top`,
        `background-repeat: no-repeat`,
    ]

    console.log(`%c Debugging Preview Link: Variant ${storageVariant}`, styles.join(`;`))
    variants[storageVariant]() // call the variant's function
}

let elevarSetCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

let elevarGetCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

main()