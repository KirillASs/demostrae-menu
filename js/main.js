$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
})

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
    // var elems = document.getElementsByClassName('menu__arrow');
    //     for (var i=0;i<elems.length;i+=1){
    //     elems[i].style.display = 'block';
    //     }

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