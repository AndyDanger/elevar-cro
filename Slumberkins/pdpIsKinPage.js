function check() {
    var productId = meta.product.id
    if (!productId) {
        return false
    }
    var array = [
        {
            "sku": "5291599560842",
            "theme": "Stress Relief Collection"
        },
        {
            "sku": "6850442821770",
            "theme": "Self-Esteem Collection"
        },
        {
            "sku": "5317660999818",
            "theme": "Self-Esteem Collection"
        },
        {
            "sku": "6608843702410",
            "theme": "Creativity Collection"
        },
        {
            "sku": "5339396046986",
            "theme": "Change Collection"
        },
        {
            "sku": "5345238974602",
            "theme": "Conflict Resolution Collection"
        },
        {
            "sku": "5291599593610",
            "theme": "Gratitude Collection"
        },
        {
            "sku": "5345901707402",
            "theme": "Emotional Courage Collection"
        },
        {
            "sku": "5336597528714",
            "theme": "Self-Expression Collection"
        },
        {
            "sku": "6850442395786",
            "theme": "Creativity Collection"
        },
        {
            "sku": "5345957052554",
            "theme": "Growth Mindset Collection"
        },
        {
            "sku": "5345973239946",
            "theme": "Building Connections Collection"
        },
        {
            "sku": "6828665536650",
            "theme": "Self-Acceptance"
        },
        {
            "sku": "6855236059274",
            "theme": "Stress Relief Collection"
        },
        {
            "sku": "5291599626378",
            "theme": "Routines Collection"
        },
        {
            "sku": "5345984708746",
            "theme": "Grief and Loss Collection"
        },
        {
            "sku": "6850442723466",
            "theme": "Authenticity Collection"
        },
        {
            "sku": "5345989460106",
            "theme": "Authenticity Collection"
        },
        {
            "sku": "6546482921610",
            "theme": "Self-Acceptance Collection"
        },
        {
            "sku": "5345993064586",
            "theme": "Mindfulness Collection"
        }
    ]
    var exists = false
    array.forEach(function (item) {
        if (item.sku == productId) {
            exists = true
        }
    })
    return exists
}
check()