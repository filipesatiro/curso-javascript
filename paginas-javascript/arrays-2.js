// const lista1 = [" arroz"," feijão"," leite"," macarrão"];
// const lista2 = [" suco"," refrigerante"," carne"];
// const lista3 = [" salgadinho "];
// const superLista = lista1.concat(lista2, lista3);
// const pessoa = ["filipe","satiro", "31","professor"]; //objeto
//pessoa.unshift("qualquer");  //pop , shift, push, unshift
// pessoa.splice(1, 0, "item adicionado1", "item adicionado2");


// const jogadores = [
//      "biro-biro",
//      "ribmar", 
//      "Pelé", 
//      "Maradona",
//      "Neymar",
//      "Messi",
//      "Criastiano Ronaldo",
//      "Vampeta",
//      "Dimitri"];
// // const craques =jogadores.slice(2,7);
// jogadores.sort();
// jogadores.reverse();

 const numeros = [40, 100, 1, 5, 25, 10];
 const maior20 = numeros.filter(filtragem);
 function filtragem(value, index, array){
    return value > 20;
 }
// // numeros.sort(function(a, b){return a - b});
// function MaiorNumero(array){
//     return Math.max.apply(null, array);
// }
// function MenorNumero(array){
//     return Math.min.apply(null, array);
// }
 document.getElementById("teste").innerHTML = maior20;
