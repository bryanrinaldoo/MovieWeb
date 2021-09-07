import "./style/style.css";
//jquery
import $ from 'jquery';
//swiper
import Swiper from 'swiper';
import 'swiper/css/bundle'

import 'swiper/css';

// modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:

var Swipes = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});