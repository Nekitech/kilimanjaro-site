"use strict";

var burger = document.querySelector('.burger');
burger.addEventListener('click', function () {
  return burger.classList.toggle('active');
});
window.addEventListener('resize', function () {
  if (this.innerWidth > 540) {
    burger.classList.remove('active');
  }
}); // let WIDTH = 1600
//
// function changeWidthSlider() {
//     WIDTH = window.document.body.clientWidth;
//
//     (WIDTH <= 1600)
//         ? document.querySelector('.startScreen__slider').style.width = `${WIDTH}px`
//         : WIDTH = 1600
// }
// changeWidthSlider()
//
// window.addEventListener('resize', function() {
//     changeWidthSlider()
//
// })
//
// const n = document.querySelectorAll('.startScreen__slider-item').length - 1
// let track = document.querySelector('.startScreen__track')
// let btnPrev = document.querySelector('.startScreen__slider-nav__btn-prev')
// let btnNext = document.querySelector('.startScreen__slider-nav__btn-next')
// btnPrev.addEventListener('click', (e) => {
//     console.log(track.offsetLeft, WIDTH)
//     if(track.offsetLeft < 0){
//         track.style.left = `${parseInt(track.style.left)  + WIDTH}px`
//     }
// })
//
// btnNext.addEventListener('click', (e) => {
//     let leftMove = (parseInt(track.style.left)) ? parseInt(track.style.left) : 0
//     if(leftMove > -WIDTH*n){
//         (parseInt(track.style.left))
//             ? track.style.left = `${leftMove - WIDTH}px`
//             : track.style.left = `${-WIDTH}px`
//     }
// })
//