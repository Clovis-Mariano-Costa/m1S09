// ============================================================
// EXERCÍCIO 5 — Resumo do pacote antes de enviar
// Junta tudo que vimos até aqui: submit + preventDefault, .value
// para texto/e-mail/select/date, .checked/:checked para
// checkbox/radio, e um array montado com .push().
// ============================================================

const formulario = document.getElementById("form-orcamento");
const resumo = document.getElementById("resumo");

formulario.addEventListener("submit", (evento) => {
  // 1) Sempre a primeira linha dentro do listener de submit: impedir
  //    que a página recarregue e apague o resumo que vamos montar.
  evento.preventDefault();

  // 2) Texto, e-mail, telefone, select e date são todos lidos do MESMO
  //    jeito, com ".value" — não importa o "type" do campo.
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cidade = document.getElementById("cidade").value;
  const dataIda = document.getElementById("data-ida").value;
  const dataVolta = document.getElementById("data-volta").value;
  const observacoes = document.getElementById("observacoes").value;

  // 3) Se esta função está rodando, é porque TODOS os campos "required"
  //    do HTML já passaram pela validação nativa do navegador — inclusive
  //    o grupo de radio "pacote", que tem "required" no primeiro <input>.
  //    Por isso podemos ler o pacote marcado direto, sem testar null.
  const pacoteMarcado = document.querySelector('input[name="pacote"]:checked');

  // 4) Cada checkbox é independente e é lido com ".checked", que devolve
  //    true (marcado) ou false (desmarcado) — nunca um texto.
  const ingresso = document.getElementById("ingresso").checked;
  const seguro = document.getElementById("seguro").checked;
  const traslado = document.getElementById("traslado").checked;

  // 5) Criamos uma lista (array) vazia e usamos .push() para ir
  //    adicionando nela só os extras que estiverem marcados.
  const extras = [];
  if (ingresso) extras.push("Ingresso para o jogo");
  if (seguro) extras.push("Seguro viagem");
  if (traslado) extras.push("Traslado do aeroporto");

  // 6) BÔNUS: extras.join(", ") transforma a lista em um único texto,
  //    ex: "Ingresso para o jogo, Seguro viagem". Se a lista continuar
  //    vazia (nenhum extra marcado), mostramos uma mensagem substituta.
  const textoExtras = extras.length > 0 ? extras.join(", ") : "Nenhum extra selecionado";

  // 7) Por fim, montamos o resumo inteiro com innerHTML, usando <br>
  //    para quebrar linha e <strong> para destacar cada rótulo. Como os
  //    dados vêm do próprio formulário que o usuário preencheu agora,
  //    o risco de segurança aqui é baixo.
  resumo.innerHTML =
    "<h2>Resumo do seu pacote</h2>" +
    "<strong>Nome:</strong> " + nome + "<br>" +
    "<strong>E-mail:</strong> " + email + "<br>" +
    "<strong>Telefone:</strong> " + telefone + "<br>" +
    "<strong>Cidade-sede:</strong> " + cidade + "<br>" +
    "<strong>Data de ida:</strong> " + dataIda + "<br>" +
    "<strong>Data de volta:</strong> " + dataVolta + "<br>" +
    "<strong>Tipo de pacote:</strong> " + pacoteMarcado.value + "<br>" +
    "<strong>Extras:</strong> " + textoExtras + "<br>" +
    "<strong>Observações:</strong> " + observacoes;
});
