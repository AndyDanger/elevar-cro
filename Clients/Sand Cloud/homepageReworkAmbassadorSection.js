let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    let ambassadorSection = document.querySelector(`[data-comp="half-media"]:not(.swapped)`)
    if (!ambassadorSection || !ambassadorSection.querySelector(`source`)) return
    ambassadorSection.classList.add(`swapped`)
    let images = ambassadorSection.querySelectorAll(`[data-comp="Image"] source`)
    images.forEach(image => {
        image.src = `https://cdn.shopify.com/s/files/1/0819/9793/files/crfimage_5.5_768x_crop_center@2x.progressive.jpg?v=1651795253`
        image.srcset = `https://cdn.shopify.com/s/files/1/0819/9793/files/crfimage_5.5_768x_crop_center@2x.progressive.jpg?v=1651795253`
    })
    ambassadorSection.querySelector(`h2`).innerText = `Our Mission`
    ambassadorSection.querySelector(`h3`).innerText = `To save marine life. 10% of profits go toward marine conservation.`
    ambassadorSection.querySelector(`[data-comp="Link-Internal"]`).href = `/pages/our-mission`
    ambassadorSection.querySelector(`[data-comp="Link-Internal"]`).addEventListener(`click`, (e) => {
        e.preventDefault(); // Cancel the native event
        e.stopPropagation();
        window.location.href = `/pages/our-mission`
    })
}

let variant2 = () => {
    console.log(`variant2`)
    let ambassadorSection = document.querySelector(`[data-comp="half-media"]:not(.swapped)`)
    if (!ambassadorSection || !ambassadorSection.querySelector(`source`)) return
    ambassadorSection.classList.add(`swapped`)
    let images = ambassadorSection.querySelectorAll(`[data-comp="Image"] source`)
    images.forEach(image => {
        image.src = `https://cdn.shopify.com/s/files/1/0819/9793/files/sand_cloud_251508534_2326333247498310_1183616699414697630_n_1_768x_crop_center@2x.progressive.jpg?v=1651534529`
        image.srcset = `https://cdn.shopify.com/s/files/1/0819/9793/files/sand_cloud_251508534_2326333247498310_1183616699414697630_n_1_768x_crop_center@2x.progressive.jpg?v=1651534529`
    })
    ambassadorSection.querySelector(`h2`).innerText = `Our Story`
    ambassadorSection.querySelector(`h3`).innerText = `Sand Cloud was founded on the sunny beaches of San Diego by three friends with a dream to reinvent an age-old product, the beach towel, while donating a portion of all sales to marine conservation.`
    ambassadorSection.querySelector(`[data-comp="Link-Internal"]`).href = `/pages/our-story`
    ambassadorSection.querySelector(`[data-comp="Link-Internal"]`).addEventListener(`click`, (e) => {
        e.preventDefault(); // Cancel the native event
        e.stopPropagation();
        window.location.href = `/pages/our-story`
    })

}

let variant3 = () => {
    console.log(`variant3`)
}

let variants = [control, variant1, variant2, variant3]

let main = () => {
    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`test_variant`)
    if (variant) {
        setCookie(`test_variant`, variant, 1)
    }
    let storageVariant = getCookie(`test_variant`) || 1 // default to variant 1
    variants[storageVariant]() // call the variant's function
}

main()

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
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