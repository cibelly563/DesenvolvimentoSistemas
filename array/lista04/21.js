let produtos = [
  'Camisa',
  'Calça Jeans',
  'Tênis',
];

let vendidos = [
  'Camisa',
  'Tênis',
];

function atualizarEstoque(produtos, vendidos) {

  let estoqueAtualizado = [...produtos];

  vendidos.forEach((itemVendido) => {
    let indice = estoqueAtualizado.indexOf(itemVendido);
    if (indice !== -1) {
      estoqueAtualizado.splice(indice, 1);
    }
  });

  estoqueAtualizado.sort();

  return estoqueAtualizado;
}

let estoqueRestante = atualizarEstoque(produtos, vendidos);

console.log('Produtos restantes no estoque (em ordem alfabética):');

estoqueRestante.forEach((produto) => {
  console.log(`- ${produto}`);
});