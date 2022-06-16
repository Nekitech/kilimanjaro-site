const WIDTH = 1600
const n = 2
let track = document.querySelector('.startScreen__track')
let btnPrev = document.querySelector('.startScreen__slider-nav__btn-prev')
let btnNext = document.querySelector('.startScreen__slider-nav__btn-next')
btnPrev.addEventListener('click', (e) => {
    if(track.offsetLeft > 0){
        track.style.left = `${WIDTH}px`
    }
})

btnNext.addEventListener('click', (e) => {
    if(track.offsetLeft >= WIDTH*n){
        track.style.left = `${-WIDTH}px`
    }
})