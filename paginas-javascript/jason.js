/* JSON 
Json significa  Javascript Object Notation que traduziddo para o português fica algo como notação de objeto Javascript.

Explicando de um modo simples Json é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para trasnmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar con Json no Javascript usamos dois métodos:

Json.parse() -> Converte texto no padrão Json em objetos 
Json.stringify() -> Converte objetos em texto padrão Json
*/
// Objeto Carro
// const carro = {
//     marca: "Fiat",
//     modelo: "Uno",
//     motor: ["1.60", "1.4", "1.0"]
// }
// // Converteu para Texto
// let texto = JSON.stringify(carro);
// // Colocou o Texto no Nosso HTMl
// document.getElementById("area").innerHTML = texto;
// // Convertemos texto em Objeto
// let obj = JSON.parse(texto);
// // Pegamos um Valor desse Objeto
// console.log(obj.motor[2]);

function buscarCep(){
    let input = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
ajax.send();

ajax.onload = function(){
    // document.getElementById('texto').innerHTML = this.responseText;
    // Transformei o texto em Objeto
    let obj = JSON.parse(this.responseText);
    // Aqui peguei os valores que eu queria
    let logradouro = obj.logradouro;
    let cidade = obj.localidade;
    let estado = obj.uf;

    document.getElementById('texto').innerHTML = "logradouro:" + logradouro + "<br> cidade:" + cidade + "<br> estado:" + estado;
}
}

//     document.getElementById('area').innerHTML = this.responseText;
//     let obj = JSON.parse(this.responseText);
//     alert(obj.ddd);
