let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    const e = {
        currentTitle: document.title,
        interval: null,
        message: "🍸 Hurry, machines are selling out fast..."
    };
    document.addEventListener("visibilitychange", () => {
        document.hidden ? (e.currentTitle = document.title,
            e.interval = window.setInterval(() => {
                document.title = e.currentTitle === document.title ? e.message : e.currentTitle
            }
                , 1e3)) : (window.clearInterval(e.interval),
                    e.interval = null,
                    document.title = e.currentTitle)
    })

}

let variant2 = () => {
    console.log(`variant2`)
    const e = {
        currentTitle: document.title,
        interval: null,
        message: "$40 OFF Sitewide, Mother's Day Deal Ends Soon"
    };
    document.addEventListener("visibilitychange", () => {
        document.hidden ? (e.currentTitle = document.title,
            e.interval = window.setInterval(() => {
                document.title = e.currentTitle === document.title ? e.message : e.currentTitle
            }
                , 1e3)) : (window.clearInterval(e.interval),
                    e.interval = null,
                    document.title = e.currentTitle)
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
        sessionStorage.setItem(`test_variant`, variant)
    }
    let storageVariant = sessionStorage.getItem(`test_variant`) || variant || 1 // default to variant 1
    variants[storageVariant]() // call the variant's function
}

main()