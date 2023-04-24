let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    setCookie(`bartesian_exit_intent`, 1, 30)
}

let variant2 = () => {
    console.log(`variant2`)
    setCookie(`bartesian_exit_intent`, 2, 30)
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