// ============================================================
// EXERCÍCIO 3 — Feedback visual com classList
// ============================================================

const formulario = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const telefone = document.getElementById("telefone");

  // Regra do NOSSO sistema: telefone precisa ter pelo menos 10 dígitos.
  // (O HTML sozinho não sabe validar "quantidade mínima de números"
  // dentro de um type="tel" — por isso é o JavaScript que faz isso.)
  if (telefone.value.length < 10) {
    // ---- RAMO DE ERRO ----
    mensagem.textContent = "Telefone incompleto!";

    // classList.add("text-red") liga a classe vermelha no elemento.
    mensagem.classList.add("text-red");

    // classList.remove("text-green") desliga a classe verde, CASO ela
    // tenha ficado ligada de um envio válido anterior. Sem esta linha,
    // um envio de erro DEPOIS de um envio de sucesso ficaria com as
    // duas classes juntas, e a cor final dependeria da ordem das
    // regras no CSS — um bug difícil de perceber.
    mensagem.classList.remove("text-green");

    // Paramos por aqui: não queremos que o código de sucesso rode também.
    return;
  }

  // ---- RAMO DE SUCESSO ----
  // Chegamos até aqui só quando o "if" acima NÃO disparou o "return",
  // ou seja, quando o telefone tem 10 dígitos ou mais.
  mensagem.textContent = "Cadastro enviado com sucesso!";

  // Mesma lógica do ramo de erro, só que invertida: liga a classe
  // deste ramo (verde) e desliga a classe do outro ramo (vermelha).
  mensagem.classList.add("text-green");
  mensagem.classList.remove("text-red");
});
