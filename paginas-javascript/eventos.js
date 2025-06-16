/* EVENTOS
Eventos são açõe disparadas pela interação dos usuários na página.
È o correto manejo desses eventos que tornan as páginas interativas e diâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Válido para input,
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimensionamento da janela.
  
*/
function eventoclick() {
    //   alert('Acionou um evento de click');
     document.body.style.backgroundColor = "yellow";
 }
// function eventodblclick() {
//     alert( 'Evento de clique duplo');
// }
function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}
function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}
// function adicionaTexto(){
//     let p = document.getElementById("texto");
//     p.append('O mouse moveu');
// }
function mudou() {
    console.log('Mudou');
}
function teclaPressionada() {
     let input = document.getElementById("campoTexto").value;
     console.log(input);

}