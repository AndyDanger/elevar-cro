let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
}

let variant2 = () => {
    console.log(`variant2`)
}

let variant3 = () => {
    console.log(`variant3`)
}

let variants = [control, variant1, variant2, variant3]

let main = () => {
    let url = new URL(window.location.href)
    let variant = url.searchParams.get(`test_variant`)
    if (variant) {
        setCookie(`test_variant`, variant, 7)
    }
    let storageVariant = getCookie(`test_variant`) || 1 // default to variant 1
    variants[storageVariant]() // call the variant's function
}

let setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

let getCookie = (cname) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

main()

