/* ARRAYS
Oa arrays Javascript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz,","feijão","macarrão","leite"];

A lista [0] (lista na posição 0) vai conter o valor "arroz".
A lista [1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.
*/
  
// const lista = [];
// lista[0] = "arroz";
// lista[1] = "feijãp";
// lista[2] = "macarrão";
// lista[3] = "leite";
// const lista = new Array("arroz","feijão","macarrão","leite");
const lista = ["arroz", "feijão","macarrão","leite"];
lista[0] = "café";
alert(lista[0]);
console.log(lista);
// const pessoa = {
//     nome: "filipe", sobrenome: "satiro", idade: "31" //objeto
// };

// pessoa.nome; //objeto
// pessoa[0]; //array
const pessoa = ["Filipe","satiro",31,"mais um item"];  //array
pessoa[pessoa.length] = "casado";
console.log(pessoa);


const x = "filipe"
alert(Array.isArray(x));
