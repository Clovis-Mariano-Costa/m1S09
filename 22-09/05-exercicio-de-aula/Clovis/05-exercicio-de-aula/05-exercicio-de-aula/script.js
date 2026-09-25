const formulario = document.getElementById("form-orcamento");
const resumo = document.getElementById("resumo");


formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cidade = document.getElementById("cidade").value;
  const dataIda = document.getElementById("data-ida").value;
  const dataVolta = document.getElementById("data-volta").value;
  const observacoes = document.getElementById("observacoes").value;
  
  const pacoteMarcado = document.querySelector('input[name="pacote"]:checked');
  
  const ingresso = document.getElementById("ingresso").checked;
  const seguro = document.getElementById("seguro").checked;
  const traslado = document.getElementById("traslado").checked;

  const extras = [];
  if (ingresso) extras.push("Ingresso para o jogo");
  if (seguro) extras.push("Seguro viagem");
  if (traslado) extras.push("Traslado do aeroporto");

  const textoExtras = extras.length > 0 ? extras.join(", ") : "Nenhum extra selecionado";

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

    console.log(formulario.value);
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Telefone:", telefone);
    console.log("Cidade-sede:", cidade);
    console.log("Data de ida:", dataIda);
    console.log("Data de volta:", dataVolta);
    console.log("Tipo de pacote:", pacoteMarcado.value);
    console.log("Extras:", textoExtras);
    console.log("Observações:", observacoes);
    
});

