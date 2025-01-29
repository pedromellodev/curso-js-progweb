var nome, sobrenome, nomeCompleto;

nome = "Pedro";
sobrenome = "Henrique";
idade = 17;
nomeCompleto = nome + " " + sobrenome;
pessoa = nome + " " + idade

const a = 2; // aqui é dois

{
    const a = 20; // aqui é 20
}

document.getElementById("texto").innerHTML = pessoa;
document.getElementById("texto2").innerHTML = a; // aqui também vai ser dois

