const hamburger = document.querySelector('.hamburger'), 
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu__active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu__active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('menu__active');
});

const procents = document.querySelectorAll('.procent__numb'),
      lines = document.querySelectorAll('.procent__divider span');

procents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

