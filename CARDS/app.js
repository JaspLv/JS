const slides = document.querySelectorAll('.slide')
const btn = document.querySelectorAll('.btn')
const body = document.getElementsByTagName('body')[0]
const btnFon = document.getElementsByClassName('btn_fon')[0]
const btnClassicFon = document.getElementsByClassName('btn_classic_fon')[0]
const btnBack = document.getElementsByClassName('btn_back')[0]

let removeActiveClass = () => {
    slides.forEach(el => {
        el.classList.remove('active')
    })
}

slides.forEach( el => {
    el.addEventListener('click', () => {

        removeActiveClass()

        el.classList.add('active')
    })
})

btn.forEach((el, key) => {
    el.addEventListener('click', () => {
        for(let i = 0; i <= slides.length; i++){ 
            if (key == i) {
                (body.style.backgroundImage == slides[i].style.backgroundImage) ? alert('Данный фон уже установлен') :
                 body.style.backgroundImage = slides[i].style.backgroundImage
            }
        }
    })
})


let changeButtonVisibility = (removeItem, addItem) => {
    removeItem.style.display = 'none'
    addItem.style.display = 'block'
}

btnFon.addEventListener('click', () => {
    slides.forEach( el => el.style.display = 'none')
    changeButtonVisibility(btnFon, btnBack)
})

btnBack.addEventListener('click', () => {
    slides.forEach( el => el.style.display = 'block')
    changeButtonVisibility(btnBack, btnFon)
})


btnClassicFon.addEventListener('click', () => {
    (!body.style.backgroundImage) ? alert('Фон по умолчанию уже установлен') : body.style.backgroundImage = 'none'
})

