const familia = ['Pedro', 'Amanda', 'Beatriz', 'Luciana', 'Leandro'];

document.getElementById("texto").innerHTML = familia.join(" "); // Integrando os valores com espaço " ".

const looneyTunes = ['Patolino', 'Pernalonga', 'Ligeirinho', 'Pintinho', 'Ben 10'];
let character = document.getElementById(".input")

document.getElementById("texto2").innerHTML = looneyTunes;

function removeCharacter(){
    looneyTunes.pop();
    document.getElementById("texto2").innerHTML = looneyTunes;
}

function removeFirst(){
    looneyTunes.shift();
    document.getElementById("texto2").innerHTML = looneyTunes;
}

function addCharacter(){
    looneyTunes.push(character.value);
    document.getElementById("texto2").innerHTML = looneyTunes;
    character.value = "";
}