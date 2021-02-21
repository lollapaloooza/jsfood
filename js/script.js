import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import { showModal } from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 30000);


    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-02-20');
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide'
    });
});