/*
Vamos entender Variaveis
Variaveis são "recipientes" onde podemos armazenar informações que podem variar,
ou seja, podem ter qualquer tipo de valor.

No Javascript temos 3 palavras-chaves para declarar variáveis:
-> var 
-> let
-> const

*/
//declarações de variaveis
const x = 10; // aqui é 10

{
    const x = 2; //aqui é 2
}
//aqui também é 10
document.getElementById("texto").innerHTML = x;