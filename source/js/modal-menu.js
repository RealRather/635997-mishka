/*modal-menu*/
var navMenu = document.querySelector(".main-nav");
var mainToogle = document.querySelector(".main-nav__toggle");

navMenu.classList.remove("main-nav--withoutjs");
mainToogle.addEventListener('click', function() {
  if (navMenu.classList.contains("main-nav--open")) {
    navMenu.classList.remove("main-nav--open");
    navMenu.classList.add("main-nav--close");
  } else {
    navMenu.classList.add("main-nav--open");
    navMenu.classList.remove("main-nav--close");
  }
});
