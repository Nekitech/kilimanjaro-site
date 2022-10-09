const heartsList = document.querySelectorAll('.card-tour__content--title__icon');
const heartsRedList = document.querySelectorAll('.card-tour__content--title__iconRed');

Array.from(heartsList).forEach(function (item, index) {
    item.addEventListener('click', function () {
            Array.from(heartsRedList)[index].style.display = 'block'
            item.style.display = 'none'
    });

})
Array.from(heartsRedList).forEach(function (item, index) {
    item.addEventListener('click', function () {
            Array.from(heartsList)[index].style.display = 'block'
            item.style.display = 'none'

    });

})