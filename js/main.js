const menuMobile = document.querySelector('.menu-mobile'),
menu = document.querySelector('.menu'),
menuMobileLine = document.querySelector('.menu-mobile__line'),
modal = document.querySelector('.modal'),
modalClose = document.querySelector('.modal__close'),
headerBtn = document.querySelector('.header__btn'),
mainBtn = document.querySelector('.main__btn'),
modalTitle = document.querySelector('.modal__title');

//открытие меню для мобилки
menuMobile.addEventListener('click', ()=>{
    menuMobileLine.classList.toggle('close');
    menu.classList.toggle('menu__open');
})


//открытие модального окна по кнопке Связаться
headerBtn.addEventListener('click',()=>{
    modal.style.display = 'flex';
})
modalClose.addEventListener('click',(event)=>{
    modal.style.display = 'none';
})

//открытие модалки по кнопке Запись
mainBtn.addEventListener('click',()=>{
    modal.style.display = 'flex';
    modalTitle.textContent = 'Записаться на занятие';
})


//плавный скролл
const menuItems = document.querySelectorAll('.menu__link');


menu.addEventListener('click',(event)=>{
    event.preventDefault();
    const target = event.target;
    if (!target.matches('.menu__link'))  return;
    const idItem = target.getAttribute('href');
    item = document.querySelector(idItem);
    let block = 'end';
    if((idItem == '#works') || (idItem == '#about')){
        block = 'start';
    }
    item.scrollIntoView({block: block, behavior: "smooth"});
    
})