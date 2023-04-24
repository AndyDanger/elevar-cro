{/* <div class="textBelow css-7yswd2"> Save <span id="savingsNumber"> $$$ </span> With A Yearly Subscription </div> */ }
clearInterval(pdpSavingsInterval)

let json = {
    '1 MONTH': {
        '10PK': 66.24,
        '14PK': 69,
        '20PK': 132.48,
        '28PK': 138,
        '30PK': 198.60,
        '32PK': 138,
        '42PK': 206.88,
        '48PK': 206.88,
        '64PK': 275.88,
    },
    '2 MONTHS': {
        '10PK': 33.12,
        '14PK': 34.50,
        '20PK': 66.24,
        '28PK': 69,
        '30PK': 99.30,
        '32PK': 69,
        '42PK': 103.44,
        '48PK': 103.44,
        '64PK': 137.94,
    }
}

let pdpSavingsInterval = setInterval(() => {

    const savings = document.getElementById("savingsNumber");
    const buttonChoose = document.querySelector('button[value][data-comp="DropdownSelected"]');
    const textBelow = document.querySelector(".textBelow")
    if (!savings || !buttonChoose || !textBelow) return

    const oneTimeRadioButton = document.querySelector("#frequency > fieldset > div.css-25atf6 input")
    if (oneTimeRadioButton) {
        textBelow.style.display = oneTimeRadioButton.checked ? 'none' : 'block'
    }

    const monthSelected = document.querySelector("#frequency > div > button > div > p.css-1wu2xni > span")
    if (!monthSelected) return

    let monthText = monthSelected.innerText
    let buttonValue = buttonChoose.value

    console.log(buttonValue)
    console.log(monthText)

    savings.innerText = `$${json[monthText][buttonValue]}`

}, 250)