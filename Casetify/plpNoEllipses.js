let control = () => {
    console.log(`control`);
};

let variant1 = () => {
    console.log(`variant1`);
    let cssTag = document.createElement('style');
    cssTag.innerHTML = `
    .artwork-desc,
    .product-desc {
        text-overflow: initial !important;
        white-space: break-spaces !important;
        overflow: auto !important;
    }`;
    document.head.append(cssTag);
};

let variant2 = () => {
    console.log(`variant2`);
    let cssTag = document.createElement('style');
    cssTag.innerHTML = `
    .artwork-desc,
    .product-desc {
        text-overflow: initial !important;
        white-space: break-spaces !important;
        overflow: auto !important;
    }

    .artwork-desc {
        font-style: italic !important;
        font-weight: normal !important;
    }`;
    document.head.append(cssTag);
};

let variant3 = () => {
    console.log(`variant3`);
};


let main = () => {
    let url = new URL(window.location.href);
    let variant = url.searchParams.get(`utm_medium`);
    if (variant) {
        sessionStorage.setItem(`utm_medium`, variant);
    }
    let storageVariant = sessionStorage.getItem(`utm_medium`) || 1;
    let variants = [control, variant1, variant2, variant3];
    variants[storageVariant]();
};

main();