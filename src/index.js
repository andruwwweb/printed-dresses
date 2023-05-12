import './style.scss'
import search from './assets/search.svg'
import fav from './assets/fav.svg'
import basket from './assets/basket.svg'
import user from './assets/user.svg'
import slideArrow from "./assets/slide-arrow.png"
import item1 from './assets/item1.png'
import item2 from './assets/item2.png'
import item3 from './assets/item3.png'
import item4 from './assets/item4.png'
import item5 from './assets/item5.png'
import item6 from './assets/item6.png'
import wave1 from "./assets/wave1.svg"
import wave2 from "./assets/wave2.svg"
import prod1 from "./assets/prod1.png"
import prod2 from "./assets/prod2.png"
import prod3 from "./assets/prod3.png"
import prod4 from "./assets/prod4.png"
import blackArrow from "./assets/black-arrow.png"
import nextSlide from './assets/next-slide.svg'
import prevSlide from './assets/prev-slide.svg'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    const productSwiper = new Swiper('.products_swiper', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
        nextEl: '.swiper-button-next-prod',
        prevEl: '.swiper-button-prev-prod',
        },
    });

    const productItem = new Swiper('.item_swiper', {
        modules: [Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const favButtons = document.querySelectorAll('.add_to_fav_icon')

    favButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            btn.classList.toggle('add_to_fav_icon_active')
        })
    })
})