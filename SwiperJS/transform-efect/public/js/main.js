const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    keyboard: true,
    freeMode: true,
    effect: "slide",
    loop: false,
    updateOnWindowResize: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            loop: true,
        },
        767: {
            loop: true,
        },
        1200: {
            loop: false,
        }
    },
    on: {
        setTranslate: function(swiper, translate) {
            if(swiper.loopedSlides != 1) {
                if(swiper.isEnd) {
                    swiper.slidesEl.style.transform = `translate3d(${-(swiper.virtualSize - swiper.width + (swiper.width / 2))}px, 0px, 0px)`;
                    swiper.slidesEl.style.transition = "transform 2s ease";    
                }
                if(swiper.swipeDirection === "prev") {
                    // swiper.slidesEl.style.transform = "";
                    // swiper.slidesEl.style.transition = "transform 2s ease";
                }
            } else {
                
            }
        },
        resize: function(swiper) {
            if(swiper.loopedSlides != 1) {
                if(swiper.isEnd) {
                    swiper.slidesEl.style.transform = `translate3d(${-(swiper.virtualSize - swiper.width + (swiper.width / 2))}px, 0px, 0px)`;
                    swiper.slidesEl.style.transition = "transform 2s ease";    
                }
                if(swiper.swipeDirection === "prev") {
                    // swiper.slidesEl.style.transform = "";
                    // swiper.slidesEl.style.transition = "transform 2s ease";
                }
            } else {
                
            }
        }   
    },
});