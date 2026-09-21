// ============================================================
// EXERCÍCIO 4 — Formulário completo da VaiTorcer
// Junta as duas camadas de validação da semana:
//   Camada 1 (nativa do HTML)  -> cuida do "nome" e do "email" sozinha
//   Camada 2 (JavaScript)      -> cuida da regra que falta: "pacote" obrigatório
// ============================================================

const formulario = document.getElementById("form-orcamento");
const mensagem = document.getElementById("mensagem");
const resumo = document.getElementById("resumo");

formulario.addEventListener("submit", (evento) => {
  // 1) Se esta função está rodando, é porque "nome" e "email" JÁ
  //    passaram pelo "required" do HTML — a Camada 1 (nativa) trabalhou
  //    sozinha, antes mesmo de chegarmos aqui. Não precisamos repetir
  //    essa checagem em JavaScript.
  evento.preventDefault();

  // 2) Camada 2: buscamos o radio marcado do grupo "pacote".
  const pacoteMarcado = document.querySelector('input[name="pacote"]:checked');

  // 3) Se ninguém marcou nenhum pacote, pacoteMarcado é null — e é
  //    exatamente essa a regra que o HTML não sabia validar sozinho.
  if (!pacoteMarcado) {
    mensagem.textContent = "Escolha um tipo de pacote antes de enviar.";
    mensagem.classList.add("text-red");
    mensagem.classList.remove("text-green");

    // Limpamos o resumo antigo, caso um envio válido anterior tenha deixado algo escrito
    resumo.textContent = "";

    // Paramos aqui: não queremos montar um resumo com dados incompletos
    return;
  }

  // 4) Chegamos até aqui só quando TUDO está válido: nome e e-mail
  //    preenchidos (Camada 1) e um pacote escolhido (Camada 2).
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  // 5) Feedback visual de sucesso — mesma simetria add/remove do exercício 3
  mensagem.textContent = "Orçamento enviado com sucesso!";
  mensagem.classList.add("text-green");
  mensagem.classList.remove("text-red");

  // 6) Por fim, montamos o resumo do pedido na tela
  resumo.innerHTML =
    "<strong>Nome:</strong> " + nome + "<br>" +
    "<strong>E-mail:</strong> " + email + "<br>" +
    "<strong>Pacote:</strong> " + pacoteMarcado.value;
});
