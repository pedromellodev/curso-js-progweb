function diaSemana(){

    let dia = new Date().getDay();

    switch (dia) {
        case 0:
            document.getElementById("alert").innerHTML = "Hoje é domingo";
            break;
        case 1:
            document.getElementById("alert").innerHTML = "Hoje é segunda";
            break;
        case 2:
            document.getElementById("alert").innerHTML = "Hoje é terça";
            break;
        case 3:
            document.getElementById("alert").innerHTML = "Hoje é quarta";
            break;
        case 4:
            document.getElementById("alert").innerHTML = "Hoje é quinta";
            break;
        case 5:
            document.getElementById("alert").innerHTML = "Hoje é Sexta";
            break;
        case 6:
            document.getElementById("alert").innerHTML = "Hoje é sábado";
            break;
        default:
            alerta = "Não sei que dia é hoje."
    }  
}