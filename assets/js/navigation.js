
function openMenu () {
    console.log('clicked');
    mobileNav.classList.toggle('mobile-nav__active');
    hamburger.classList.toggle('is-active');
}

// var hamburger = document.querySelector('.main-nav__list__item-hamburger');
var hamburger = document.querySelector('.hamburger');
var mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', openMenu);