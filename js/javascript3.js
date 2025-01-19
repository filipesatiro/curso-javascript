/* Funções 
Uma Função Javascript é um bloco de código projetado para executar uma
tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encado como "mini-programas" projetadas para fazer uma tarefa que vai
contribuir para o código.

Uma função Javascript é executada quando "algo" a invoca (chama-a).
*/
 

function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(80);

alert("A temperatura é de " + x + " graus Celsius");