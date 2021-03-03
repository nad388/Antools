
//slider
let slideIndex = 1,
    slides = document.querySelectorAll('.slide'),
    prev = document.querySelector('.prev__btn'),
    next = document.querySelector('.next__btn'),
    dotsWrap = document.querySelector('.slider__line'),
    dots = document.querySelectorAll('.slider__line_item');

showSlides(slideIndex);

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }
    dots.forEach((item) => item.classList.remove('slider__line_item-active')); //убираем класс актив

    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('slider__line_item-active');
}

function plusSlides(n) {
    showSlides(slideIndex += n); 
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});

dotsWrap.addEventListener('click', function(event) { //делегирование событий
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('slider__line_item') && event.target == dots[i-1]) { //проверка на присутсивие класса, узнаем номер точки
            currentSlide(i);
        }
    }
});

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

