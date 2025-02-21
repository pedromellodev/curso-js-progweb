function submitName(){

    let p = document.getElementById("alert");
    let nome = document.getElementById("nome").value;

    if (nome === "" || nome === null){
        p.innerHTML = "Preenchimento incorreto, digite novamente.";
        p.style.color = "red";
    } else {
        p.innerHTML = "Parabéns, preenchimento correto.";
        p.style.color = "green";
        nome = "";
    }
}