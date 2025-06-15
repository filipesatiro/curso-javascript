/* Vamos entender Operadores:
-> Os operadores Javascript são usados para atribuir valores, comparar valores, executar operções aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- -= && || etc...

São separados em 6 "categorias":
1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição
3) Operaadores de Sequência
4)Operadores de Comparação
5) Operador Condicional (ternário)
6) Operadores Lógicos
*/

var idade, eleitor, resultado;
idade = 63;
eleitor = (idade < 18) ? "Não eleitor": "Sim, eleitor";

resultado = !(idade === 65 || idade  ===72);
alert(resultado);

