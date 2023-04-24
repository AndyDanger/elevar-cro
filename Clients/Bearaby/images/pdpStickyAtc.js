let styleTag = document.createElement(`style`)
styleTag.innerHTML = `#stickyatc-container, #stickyatc {
    padding: 10px;
    position: sticky;
    bottom: 0px;
    background: #fff;
    border-top: 1px solid grey;
    border-radius: 10px 10px 0px 0px;
}

#stickyatc-container {
    display: none;
    z-index: 999;
}

#stickyatc-container .close {
    position: absolute;
    right: 10px;
    top: 10px;
  }`
document.head.append(styleTag)

let $stickydivcontainer = $("<div>", { id: "stickyatc-container" });
$("body").append($stickydivcontainer);

let $stickydiv = $("<div>", { id: "stickyatc" });
$("body").append($stickydiv);

$("#stickyatc").append($('<button id="stickyatc-btn" class="product-form__submit btn w-100">ADD TO CART</button>'));

$('#stickyatc-container .close').on('click', function () {
    $(this).parent().fadeOut();
});

$("#stickyatc-btn").click(function () {
    $("#stickyatc-container").toggle();
});

window.addEventListener("scroll", function () {
    let elementTarget = document.querySelector("faq-component");
    console.log(`window.scrollY: ${window.scrollY} - elementTarget.offsetHeight: ${elementTarget.offsetHeight}`)
    if (window.scrollY > (elementTarget.offsetHeight + 200) && !$("#stickyatc-container").hasClass("stickytrue")) {
        console.log(`making sticky`)
        $("#stickyatc-container").append($("#variantPicker"));
        $("#stickyatc-container").append($("#product-form-main-product"));
        $("#stickyatc-container").append($("<div class='close'>&#10006</div>"));
        $("#stickyatc-container").addClass("stickytrue")
    } else if (window.scrollY < (elementTarget.offsetHeight + 200) && $("#stickyatc-container").hasClass("stickytrue")) {
        console.log(`removing sticky`)
        $("#variantPicker").insertBefore($(".product-form"));
        $(".product-form").prepend($("#product-form-main-product"));
        $("#stickyatc-container").removeClass("stickytrue")
    }
});