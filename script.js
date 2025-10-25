function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
    }
}