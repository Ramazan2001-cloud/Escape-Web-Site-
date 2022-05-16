'use strict';
window.addEventListener('DOMContentLoaded',() => {
    // BURGER MENU and BURGER BUTTON
    const burgerButton = document.querySelector('.header__burger'),
          burgerMenu = document.querySelector('.header-hide__menu');
    burgerButton.addEventListener('click',() => {
        burgerMenu.classList.toggle('hide__menu__active');
    });
    // CARDS BLOCK BOTTOM
    const moreCardsBottom = document.querySelectorAll('.more-cards__bottom');
    moreCardsBottom[0].style.marginTop = '32px';
    moreCardsBottom[1].style.marginTop = '12px';
    moreCardsBottom[2].style.marginTop = '12px';
    moreCardsBottom[3].style.marginTop = '12px';
    moreCardsBottom[4].style.marginTop = '32px';
    moreCardsBottom[5].style.marginTop = '12px';

});

