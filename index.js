//document.getElementById("count-el").innerText = 5;


let myButton = document.getElementById("increment-btn");

let counter = document.getElementById("count-el");

let phrase = document.getElementById("nbp");




let numero = parseInt(counter.innerText);

// incrementer
function incrementer() {

    numero++;
    counter.innerText = numero;
}

// enregistrer
function enregistrer(){

    phrase.textContent  += (counter.innerText + "  ,");
    counter.innerText = 0;
    numero = 0;
    
}
// reset
function reset(){

    phrase.textContent = "Fans previews attendance : ";
    
}

