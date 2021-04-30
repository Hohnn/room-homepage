const arrowLeft = document.querySelectorAll('.arrowLeft')
const arrowRight = document.querySelectorAll('.arrowRight')
const menu = document.getElementById("menu")

console.log(arrowLeft)

arrowRight.forEach((items, idx) => {
    items.addEventListener('click', () => {
        right()
    })
} )

arrowLeft.forEach((items, idx) => {
    items.addEventListener('click', () => {
        left()
    })
} )

document.onkeydown = checkKey;

function checkKey(e) {

    if (e.keyCode == '37') {
       // left arrow
        left()
    }
    else if (e.keyCode == '39') {
       // right arrow
        right()
    }

}

function left() {
    if (menu.classList == 'menu firstSlide') {
        menu.classList.remove('firstSlide')
    } else if (menu.classList == 'menu firstSlide secondSlide') {
        menu.classList.remove('secondSlide')
    }
}

function right() {
    if (menu.classList == 'menu') {
        menu.classList.add('firstSlide')
    } else if (menu.classList == 'menu firstSlide') {
        menu.classList.add('secondSlide')
    } else {
        menu.classList = 'menu'
    }
}
