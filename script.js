
document.getElementById("contatoForm")?.addEventListener("submit", function(event) {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !email || !mensagem) {
    alert("Todos os campos são obrigatórios.");
    event.preventDefault();
  } else {
    alert("Mensagem enviada com sucesso!");
  }
});
