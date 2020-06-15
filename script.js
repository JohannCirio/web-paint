const div = document.createElement("div");
const bigGrid = document.querySelector("#bigGrid");
const resetButton = document.querySelector("#reset");

let texto = document.createElement("p");


for (let index = 0; index < 16; index++) {
    
    for(let index2 = 0; index2 <16; index2++){
        texto = document.createElement("div");
        texto.classList.add("square");
        //texto.textContent = `${index}${index2}`;
        bigGrid.appendChild(texto);
    } 
}



function teste (event) {

    //console.log("qualquer coisa");
    //console.log(event);

    const alvo = event.target.className;

    if(alvo === "square"){
        //event.target.classList.add("red");
        event.target.style.backgroundColor = "red";
    }   
   
}

function resetColor () {

    let squarelist = bigGrid.children;
    console.log(squarelist);

    for(i = 0; i < squarelist.length; i++){

        squarelist[i].style.backgroundColor = "white";
    }
    
}

bigGrid.addEventListener("mouseover",teste);
resetButton.addEventListener("click", resetColor);
