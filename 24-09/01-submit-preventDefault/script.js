// ============================================================
// EXERCÍCIO 1 — Escutando o submit e usando preventDefault()
// ============================================================

// 1) document.getElementById("form-contato") procura, em toda a página,
//    o ÚNICO elemento que tem id="form-contato" — que é a nossa tag <form>.
//    Guardamos essa referência na constante "formulario", para não
//    precisar procurar de novo toda vez que precisarmos dele.
const formulario = document.getElementById("form-contato");

// 2) Fazemos o mesmo para o <p id="mensagem">, onde vamos escrever o
//    texto de resposta depois que o formulário for enviado.
const mensagem = document.getElementById("mensagem");

// 3) addEventListener "liga" um ouvinte no formulário. Os dois
//    parênteses recebem:
//      - "submit"  -> o NOME do evento que queremos escutar
//      - a função  -> o código que deve rodar QUANDO esse evento acontecer
//    O evento "submit" dispara tanto ao clicar no botão quanto ao
//    apertar Enter dentro de qualquer campo do formulário.
formulario.addEventListener("submit", (evento) => {
  // 4) "evento" é um objeto que o próprio navegador cria e entrega para
  //    nós automaticamente, com informações sobre o que aconteceu.

  // 5) evento.preventDefault() cancela o comportamento PADRÃO do navegador
  //    para o envio de um formulário, que é: enviar os dados para o
  //    "action" e recarregar a página inteira. Sem esta linha, tudo o
  //    que fizermos depois seria apagado pelo recarregamento.
  evento.preventDefault();

  // 6) Só agora, DEPOIS de garantir que a página não vai recarregar,
  //    buscamos o campo de nome para ler o que o usuário digitou.
  const nome = document.getElementById("nome");

  // 7) Montamos o texto final juntando um texto fixo com o valor
  //    digitado pelo usuário (nome.value). O "+" aqui está juntando
  //    (concatenando) pedaços de texto, não somando números.
  const texto = "Obrigado(a) por entrar em contato, " + nome.value + "!";

  // 8) .textContent troca o conteúdo de texto do elemento <p id="mensagem">
  //    pelo texto que acabamos de montar. É assim que a mensagem
  //    aparece na tela, sem precisar recarregar a página.
  mensagem.textContent = texto;

  // 9) console.log também escreve o texto, mas na aba "Console" do
  //    DevTools (F12) — útil para conferirmos o valor durante o
  //    desenvolvimento, sem precisar mexer na tela.
  console.log(texto);
});
