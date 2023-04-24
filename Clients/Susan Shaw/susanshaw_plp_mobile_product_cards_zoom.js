var script = document.createElement('script');
script.src = 'https://kit.fontawesome.com/f1cd1e76e8.js';
document.head.appendChild(script);
window.slideIndex = 1;

var mobileProductCardsInterval = setInterval(function() {
    var productCards = document.querySelectorAll('.product_image')
    productCards.forEach(function(card) {
        if (card.querySelector('.fa-search-plus')) {
            return
        }
        $(card).append('<i class="fas fa-search-plus"></i>')
    })

    var plusIcons = document.querySelectorAll('.fa-search-plus')

    plusIcons.forEach(function(icon) {
        if (icon.className.indexOf('click-added') !== -1) {
            return
        }
        icon.className += ' click-added'
        $(icon).click(function() {
            var product_image = $(this).closest('.product_image')
            if (window.debugger) {
                debugger
            }
            var images = $(product_image).find('img')
            var modalImages = document.querySelectorAll('#myModal img')
            modalImages.forEach(function(modalImage, index) {
                modalImage.src = images[index % 2].src.replace('100x', '1200x')
            })
            window.openModal();
            window.currentSlide(1)
            $(product_image).removeClass('toggle-images')
        })
    })

    window.openModal = function() {
        document.getElementById("myModal").style.display = "block";
    }

    // Close the Modal
    window.closeModal = function() {
        document.getElementById("myModal").style.display = "none";
    }

    // Next/previous controls
    window.plusSlides = function(n) {
        showSlides(window.slideIndex += n);
    }

    // Thumbnail image controls
    window.currentSlide = function(n) {
        showSlides(window.slideIndex = n);
    }

    window.showSlides = function(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > slides.length) { window.slideIndex = 1 }
        if (n < 1) { window.slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[window.slideIndex - 1].style.display = "block";
        dots[window.slideIndex - 1].className += " active";
    }


    var span = document.getElementsByClassName("close")[0];
    if (span.className.indexOf('click-added') !== -1) {
        return
    }
    span.className += ' click-added'
    span.onclick = function() {
        window.closeModal()
    }
}, 200)