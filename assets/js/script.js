// --------------------- NAV SCROLL ANIMATION -----------------------
const menuActive = document.querySelector(".nav-mobile-state");
const body = document.body;
const nav = document.querySelector(".main-nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
const noscroll = "noscroll";
let lastScroll = 0;
 

window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 120 && !menuActive.classList.contains('nav-mobile__active')) {
      body.classList.remove(scrollUp);
    //   body.classList.add(noscroll);
      return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });

// --------------------- NAV CLICK ANIMATION -----------------------

const toggle = document.querySelector(".main-nav__toggle-container");
const state = document.querySelector(".nav-mobile-state");

function clickHandler() {
    if (toggle.classList.contains("main-nav__isactive")) {
        toggle.classList.remove("main-nav__isactive");
        // hide mobile nav
        state.classList.remove("nav-mobile__active");
        body.classList.remove(noscroll);
    } else {
        toggle.classList.add("main-nav__isactive");
        // show mobile nav
        state.classList.remove("nav-mobile__active");
        state.classList.add("nav-mobile__active");

        body.classList.add(noscroll);


    }
}

toggle.addEventListener('click', clickHandler)

