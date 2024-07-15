document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "http://localhost:5209/api/Livros";

  async function carregarLivros() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const listaLivros = document.getElementById("livros-list");
    listaLivros.innerHTML = "";

    data.forEach((livro) => {
      const li = document.createElement("li");
      li.textContent = `${livro.titulo} - ${livro.autor}`;
      listaLivros.appendChild(li);
    });
  }

  async function adicionarLivro(event) {
    event.preventDefault();

    const form = event.target;
    const livro = {
      titulo: form.titulo.value,
      autor: form.autor.value,
      lancamento: form.lancamento.value,
      idTag: parseInt(form.idTag.value),
      tipo: form.tipo.value,
      idTipo: parseInt(form.idTipo.value),
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(livro),
    });

    if (response.ok) {
      carregarLivros();
      form.reset();
    } else {
      alert("Erro ao adicionar livro.");
    }
  }

  const form = document.getElementById("add-livro-form");
  form.addEventListener("submit", adicionarLivro);

  carregarLivros();
});
