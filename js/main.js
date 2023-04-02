const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return (
            isMobile.Android()||
            isMobile.BlackBerry()||
            isMobile.Opera()||
            isMobile.iOS()||
            isMobile.Windows());
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if(menuArrows.length > 0){
        for (let index = 0; index < menuArrows.length; index++){
            menuArrows = menuArrows[index];
            menuArrows.addEventListener("click", function(e){
                menuArrows.parentElement.classList.toggle('_active');
            });
        }
    }
} else{
    document.body.classList.add('_pc');
}

function burgerMenu() {
    let button = document.querySelector('.menu-burger');
    let overlay = document.querySelector('.burger-menu__overlay');
    let burger_menu = document.querySelector('.menu_body');
    let body = document.querySelector('body');

    button.addEventListener('click', e => {
        e.preventDefault();
        toggleMenu();
    });

    overlay.addEventListener('click', () => toggleMenu());

    function toggleMenu(){
        if (button.classList.contains('burger__active')) {
            button.classList.remove('burger__active');
            burger_menu.classList.remove('menu_body__active');
            overlay.classList.remove('overlay-active');
            body.style.overflow = 'visible';
        } else {
            button.classList.add('burger__active');
            burger_menu.classList.add('menu_body__active');
            overlay.classList.add('overlay-active');
            body.style.overflow = 'hidden';
        }
    }
}
// function openButton() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//     if (!event.target.matches('.menu__link')) {

//         var dropdowns = document.getElementsByClassName("sub__body");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

const handleClick = event => {
    const divs = document.querySelectorAll('ul')
    const target = event.target.nextElementSibling
    target.classList.toggle("sow__modal")
    divs.forEach(item => {
        if (item !== target) {
        item.classList.remove("sow__modal")
        }
    })
    }

    document.querySelectorAll("button").forEach(item => {
    item.addEventListener("click", handleClick)
})
burgerMenu()