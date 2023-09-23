let colour

function clearCanvas() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'whitesmoke';
    });
}

let changeColour = (param) => {
    colour = param
    colourDisplay.innerText = "Colour = " + colour
    colourDisplay.style.backgroundColor = colour
    colourDisplay.style.color = colour
    return colour
}

let generateGrid = () => {
let container = document.getElementById('container')
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 15; j++) {
        let div = document.createElement('div')
        div.classList.add('box')
        div.addEventListener('mouseover', (e) => {
            e.target.style.background = colour })
        container.appendChild(div)
        }
    } 
}

generateGrid()

let colourDisplay = document.getElementById('colour-display')

colour = changeColour("Black")
