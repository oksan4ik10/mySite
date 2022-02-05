const menuMobile = document.querySelector('.menu-mobile'),
menu = document.querySelector('.menu'),
menuMobileLine = document.querySelector('.menu-mobile__line');

menuMobile.addEventListener('click', ()=>{
    menuMobileLine.classList.toggle('close');
    menu.classList.toggle('menu__open');
})