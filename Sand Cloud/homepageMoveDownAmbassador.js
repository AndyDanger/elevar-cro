let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    let ambassadorSection = document.querySelector(`[data-comp="half-media"]`)
    if (!ambassadorSection) return
    ambassadorSection.parentElement.append(ambassadorSection)
}

let variant2 = () => {
    console.log(`variant2`)
    let fishySection = document.querySelector(`[data-comp="text-block"]`)
    let ambassadorSection = document.querySelector(`[data-comp="half-media"]`)
    if (!fishySection || !ambassadorSection) return
    ambassadorSection.parentElement.insertBefore(fishySection, ambassadorSection)
    ambassadorSection.parentElement.append(ambassadorSection)
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
    let storageVariant = sessionStorage.getItem(`test_variant`) || 1 // default to variant 1
    variants[storageVariant]() // call the variant's function
}

main()