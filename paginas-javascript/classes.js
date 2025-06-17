/*  Classes em Javascript

Em 2015 foi introduzido no Javascript as classes. As classes são um conceito antigo em programação e várias linguagens utilizam elas. Mas no Javascript isso é relativamente novo, por isso mesmo programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fabricas" para crir objetos.
Pode se dizer que são "funções especias" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as classes no Javascript usam um método chamado constructor () para fabricar os objetos.
*/
class Carro{
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
    return this.modelo +" buzinou:Biiiiiiiiii";
    }
}
const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);
console.log(gol);
console.log(uno.buzina());
gol.ano = 2014;
console.log(gol);

