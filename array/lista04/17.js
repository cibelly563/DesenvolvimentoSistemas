//Crie um array de produtos e use forEach() para exibir cada elemento no console.

let produtos = [
    {nome: "camiseta", preco:25.99},
    {nome: "croped", preco:20},
    {nome: "calça jeans", preco: 100},

]

produtos.forEach(function(produto) {
  console.log("Nome:", produto.nome, "- Preço:", produto.preco);
});