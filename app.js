let generateGrid = () => {
let container = document.getElementById('container')
let div = document.createElement('div')
div.classList.add('box')
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 15; j++) {
        let div = document.createElement('div')
        div.classList.add('box')
        div.addEventListener('mouseover', (e) => {
            e.target.style.background = "pink" })
        container.appendChild(div)
        }
    } 
}

generateGrid()


