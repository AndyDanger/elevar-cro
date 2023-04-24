let jsonArray = [
    {
        "Title": "Spring Mill",
        "Name": "Gwendolyn",
        "Header": "Great breeze and breeze to install",
        "Description": "The amount of air flow is better than expected for an outdoor fan. I can't wait to use it during the Texas summer!"
    },
    {
        "Title": "Aerodyne",
        "Name": "Lena",
        "Header": "Great fan",
        "Description": "Love it! Exactly what I was looking for. Shipping was fast. Customer service was excellent."
    },
    {
        "Title": "Neutron",
        "Name": "Tony",
        "Header": "Awesome fan, great value",
        "Description": "Wonder fan that looks great and moves a lot of air. A very big improvement and I got 3 of them for a great price!"
    },
    {
        "Title": "Indio",
        "Name": "Commodore",
        "Header": "Great fan",
        "Description": "Clean look. High volume of air moved. These are exactly what we have been looking for."
    },
    {
        "Title": "Dempsey",
        "Name": "Tom F.",
        "Header": "The Best",
        "Description": "Great Fan! Easy to install and easy to use. Just as advertised."
    },
    {
        "Title": "Minimus",
        "Name": "Khristy",
        "Header": "Great Features",
        "Description": "Reversible blades for different seasons. Easy to install, nice directions, easy to understand. Overall great product."
    },
    {
        "Title": "Solaria",
        "Name": "James",
        "Header": "Looks great",
        "Description": "Love that it comes with the wall control as well as a remote so we can adjust it sitting anywhere. Overall a very modern and stylish fan that was easy to install and gives us that needed air and lighting being outside."
    },
    {
        "Title": "Tustin",
        "Name": "Marleen",
        "Header": "Awesome fan for our master bedroom",
        "Description": "The third Hunter fan we have purchased as we replace older fans in our just purchased home! We love the look and whisper of this fan!"
    },
    {
        "Title": "Crestfield",
        "Name": "Rain",
        "Header": "Good buy",
        "Description": "This Crestfield ceiling fan is absolutely beautiful. It works great and was easy for my not so mechanically inclined husband to install. Highly recommended for anyone who want to add a little pazazz to their home!"
    },
    {
        "Title": "Phenomenon",
        "Name": "Teresa",
        "Header": "Wonderful Ceiling Fan",
        "Description": "I love this ceiling fan because it’s huge and covers large rooms and puts out a lot of air. It is easy to install and makes my living room look gorgeous."
    }
]


let pdpFeaturedReviewInterval = setInterval(function () {
    let productTitle = document.querySelector(`.product-single__title`)
    if (!productTitle) {
        return
    }
    clearInterval(pdpFeaturedReviewInterval)
    // do something with buttons
    console.log('inserting')
    let title = productTitle.innerText.trim()
    let review = jsonArray.find(thing => title.includes(thing.Title))
    let html = `<div>
        <p><i>"${review.Description}"</i> -${review.Name}</p>
    </div>`

    let featuredReviewDiv = document.createElement('div')
    featuredReviewDiv.className = "featuredReviewDiv"

    let url = new URL(window.location.href)
    let v2 = url.searchParams.get('v2')
    if (v2) {
        html = `<div>
            <h4>${review.Header}</h4>
            <p><i>"${review.Description}"</i> -${review.Name}</p>
        </div>`
    }

    featuredReviewDiv.innerHTML = html
    document.querySelector(`.product-title`).append(featuredReviewDiv)
    document.querySelector(`.product-title__mobile`).append(featuredReviewDiv.cloneNode(true))
}, 250)