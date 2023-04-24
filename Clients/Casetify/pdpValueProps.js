let control = () => {
    console.log(`control`);
};

let variant1 = () => {
    console.log(`variant1`);
    let fontAwesomeScript = document.createElement('script');
    fontAwesomeScript.src = 'https://kit.fontawesome.com/955c376981.js';
    document.head.appendChild(fontAwesomeScript);
    let pdpInterval = setInterval(() => {
        let valuePropsElement = document.querySelector(`.free-shipping-text`);
        if (!valuePropsElement) return;
        clearInterval(pdpInterval);
        valuePropsElement.innerHTML = `
            <div><i class="fa-solid fa-truck"></i> Free Shipping Worldwide</div>
            <div><i class="fa-solid fa-right-left"></i> No Hassle Returns & Exchanges</div>
            <div><i class="fa-solid fa-award"></i> 100% Satisfaction Guaranteed</div>
        `;

    }, 250);
};

let variant2 = () => {
    console.log(`variant2`);
};

let variant3 = () => {
    console.log(`variant3`);
};


let main = () => {
    let url = new URL(window.location.href);
    let variant = url.searchParams.get(`test_variant`);
    if (variant) {
        sessionStorage.setItem(`test_variant`, variant);
    }
    let storageVariant = sessionStorage.getItem(`test_variant`) || 1;
    let variants = [control, variant1, variant2, variant3];
    variants[storageVariant]();
};

main();