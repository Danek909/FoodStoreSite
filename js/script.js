$(document).ready(function () {
    $('.divSlider').slick({
        infinite: true,
        slidesToScroll:1,
        slidesToShow: 5,
        arrows: true,
        dots: false,
        speed: 1000,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 1166,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    arrows: false,
                    slidesToShow: 1.2,
                }
            },
        ]
    });
});

const factory = document.getElementById('burgerMenu');
if (factory) {
    const isHeder = document.getElementById('heder');
    factory.addEventListener("click", function (e) {
        isHeder.classList.toggle('_activee');
    });
}

const body = document.getElementById('burgerMenu');
if (factory) {
    const isHeder = document.getElementById('body');
    factory.addEventListener("click", function (e) {
        isHeder.classList.toggle('_activee');
    });
}
