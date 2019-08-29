var body = document.querySelector("body");

if (window.matchMedia("(max-width: 768px)").matches) {
  var mobile_menu_btn = document.querySelector(".page-header__toggle");
  var menu = document.querySelector(".main-nav");
  if (menu.classList.contains("main-nav--nojs")) {
    menu.classList.remove("main-nav--nojs")
  }
  if (mobile_menu_btn.classList.contains("page-header__toggle--nojs")) {
    mobile_menu_btn.classList.remove("page-header__toggle--nojs")
  }
  mobile_menu_btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (menu.classList.contains("main-nav--closed")) {
      menu.classList.remove("main-nav--closed");
      menu.classList.add("main-nav--opened");
      mobile_menu_btn.classList.remove("page-header__toggle--closed");
      mobile_menu_btn.classList.add("page-header__toggle--opened");
    } else if (menu.classList.contains("main-nav--opened")) {
      menu.classList.remove("main-nav--opened");
      menu.classList.add("main-nav--closed");
      mobile_menu_btn.classList.remove("page-header__toggle--opened");
      mobile_menu_btn.classList.add("page-header__toggle--closed");
    }
  });
}


if (body.classList.contains("index-page")) {
  var slider = document.querySelector(".slider");
  var slider__btn_before = slider.querySelector(".slider__btn-before-js");
  var slider__btn_after = slider.querySelector(".slider__btn-after-js");
  var slider__item_before = slider.querySelector(".slider__item-before-js");
  var slider__item_after = slider.querySelector(".slider__item-after-js");


  if (slider__item_before.classList.contains("transformation__item--active")) {
    slider__item_before.classList.remove("transformation__item--active");
  }

  slider__btn_before.addEventListener("click", function(evt) {
    evt.preventDefault();
    slider__item_before.classList.add("slider__item-active-js");
    slider__item_after.classList.remove("slider__item-active-js");
  });

  slider__btn_after.addEventListener("click", function(evt) {
    evt.preventDefault();
    slider__item_after.classList.add("slider__item-active-js");
    slider__item_before.classList.remove("slider__item-active-js");
  });
}


// Скрипт для проверки валидности формы через JS
// if (body.classList.contains("form-page")) {
//   var form = document.querySelector(".application-form");
//   var personTel = form.querySelector(".application-form__input--tel");
//   var personEmail = form.querySelector(".application-form__input--email");
//
//   form.addEventListener("submit", function(evt) {
//     if (!personTel.value) {
//       evt.preventDefault();
//       console.log("Нужно ввести tel");
//       personTel.classList.add("application-form__input--error");
//     } else {
//       personTel.classList.remove("application-form__input--error");
//     }
//     if (!personEmail.value) {
//       evt.preventDefault();
//       console.log("Нужно ввести email");
//       personEmail.classList.add("application-form__input--error");
//     } else {
//       personEmail.classList.remove("application-form__input--error");
//     }
//   });
// }

var map;
var marker;
var infoWindow;
var centerCoordinates;
if (window.matchMedia("(min-width: 1300px)").matches) {
  centerCoordinates = {lat: 59.938846, lng: 30.319333};
} else {
  centerCoordinates = {lat: 59.938743, lng: 30.323037};
}
var positionCoordinates = {lat: 59.938743, lng: 30.323037};
var zoom = 17;
var image = "../img/map-pin.png";
var popupContent = "<p class='company-address__text'>ул. Большая Конюшенная, д. 19/8 <span class='company-address__town'>Санкт-Петербург</span></p>"
  function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: centerCoordinates,
    zoom: zoom
  }),
  marker = new google.maps.Marker({
      position: positionCoordinates,
      map: map,
      icon: image
  }),
  infoWindow = new google.maps.InfoWindow({
    content: popupContent
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
