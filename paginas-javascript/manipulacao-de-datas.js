/* MANIPULAR DATAS EM JAVASCRIPT */


//Comando basico para pegar a data
let data = new Date();   //console.log(data);

//Pegar o ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);

//Pegar o mês atual de 0 até 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();
//console.log(mes);

//Mostrar o mês no formato escrito
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//Pegar o Dia do mês - 1 até 31
let diaMes = data.getDate();
console.log(diaMes);

//Mostrar o Dia da Semana - 0 até 6
let diaSemana = data.getDay();
//console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda-Feira","Terça-Feira", "Quarta-Feira", "Quinta-Feita", "Sexta-Feira", "Sabado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito)

//Pegar a Hora - 0 até 23
let horas = data.getHours();
console.log(horas);

//Pegar os Minutos 0 - 59
let minutos  = data.getMinutes();
console.log(horas, minutos);

//Pegar Segundos 0 - 59
let segundos = data.getSeconds();
console.log(segundos);

//Pegar Milisegundos 0 - 999
let Milisegundos = data.getMilliseconds();
console.log(Milisegundos);

//Pegar a Data no Padrão Brasileiro - Dia - Mês - Ano
let dataBR = data.toLocaleString('pt-BR', {timeStyle: 'short'});
console.log(dataBR);

//Pegar os Valores separados 
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {
    return x < 10 ? '0' + x : ''+ x;
}

let dataPadraBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraBR);

// Comparar Datas - Maior ou Menor
var hoje = new Date();
var vencimento = new Date(2025, 6, 15);
if (hoje > vencimento){
    console.log('Sua conta está vencida!');
} else {
    console.log('Ainda não venceu, tudo certo!');
}

// Diferença entre Duas Datas em Dias
var dataInicial = new Date();
var dataFinal = new Date(2025, 12, 30);


var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias + " dias");