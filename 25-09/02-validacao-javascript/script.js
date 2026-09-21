// ============================================================
// EXERCÍCIO 2 — Validação com JavaScript
// ============================================================
// Lembrete importante: o HTML já cuida sozinho de "campo não pode
// estar vazio" (por causa do "required" no index.html). O que o
// HTML NÃO sabe fazer é exigir um TAMANHO MÍNIMO de senha — essa
// regra é específica do nosso sistema, então quem valida é o
// JavaScript, aqui embaixo.

// 1) Selecionamos o formulário e o parágrafo de mensagem, do mesmo
//    jeito que já fizemos nos exercícios anteriores.
const formulario = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");

// 2) Escutamos o envio do formulário.
formulario.addEventListener("submit", (evento) => {
  // 3) Sempre a primeira linha: impedir o recarregamento padrão da página.
  //    Se a validação nativa do HTML (o "required" do e-mail) bloquear o
  //    envio antes, esta função nem chega a rodar — é o navegador que
  //    resolve isso sozinho, sem gastar nenhuma linha do nosso código.
  evento.preventDefault();

  // 4) Guardamos a referência ao campo de senha numa variável, para não
  //    precisar escrever "document.getElementById('senha')" várias vezes.
  const senha = document.getElementById("senha");

  // 5) Aqui está a REGRA NOVA, que o HTML sozinho não sabe aplicar:
  //    senha.value é o texto digitado; .length conta os caracteres
  //    desse texto. Se for menor que 6, a senha é considerada curta
  //    demais para o nosso sistema.
  if (senha.value.length < 6) {
    // 6) Escrevemos a mensagem de erro específica do NOSSO sistema —
    //    diferente do aviso genérico que o navegador mostraria sozinho.
    mensagem.textContent = "A senha precisa de 6 caracteres ou mais!";

    // 7) "return" PARA a execução da função exatamente aqui. É como
    //    dizer: "encontrei um problema, então NADA depois desta linha
    //    deve rodar". Sem o return, o código continuaria e escreveria
    //    também a mensagem de sucesso logo abaixo — o que seria um erro.
    return;
  }

  // 8) Esta linha só é alcançada quando o "if" acima NÃO bloqueou o
  //    código com o "return" — ou seja, quando a senha tem 6 caracteres
  //    ou mais. É o caminho de SUCESSO da validação.
  mensagem.textContent = "Cadastro realizado com sucesso!";
});
