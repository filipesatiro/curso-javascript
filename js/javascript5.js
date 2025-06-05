/* Eventos 
Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais Utilizados:

Onclick -> Disparado quando recebe um click.
ondblclick -> Disparado com clique duplo.
Onmouseover -> Disparado quando o mouse está sobre.
Onmouseout -> Disparado quando o mouse é movido para fora do elemento.
Onmousemove -> Disparado quando o mouse é movido no elemento.
Onmousedown -> Disparado quando o clique do botão for pressionado.
Onmouseup -> Disparado quando o clique do botão é liberado.
Onfocus -> Disparado quando o elemento recebe o foco. Válido para input,
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
Onblur -> Disparado quando o elemento perde o foco.
Onkeydown -> Disparado quando uma tecla é pressionada.
Onkeypress -> Disparado quando uma tecla é pressionada e solta.
Onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
Onload -> Disparado quando a página terminou de ser carregada. Body.
Onresize -> Disparado quando há um redimencionamento da janela.

*/

function eventoClick() {
    document.body.style.backgroundColor = "green"
};
function eventoClick() {
    alert('Evento de clique duplo')
};
function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red"
};
function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "Blue"
};
function adicionaTexto() {
    let p = document.getElementById("texto")
    p.append('Filipe Satiro ');
};