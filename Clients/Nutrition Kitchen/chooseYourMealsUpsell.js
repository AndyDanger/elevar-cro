function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
window.packageHelpers = {}

window.packageHelpers.getTotalPrice = function (setMealsPerDay) {
    let selectedVariant = window.packageHelpers.getSelectedMealVariant()
    let packageLength = window.packageHelpers.getSelectedPackageLength()
    let mealBundleGroup = window.packageHelpers.getSelectedMealBundleGroup();
    let mealsPerDay = 3
    let totalDays = 0;
    let selectedSubscription = window.packageHelpers.getSelectedSubscription()
    let subscribeDiscountMultiplier = selectedSubscription ? (selectedSubscription == 'one-time' ? 1 : 0.935) : 1
    switch (packageLength) {
        case 'Subscription':
        case '1 Week':
            totalDays = window.packageHelpers.mealCount.week_1;
            break;
        case '2 Week':
            totalDays = window.packageHelpers.mealCount.week_1 + window.packageHelpers.mealCount.week_2;
            break;
        case '4 Week':
            totalDays = window.packageHelpers.mealCount.week_1 + window.packageHelpers.mealCount.week_2 + window.packageHelpers.mealCount.week_3 + window.packageHelpers.mealCount.week_4;
            break;
        default:
            break;
    }

    switch (mealBundleGroup) {
        case 'Breakfast,Lunch,Dinner':
            mealsPerDay = setMealsPerDay || 3;
            break;
        default:
            mealsPerDay = setMealsPerDay || 2;
            break;
    }

    var totalPrice = selectedVariant.price * totalDays * mealsPerDay * subscribeDiscountMultiplier / 100
    return Math.round(totalPrice)
}

window.packageHelpers.getSelectedSubscription = function () {
    return $(window.packageHelpers.selectors.subscription).filter(':checked').val() || $(window.packageHelpers.selectors.subscription).val();
}

window.packageHelpers.getSelectedMealBundleGroup = function () {
    return Array.from($(window.packageHelpers.selectors.mealBundleGroup).filter(':checked')).map(thing => $(thing).val()).join(',') || $(window.packageHelpers.selectors.mealBundleGroup).val();
}

window.packageHelpers.getSelectedMealPackage = function () {
    return $(window.packageHelpers.selectors.productSelector).filter(':checked').val() || $(window.packageHelpers.selectors.productSelector).val();
}

window.packageHelpers.getSelectedProductHandle = function () {
    let productHandle = window.packageHelpers.getSelectedMealPackage();
    switch (productHandle) {
        case 'meal-package-low-carb':
            productHandle = 'meal-package';
            break;
        case 'meal-package-balanced':
            productHandle = 'meal-package';
            break;
        case 'meal-package-veggie':
            break;
        case 'meal-package-flexitarian':
            break;
        default:
    }
    return productHandle;
}

window.packageHelpers.getSelectedSize = function () {
    return $(window.packageHelpers.selectors.mealPlan).filter(':checked').val() || $(window.packageHelpers.selectors.mealPlan).val();
}

window.packageHelpers.getSelectedMealPlan = function () {
    const productHandle = window.packageHelpers.getSelectedMealPackage();
    let mealPlan = window.packageHelpers.getSelectedSize();
    switch (productHandle) {
        case 'meal-package-low-carb':
            mealPlan = `${mealPlan} Low Carb`;
            break;
        case 'meal-package-balanced':
            mealPlan = `${mealPlan} Balanced`;
            break;
        case 'meal-package-veggie':
            mealPlan = `${mealPlan} Veggie`;
            break;
        case 'meal-package-flexitarian':
            mealPlan = `${mealPlan} Flexitarian`;
            break;
        case 'meal-package-vegan':
            mealPlan = `${mealPlan} Vegan`;
            break;
        default:
    }
    return mealPlan;
}

window.packageHelpers.getSelectedMealVariant = function () {
    const mealPlan = window.packageHelpers.getSelectedMealPlan();
    const packageLength = window.packageHelpers.getSelectedPackageLength();
    const variantTitle = `${mealPlan} / ${packageLength}`;
    for (let i = 0; i < window.packageHelpers.mealProduct.variants.length; i++) {
        const variant = window.packageHelpers.mealProduct.variants[i]
        if (variant.title == variantTitle) {
            return variant;
        }
    }
    return false
}

window.packageHelpers.getSelectedPackageLength = function () {
    return $(window.packageHelpers.selectors.packageLength).filter(':checked').val() || $(window.packageHelpers.selectors.packageLength).val();
}

window.packageHelpers.getHighestPricedMealVariant = function () {
    const mealPlan = window.packageHelpers.getSelectedMealPlan();
    let highestPricedVariant = window.packageHelpers.mealProduct.variants[0];
    for (let i = 0; i < window.packageHelpers.mealProduct.variants.length; i++) {
        const variant = window.packageHelpers.mealProduct.variants[i]
        if (variant.price > highestPricedVariant.price && variant.option1 == mealPlan) {
            highestPricedVariant = variant;
        }
    }
    return highestPricedVariant
}

window.packageHelpers.allOptionsSelected = function () {
    const selectorKeys = ['productSelector', 'mealPlan', 'packageLength', 'mealBundleGroup'];
    for (let i = 0; i < selectorKeys.length; i++) {
        if ($(window.packageHelpers.selectors[selectorKeys[i]]).filter(':checked').length == 0) {
            return false;
        }
    }
    return true;
}

window.packageHelpers.populateSelectionsFromParameters = function () {
    console.log(`PersonalizeYourPlan:populateSelectionsFromParameters`);
    const searchParams = Object.fromEntries(new URLSearchParams(location.search));

    if (Object.keys(searchParams).length === 0) {
        return;
    }

    console.log(`PersonalizeYourPlan:populateSelectionsFromParameters - populate`);
    // Populate meal-package
    if (typeof (searchParams['meal-package']) !== 'undefined') {
        $(`${window.packageHelpers.selectors.productSelector}[value="${searchParams['meal-package']}"]`).prop('checked', true);
    }

    // Populate meal-plan
    if (typeof (searchParams['meal-plan']) !== 'undefined') {
        $(`${window.packageHelpers.selectors.mealPlan}[value="${searchParams['meal-plan']}"]`).prop('checked', true);
    }

    // Populate package-length
    if (typeof (searchParams['package-length']) !== 'undefined') {
        $(`${window.packageHelpers.selectors.packageLength}[value="${searchParams['package-length']}"]`).prop('checked', true);
    }

    // Populate meal-bundle-group
    if (typeof (searchParams['meal-bundle-group']) !== 'undefined') {
        $(`${window.packageHelpers.selectors.mealBundleGroup}[value="${searchParams['meal-bundle-group']}"]`).prop('checked', true);
    }

    // Populate subscription
    if (typeof (searchParams['subscription']) !== 'undefined') {
        $(`${window.packageHelpers.selectors.subscription}[value="${searchParams['subscription']}"]`).prop('checked', true);
    }

    $(`${window.packageHelpers.selectors.productSelector}`).trigger(`change`);
    // window.packageHelpers.$container.trigger('PersonalizeYourPlan:updatePrice');
}


clearInterval(packagePriceInterval)
var firstTime = true
var currentPrice = 0
var packagePriceInterval = setInterval(function () {
    if (typeof $ == "undefined") return
    if (firstTime && document.querySelector('[data-section-type="personalize-your-plan"]')) {
        firstTime = false
        window.packageHelpers.container = document.querySelector('[data-section-type="personalize-your-plan"]')
        window.packageHelpers.$container = $(window.packageHelpers.container);
        window.packageHelpers.sectionId = window.packageHelpers.$container.attr('data-section-id');
        window.packageHelpers.selectors = {
            productSelector: `[product-selector]`,
            mealPlan: `[size-selector]`,
            packageLength: `[package-length-selector]`,
            mealBundleGroup: `[meal-bundle-group-selector]`,
            subscription: `[subscription-selector]`,
            mealProductJSON: `[data-meal-product-json]`,
            mealContent: `[data-meal-package-content-json]`
        };

        window.packageHelpers.subscribeDiscount = window.packageHelpers.$container.attr('data-subscription-discount') || 0;
        window.packageHelpers.subscribeDiscountRate = (100 - window.packageHelpers.subscribeDiscount) / 100;

        window.packageHelpers.mealCount = {
            'week_1': parseInt(window.packageHelpers.$container.attr(`data-meal-count-week-1`)) || 5,
            'week_2': parseInt(window.packageHelpers.$container.attr(`data-meal-count-week-2`)) || 5,
            'week_3': parseInt(window.packageHelpers.$container.attr(`data-meal-count-week-3`)) || 5,
            'week_4': parseInt(window.packageHelpers.$container.attr(`data-meal-count-week-4`)) || 5
        }
        window.packageHelpers.mealProduct = JSON.parse($(window.packageHelpers.selectors.mealProductJSON).html());

        window.packageHelpers.mealContent = false;
        if ($(window.packageHelpers.selectors.mealProductJSON).length) {
            window.packageHelpers.mealContent = JSON.parse($(window.packageHelpers.selectors.mealContent).html());
        }
    }

    let currentPrice = window.packageHelpers.getTotalPrice()
    let upgradePrice = window.packageHelpers.getTotalPrice(3)

    var upgradeDiv = document.querySelector('#upgradeDiv')
    if (!upgradeDiv) {
        upgradeDiv = document.createElement('div')
        upgradeDiv.id = 'upgradeDiv'
        var chooseYourMealsDiv = document.querySelector('.step--meal-choice')
        chooseYourMealsDiv.append(upgradeDiv)
    }
    let formattedNumber = numberWithCommas(upgradePrice - currentPrice)
    if (formattedNumber.includes(`NaN`)) {
        $(upgradeDiv).hide()
        return
    }
    upgradeDiv.innerHTML = `Add a third meal for only <strong>$${formattedNumber}</strong> more`

    let mealBundleGroup = window.packageHelpers.getSelectedMealBundleGroup()
    if (mealBundleGroup.split(',').length == 2) {
        $(upgradeDiv).show()
    } else {
        $(upgradeDiv).hide()
    }

}, 250)