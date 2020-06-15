const div = document.createElement("div");
const bigGrid = document.querySelector("#bigGrid");
const resetButton = document.querySelector("#reset");
const changeGrid = document.querySelector("#newSize");
const colorPicker = document.querySelector("#colorPicker");

const brushButton = document.querySelector("#brushMode");
const clickButton = document.querySelector("#clickMode");
const eraserButton = document.querySelector("#eraserMode");

let texto = document.createElement("p");

let brushOn = true;

function createGrid (lado) {

    for (let index = 0; index < lado; index++) {
    
        for(let index2 = 0; index2 < lado; index2++){
            texto = document.createElement("div");
            texto.classList.add("square");
            bigGrid.appendChild(texto);
        } 
    }

}

function gridSize () {

    let lado = prompt("Digite a quantidade de quadrados de lado:", Number);
    
    while(bigGrid.firstChild){
        bigGrid.removeChild(bigGrid.lastChild);
    }

    bigGrid.style.gridTemplateColumns = `repeat(${lado},1fr)`;
    bigGrid.style.gridTemplateRows = `repeat(${lado},1fr)`;
    createGrid(lado);
}

function resetColor () {

    let squarelist = bigGrid.children;
    console.log(squarelist);

    for(i = 0; i < squarelist.length; i++){

        squarelist[i].style.backgroundColor = "white";
    }
    
}

function coloringBrush (event) {

    let alvo = event.target.className;

    if (!brushOn) {
        return;
    }

    if(alvo === "square"){
        event.target.style.backgroundColor = colorPicker.value;
    }
   
}

function proMode (event) {

    let alvo = event.target.className;

    if (!eraserOn) {
        return;
    }

    if(alvo === "square"){
        event.target.style.backgroundColor = colorPicker.value;
        let opacidade = event.target.style.opacity;
        opacidade = Number(opacidade) + 0.1;
        event.target.style.opacity = opacidade;
    }

    
}

function setBrush () {
    brushOn = true;
    eraserOn = false;
    clickOn = false;
}

function setClick () {
    brushOn = false;
    eraserOn = false;
    clickOn = true;
}

function setEraser() {
    brushOn = false;
    eraserOn = true;
    clickOn = false;
}

createGrid(16);
colorPicker.value = "#222222";


bigGrid.addEventListener("mouseover", coloringBrush);
resetButton.addEventListener("click", resetColor);
changeGrid.addEventListener("click", gridSize);
brushButton.addEventListener("click", setBrush);
eraserButton.addEventListener("click", setEraser);
clickButton.addEventListener("click", setClick);

