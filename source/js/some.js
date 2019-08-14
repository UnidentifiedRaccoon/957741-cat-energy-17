var mobile_menu_btn = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");


if (window.matchMedia("(max-width: 768px)").matches) {
  if (menu.classList.contains("main-nav--nojs")) {
    menu.classList.remove("main-nav--nojs")
  }
    mobile_menu_btn.addEventListener("click", function(evt) {
      evt.preventDefault();
        if (menu.classList.contains("main-nav--closed")) {
          menu.classList.remove("main-nav--closed");
          menu.classList.add("main-nav--opened");
        }
        else if (menu.classList.contains("main-nav--opened")) {
          menu.classList.remove("main-nav--opened");
          menu.classList.add("main-nav--closed");
        }
    });
}
