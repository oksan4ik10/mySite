const menuMobile = document.querySelector('.menu-mobile'),
menu = document.querySelector('.menu'),
menuMobileLine = document.querySelector('.menu-mobile__line'),
modal = document.querySelector('.modal'),
modalClose = document.querySelector('.modal__close'),
headerBtn = document.querySelector('.header__btn');

//открытие меню для мобилки
menuMobile.addEventListener('click', ()=>{
    menuMobileLine.classList.toggle('close');
    menu.classList.toggle('menu__open');
})


//открытие модального окна по кнопке Связаться
headerBtn.addEventListener('click',()=>{
    modal.style.display = 'flex';
})
modalClose.addEventListener('click',()=>{
    modal.style.display = 'none';
})
