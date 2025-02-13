/*
    # Estudando objetos

    Objetos são váriaveis que contém multiplas informações e elas são chamadas de propriedades.

    Além disso existem os métodos, que são funções embutidas dentro de um objeto.

*/

const carro = {
    marca: "Ford",
    ano: 2015,
    modelo: "KA",
    placa: "ABC-1234",
    gerarDescricao: function(){
        document.getElementById("description").innerHTML = "Marca:" + this.marca + " Ano:" + this.ano
    }
}