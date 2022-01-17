//   HTML Template Name : GeoNix - Digital Business Agency Bootstrap and Html Template
//   Author : Template Coder
//   Support : templatecoder755@gmail.com
//   Author Phone / What's App : +88-01629078287
//   Description : Digital Business Agency Bootstrap and Html Template
//   Version : 1.0 

// Swiper Js Script
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
// Swiper Js End

// Skills Play Button Start
$("#playbtn").click(function() {
    $("#lightboxpopup").addClass('active-lightbox-popup');
});
$("#crossbtn").click(function() {
    $("#lightboxpopup").removeClass('active-lightbox-popup');
});
// Skills Play Button End