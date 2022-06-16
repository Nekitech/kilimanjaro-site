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
var n = 2;
var track = document.querySelector('.startScreen__track');
var btnPrev = document.querySelector('.startScreen__slider-nav__btn-prev');
var btnNext = document.querySelector('.startScreen__slider-nav__btn-next');
btnPrev.addEventListener('click', function (e) {
  if (track.offsetLeft > 0) {
    track.style.left = "".concat(WIDTH, "px");
  }
});
btnNext.addEventListener('click', function (e) {
  if (track.offsetLeft >= WIDTH * n) {
    track.style.left = "".concat(-WIDTH, "px");
  }
});