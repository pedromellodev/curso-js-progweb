function helloWorld(){
    document.getElementById("text").innerHTML = "Olá mundo!";
}

function trocaCor(){
    let div = document.getElementById("bloco");
    div.style.backgroundColor = "red";
}

function sairCor(){
    let div = document.getElementById("bloco");
    div.style.backgroundColor = "blue";
}