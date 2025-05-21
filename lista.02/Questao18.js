/**18. Elabora uma função que calcule o valor do frete de uma encomenda a partir do peso da mesma. O quilo vale
R$ 2,89. Retorne o valor do frete fornecendo apenas o peso da encomenda a função. */

function calcularfrete(peso){
    let quilo= 2.89;
    let frete= peso * quilo

console.log("Peso da encomenda: " + peso + " kg");
console.log("Valor do frete: R$ " + frete);
    
}

calcularfrete(10);