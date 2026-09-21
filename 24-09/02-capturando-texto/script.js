// ============================================================
// EXERCÍCIO 2 — Capturando texto, e-mail e textarea
// ============================================================

// 1) Selecionamos o formulário e a <div> onde vamos montar o resumo.
const formulario = document.getElementById("form-contato");
const resumo = document.getElementById("resumo");

// 2) Escutamos o envio do FORMULÁRIO INTEIRO (não de cada campo separado).
formulario.addEventListener("submit", (evento) => {
  // 3) Sempre a primeira linha dentro do listener de submit: impedir
  //    que a página recarregue e apague tudo que vamos montar.
  evento.preventDefault();

  // 4) Capturamos os TRÊS campos com ".value" — a mesma propriedade,
  //    não importa se é um <input type="text">, <input type="email">
  //    ou um <textarea>. Isso simplifica muito o nosso trabalho:
  //    aprendemos UM jeito de ler texto e ele serve para vários campos.
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // 5) Aqui usamos .innerHTML (em vez de .textContent) DE PROPÓSITO:
  //    queremos que as tags <strong> e <br> sejam INTERPRETADAS como
  //    HTML de verdade (negrito e quebra de linha), e não mostradas
  //    como texto literal na tela.
  //    Repare: como nome, email e mensagem vêm de campos que o PRÓPRIO
  //    usuário preencheu neste mesmo formulário (não é um dado externo
  //    desconhecido), o risco de segurança aqui é baixo — mas em um
  //    sistema real, sempre vale redobrar o cuidado com o que vai
  //    para dentro de innerHTML.
  resumo.innerHTML =
    "<strong>Recebemos seu contato!</strong><br>" +
    "Nome: " + nome + "<br>" +
    "E-mail: " + email + "<br>" +
    "Mensagem: " + mensagem;
});
