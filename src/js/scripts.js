
//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let lines = document.getElementsByClassName("slider__line_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < lines.length; i++) {
        lines[i].className = lines[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    lines[slideIndex - 1].className += " active";
}

//pageup
$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
        } else {
        $('.pageup').fadeOut();
        }
    });
    
    $("a[href='#up']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    new WOW().init(); 
}); 