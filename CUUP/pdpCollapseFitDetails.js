let pdpCollapseFitDetailsInterval = setInterval(() => {
    let fitDetails = document.querySelector(`.product-details > .product-details__accordion:nth-child(2) .detail-header`)
    if (!fitDetails) return
    clearInterval(pdpCollapseFitDetailsInterval)
    fitDetails.click()
}, 250)