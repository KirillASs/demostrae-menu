// const isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i)
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i)
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i)
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i)
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i)
//     },
//     any: function () {
//         return (
//             isMobile.Android()||
//             isMobile.BlackBerry()||
//             isMobile.Opera()||
//             isMobile.iOS()||
//             isMobile.Windows());
//     }
// };

// if (isMobile.any()){
//     document.body.classList.add('_touch');
//     let menuArrows = document.querySelectorAll('.menu__arrow');
//     if(menuArrows.length > 0){
//         for (let index = 0; index < menuArrows.length; index++){
//             menuArrows = menuArrows[index];
//             menuArrows.addEventListener("click", function(e){
//                 menuArrows.parentElement.classList.toggle('_active');
//             });
//         }
//     }
// } else{
//     document.body.classList.add('_pc');
// }

// function burgerMenu() {
//     let button = document.querySelector('.menu-burger');
//     let overlay = document.querySelector('.burger-menu__overlay');
//     let burger_menu = document.querySelector('.menu_body');
//     let body = document.querySelector('body');

//     button.addEventListener('click', e => {
//         e.preventDefault();
//         toggleMenu();
//     });

//     overlay.addEventListener('click', () => toggleMenu);

//     function toggleMenu(){
//         if (button.classList.contains('burger__active')) {
//             button.classList.remove('burger__active');
//             burger_menu.classList.remove('menu_body__active');
//             overlay.classList.remove('overlay-active');
//             body.style.overflow = 'visible';
//         } else {
//             button.classList.add('burger__active');
//             burger_menu.classList.add('menu_body__active');
//             overlay.classList.add('overlay-active');
//             body.style.overflow = 'hidden';
//         }
//     }
// }
// burgerMenu()