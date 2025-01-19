/* Objetos
Objetos são basicamente variáveis com muitos valores dentro.

Ex: Const carro = {marca: "ford", modelo: "ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um método é uma função colocadas dentro 
de uma propriedade.

*/
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: "2015",
    placa: "ABC-1234",
    buzina: function(){ alert('Biiiiiiiiii') },
    completo: function() {
        return "A Marca é " + this.marca + " e o modelo é " + this.modelo;
    }
};

console.log(carro.completo());


