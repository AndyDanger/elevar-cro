let control = () => {
    console.log(`control`)
}

let variant1 = () => {
    console.log(`variant1`)
    let styleTag = document.createElement(`style`)
    styleTag.innerHTML = `.mobile-nav-wrapper {
        width : 100%;
        background : rgba(0, 0, 0, 0.52);
      }
      
      #MobileNav, .closemobileMenu {
        width : 270px !important;
        background : white !important;
      }
      `
      document.head.append(styleTag)
}

let variant2 = () => {
    console.log(`variant2`)
    let styleTag = document.createElement(`style`)
    styleTag.innerHTML = `
        .menu-drawer {
            width: 100% !important;
        }
      `
      document.head.append(styleTag)
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