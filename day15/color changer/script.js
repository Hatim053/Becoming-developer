const colors = document.querySelectorAll('.color');
const myContainer = document.querySelector('.container');
colors.forEach((color) => {
    color.addEventListener('click' , function(e) {
    myContainer.style.backgroundColor = `${e.currentTarget.id}`
    })
})