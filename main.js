import './style.css';
import 'flowbite';
import Swiper from "swiper";

var swiper = new Swiper(".progress-slide-carousel", {
    loop: true,
    fraction: true,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".progress-slide-carousel .swiper-pagination",
        type: "progressbar",
    },
});



