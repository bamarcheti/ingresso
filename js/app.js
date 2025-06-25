function comprar() {
  let tipo = document.getElementById("tipo-ingresso");
  let qtd = parseInt(document.getElementById("qtd").value);

  if (!qtd || qtd < 1) {
    alert("Informe uma quantidade válida.");
    return;
  }

  realizarCompra(tipo.value, qtd);
}

function realizarCompra(tipo, qtd) {
  let idTipo = `qtd-${tipo}`;
  let idElemento = document.getElementById(idTipo);
  let qtdDisponivel = parseInt(idElemento.textContent);

  if (qtd > qtdDisponivel) {
    alert(`Quantidade indisponível para tipo ${tipo}`);
    return;
  }
  idElemento.textContent = qtdDisponivel - qtd;
  alert("Compra realizada com sucesso!");
}
