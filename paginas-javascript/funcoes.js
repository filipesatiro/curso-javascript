/* FUNÇÕES 
Uma função Javascript é um bloco de código projetado para executar uma tarefa específica.

È como uma pequena "fabrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função Javascript é executada quando "algo" a invoca (chama-a).
*/
// Função de Soma
// function soma(valor1, valor2){
//     return valor1 + valor2;
// }
// // Função de Cotação do Dolar
// function realParaDolar (real, cotacaoDolar){
//     return real * cotacaoDolar;
// }
// var valorReal = 7.89;
// var cotacao = 5.08;
// var total = realParaDolar(valorReal, cotacao);
// alert( "O valor em real é R$: " +valorReal + " o valor em Dolar U$ é: " +total);
// function alertaHello(){
//     alert("Olá, pessoal");
// }
 alertaHello();
function paraCelsius(valorFarenrenheit){
     return (5/9) * (valorFarenrenheit - 32)
 }
 var x = paraCelsius(77);
 alert("A temperatura é de " +x+ " graus celsius");