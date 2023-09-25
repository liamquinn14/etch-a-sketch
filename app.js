let genButton = document.getElementById("generate-button")
let genButtonHolder = document.getElementById("gen-button-holder")
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
let gridSquares = window.prompt("How many pixels wide would you like your canvas? Enter a number between 1 and 100. The higher the number, the smaller the pen.")
if (Number(gridSquares) > 100 || Number(gridSquares) < 1 ) {
    alert("Sorry that is an invalid number of pixels. Please enter a number between 1 and 100.")
    return
} else {
genButton.remove()
genButtonHolder.remove()
const container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container')
container.setAttribute('id', 'container')
let width = 580 / Number(gridSquares)
let height = 580 / Number(gridSquares)
for (let i = 0; i < gridSquares; i++) {
    for (let j = 0; j < gridSquares; j++) {
        let div = document.createElement('div')
        div.classList.add('box')
        div.style.width = width + "px"
        div.style.height = height + "px"
        div.addEventListener('mouseover', (e) => {
            e.target.style.background = colour })
        div.addEventListener('mousedown', (e) => {
            e.target.style.background = "whitesmoke" })
        container.appendChild(div)
        }
    } 
}
}

let colourDisplay = document.getElementById('colour-display')

colour = changeColour("Black")
