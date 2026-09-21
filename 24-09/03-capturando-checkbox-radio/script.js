// ============================================================
// EXERCÍCIO 3 — Capturando checkbox e radio
// ============================================================

const formulario = document.getElementById("form-orcamento");
const resumo = document.getElementById("resumo");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  // 1) document.querySelector recebe um SELETOR CSS como texto, entre aspas.
  //    'input[name="pacote"]:checked' quer dizer, em português:
  //      "entre os <input> cujo atributo name é 'pacote' (o grupo inteiro),
  //       me dê o que estiver marcado (:checked)".
  const pacoteMarcado = document.querySelector('input[name="pacote"]:checked');

  // 2) Se NENHUM radio do grupo estiver marcado, o querySelector não encontra
  //    nada, e o resultado é "null" (nada/vazio). Por isso testamos com "if"
  //    ANTES de tentar ler pacoteMarcado.value — se não testássemos, o
  //    código quebraria tentando ler ".value" de algo que não existe.
  if (!pacoteMarcado) {
    resumo.textContent = "Escolha um tipo de pacote antes de enviar.";
    // 3) "return" interrompe a função aqui — as linhas abaixo não executam
    //    quando o pacote não foi escolhido.
    return;
  }

  // 4) Cada checkbox é lido com .checked, que devolve true (marcado)
  //    ou false (desmarcado) — nunca um texto, sempre um valor lógico.
  const ingresso = document.getElementById("ingresso").checked;
  const seguro = document.getElementById("seguro").checked;
  const traslado = document.getElementById("traslado").checked;

  // 5) Criamos um array (uma lista) vazio, e vamos adicionar nele só
  //    os nomes dos extras que estiverem marcados (checked === true).
  const extras = [];
  if (ingresso) extras.push("Ingresso");
  if (seguro) extras.push("Seguro viagem");
  if (traslado) extras.push("Traslado");

  // 6) extras.join(", ") transforma a lista, por exemplo ["Ingresso", "Traslado"],
  //    em um único texto: "Ingresso, Traslado". Se a lista estiver vazia
  //    (nenhum extra marcado), mostramos uma mensagem substituta.
  const textoExtras = extras.length > 0 ? extras.join(", ") : "Nenhum extra selecionado";

  // 7) Por fim, montamos o resumo usando o .value do radio marcado
  //    (pacoteMarcado.value) e o texto de extras que acabamos de montar.
  resumo.innerHTML =
    "<strong>Pacote escolhido:</strong> " + pacoteMarcado.value + "<br>" +
    "<strong>Extras:</strong> " + textoExtras;
});
