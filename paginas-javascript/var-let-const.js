/* Vamos estudar Variáveis
Variáveis são "recipientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const   */
//declarações de variaveis
// var nome, sobrenome, nomeCompleto, idade, soma;
// //atribuição dos valores
// nome = "filipe";
// sobrenome = "satiro"; 
// idade = 30;
// nomeCompleto = nome +" "+ sobrenome;
// soma = idade + 10;
// pessoa = nome + " "+ soma;
// document.getElementById("texto").innerHTML = pessoa;
const x = 10; //aqui é 10

{
    const x = 2; // aqui é 2
}
//aqui tambem vai ser 10
document.getElementById("texto").innerHTML = x;