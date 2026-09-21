// ============================================================
// EXERCÍCIO 4 — Evento "input" e contador de caracteres
// ============================================================

// ---- Parte 1: evento "input" (dispara a CADA tecla digitada) ----

const observacoes = document.getElementById("observacoes");
const contador = document.getElementById("contador");

// O evento "input" acontece TODA VEZ que o conteúdo do campo muda —
// cada letra digitada, cada letra apagada. É por isso que ele serve
// bem para um contador de caracteres em tempo real.
observacoes.addEventListener("input", () => {
  // .length é uma propriedade de strings (textos) que conta quantos
  // caracteres ela tem. "Olá".length, por exemplo, vale 3.
  const quantidade = observacoes.value.length;

  // Atualizamos o texto do contador toda vez que o evento dispara,
  // então o número na tela sempre reflete o tamanho atual do texto.
  contador.textContent = quantidade + "/200 caracteres";
});

// ---- Parte 2: evento "change" (dispara só quando a escolha muda) ----

const cidade = document.getElementById("cidade");
const avisoCidade = document.getElementById("avisoCidade");

// Diferente do "input", o evento "change" em um <select> só dispara
// quando o usuário TERMINA de escolher uma opção diferente da atual
// — não a cada "passada" pelas opções, só na escolha final.
cidade.addEventListener("change", () => {
  avisoCidade.textContent = "Você escolheu: " + cidade.value;
});
