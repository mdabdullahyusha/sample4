$(document).ready(function(){
    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop:0}, 1000);
    });
    $(window).scroll(function(){
        const scroller = $(this).scrollTop(); 

        if(scroller > 500) {
            $('.back_to_top').fadeIn(500);
        }
        else {
            $('.back_to_top').fadeOut(500);
        }
    });
});

var swiper = new Swiper(".swiper_slider", {
    slidesPerView:4,
    spaceBetween:24,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});

var typed = new Typed('.element', {
    strings: [
        'CREATIVE DESIGNER',
        'CREATIVE DEVELOPER',
        'CREATIVE FREELANCER',
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true,
  });