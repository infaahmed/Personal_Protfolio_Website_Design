// ################## NAVBAR ###################
$(document).ready(function () {
    $(".menu").click(function(){
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass('nav-toggle');

        $window.on("load scroll", function(){
            $(".menu").removeClass("fa-times");
            $(".navbar").removeClass('nav-toggle');
        })
    });
});

// ######################## AUTO TYPE #########################
    var typed = new Typed(".dynamic_text",{
        strings: ["Web Designer", "Coder", "Freelancer", "YouTuber"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });

// ###################### COUNTER ##################### 
    $(document).ready(function () {
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });
    });

// ####################### TESTIMONIAL SLIDER #########################
    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // when window is >= 576px
            breakpoints:{
                768:{
                    slidesPerView: 2,
                }
            },
        });
    });

// ##################### ANIMATION OS SCROLL #########################

    $(document).ready(function () {
        AOS.init();
    });

