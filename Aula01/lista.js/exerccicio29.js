function extratoCompra(codigoProduto, quantidadeDesejada) {
    let nome = "";
    let precoCompra = 0;
    let aumentoLucro = 0;
    let estoque = 0;
    let precoVenda = 0;
    let total = 0;

    switch (codigoProduto) {
        case 1:
            nome = "Ovos";
            precoCompra = 15.00;
            aumentoLucro = 0.30;
            estoque = 5;
            break;
        case 2:
            nome = "Pães";
            precoCompra = 5.00;
            aumentoLucro = 0.25;
            estoque = 9;
            break;
        case 3:
            nome = "Café";
            precoCompra = 7.89;
            aumentoLucro = 0.45;
            estoque = 3;
            break;
        default:
            console.log("Código inválido.");
            return;
    }

    if (quantidadeDesejada > estoque) {
        console.log("Quantidade indisponível em estoque.");
        return;
    }

    precoVenda = precoCompra + (precoCompra * aumentoLucro);
    total = precoVenda * quantidadeDesejada;

    console.log("Produto selecionado:", nome);
    console.log("Preço de venda (cada): R$", precoVenda);
    console.log("Quantidade desejada:", quantidadeDesejada);
    console.log("Total a pagar: R$", total);

    return;
}


let codigo = 4;
let quantidade = 6;

console.log(extratoCompra(codigo,quantidade));
