/* Vamos entender Operadores:
-> Os operadores Javascript são usados para atribuir valores, comparar valores,
executar operações aritméticas e muito mais.

São Sinais que usamos: + - * / = ++ -= && || etc...

São separados em 6 "categorias":

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição 
3) Operadores de Sequência
4) Operadores de Comparação 
5) Operador Condicional (Ternário)
6) Operadores Lógicos

*/

var idade, eleitor, resultado;
idade = 71;                 /* true          false*/
eleitor = (idade < 18) ? "Não é Eleitor": "Sim ele é eleitor";

                  /*true        false    || E  && ou */
resultado = !(idade === 65  || idade === 72);
alert(resultado)
