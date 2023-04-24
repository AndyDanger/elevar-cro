$('#buynowbtn').on('click', function () {

    var sku = 40122106183722
    var quantity = 1
    fetch("https://www.soludos.com/cart/add.js", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-requested-with": "xmlhttprequest"
        },
        "body": `id=${sku}&quantity=${quantity}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(response => {
        console.log(response)
        if (response.status == 200) {
            window.location.href = '/checkout';
        } else {
            console.error(`Couldn't add to cart: ${response.status}`)
        }
    })

})