/* Switch
È usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de vereficação. Caso a condição não seja compatível não será executada e o valor padrão será acionado.
*/
function DiaDaSemana() {
    var dia = new Date().getDay();
    console.log(dia);

switch (dia){
    case 0:
        document.getElementById("teste").innerHTML = "Hoje é Domingo"    // o que acontece 
        break;
    case 1:
        document.getElementById("teste").innerHTML = "Hoje é segunda-feira"    // o que acontece 
        break;
        //o que acontece 
    case 2:
        document.getElementById("teste").innerHTML = "Hoje é Terça-Feira"    // o que acontece 
        break;
    case 3:
        document.getElementById("teste").innerHTML = "Hoje é Quarta-Feira"   
        break;
         // o que acontece 
    case 4:
        document.getElementById("teste").innerHTML = "Hoje é Quinta-Feira"    // o que acontece 
    // o que acontece
        break;        
    case 5:
        document.getElementById("teste").innerHTML = "Hoje é Sexta-Feira"    // o que acontece 
    // o que acontece
        break;        
    case 6:
        document.getElementById("teste").innerHTML = "Hoje é Sabado"    // o que acontece 
    // o que acontece
        break;        
        
    default:
    document.getElementById("teste").innerHTML = "Não sei que dia é ...";
    // o que acontece
    break;
}
}