function sizeGuide() {
    let atcButton = document.querySelector(`[data-comp="AddToCart"]`)
    if (!atcButton || document.querySelector(`#sizeGuideLink`)) return
    let sizeGuideLink = document.createElement(`div`)
    sizeGuideLink.id = `sizeGuideLink`
    sizeGuideLink.innerText = `Size Guide`
    atcButton.parentElement.insertBefore(sizeGuideLink, atcButton)

    let sizeGuideModal = document.createElement(`div`)
    sizeGuideModal.id = `sizeGuideModal`
    sizeGuideModal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="https://i.imgur.com/aJSKkHO.jpg" />
        </div>
    `
    document.querySelector(`[data-comp="ProductTemplate"]`).append(sizeGuideModal)

    let modal = document.querySelector(`#sizeGuideModal`)
    let span = modal.querySelector(".close");
    sizeGuideLink.onclick = function () {
        console.log(`link`)
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
        console.log(`span`)
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

sizeGuide()