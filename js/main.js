const menuMobile = document.querySelector('.menu-mobile'),
menu = document.querySelector('.menu'),
menuMobileLine = document.querySelector('.menu-mobile__line'),
modal = document.querySelector('.modal'),
btn = document.querySelectorAll('.btn'),
modalClose = document.querySelector('.modal__close'),
modalTitle = document.querySelector('.modal__title');

//открытие меню для мобилки
menuMobile.addEventListener('click', ()=>{
    menuMobileLine.classList.toggle('close');
    menu.classList.toggle('menu__open');
})



modalClose.addEventListener('click',(event)=>{
    modal.style.display = 'none';
})

btn.forEach(item => {
    item.addEventListener('click',(event)=>{
       if (!event.target.matches('.btn__record, .btn__contact')) return;
       event.preventDefault();
       modal.style.display = 'flex';
       if (event.target.matches('.btn__record')) modalTitle.textContent = 'Записаться на занятие';
    })
    
});


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

//слайдер
const slider = document.querySelector('.slider');

slider.addEventListener('click',(event)=>{
    const target = event.target;
    if (!target.matches('slider__arrows')) return;
    console.log(12);

})