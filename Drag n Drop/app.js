const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')


let dragstart = event => {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

let dragend = event => {
    event.target.className = 'item'
}

let dragover = event => {
    event.preventDefault()
}

let dragenter = event => {
    event.target.classList.add('hovered')
}

let dragleave = event => {
    event.target.classList.remove('hovered')
}

let dragdrop = event => {
    event.target.classList.remove('hovered')
    event.target.append(item)
}


for (const placeHolder of placeHolders) {
    placeHolder.addEventListener('dragover', dragover)
    placeHolder.addEventListener('dragenter', dragenter)
    placeHolder.addEventListener('dragleave', dragleave)
    placeHolder.addEventListener('drop', dragdrop)
}


item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

