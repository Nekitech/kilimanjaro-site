"use strict";

var burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
  return burger.classList.toggle('active');
});
window.addEventListener('resize', function () {
  if (this.innerWidth > 540) {
    burger.classList.remove('active');
  }
});
var WIDTH = 1600;

function changeWidthSlider() {
  WIDTH = window.document.body.clientWidth;
  WIDTH <= 1600 ? document.querySelector('.startScreen__slider').style.width = "".concat(WIDTH, "px") : WIDTH = 1600;
}

changeWidthSlider();
window.addEventListener('resize', function () {
  changeWidthSlider();
});
var n = document.querySelectorAll('.startScreen__slider-item').length - 1;
var track = document.querySelector('.startScreen__track');
var btnPrev = document.querySelector('.startScreen__slider-nav__btn-prev');
var btnNext = document.querySelector('.startScreen__slider-nav__btn-next');
btnPrev.addEventListener('click', function (e) {
  console.log(track.offsetLeft, WIDTH);

  if (track.offsetLeft < 0) {
    track.style.left = "".concat(parseInt(track.style.left) + WIDTH, "px");
  }
});
btnNext.addEventListener('click', function (e) {
  var leftMove = parseInt(track.style.left) ? parseInt(track.style.left) : 0;

  if (leftMove > -WIDTH * n) {
    parseInt(track.style.left) ? track.style.left = "".concat(leftMove - WIDTH, "px") : track.style.left = "".concat(-WIDTH, "px");
  }
});