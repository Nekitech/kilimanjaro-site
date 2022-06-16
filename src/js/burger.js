let burger = document.querySelector('.burger')
burger.addEventListener('click',
    () => burger.classList.toggle('active'))
window.addEventListener('resize', function() {
    if(this.innerWidth > 540){
        burger.classList.remove('active')
    }
})
