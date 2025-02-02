function soma(x, y){
    return x + y;
};

let total = soma(20,20)

function real_dolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

let convert = real_dolar(10,6.02)

function alertaHello(){
    alert("Hello you. Haha.")
}

document.getElementById("value").innerHTML = "A soma dos valores da função é: " + total;
document.getElementById("value2").innerHTML = "A conversão Real em Dólar " + convert;
