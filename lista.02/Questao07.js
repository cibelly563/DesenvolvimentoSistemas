/**7. Crie duas funções: quadrado(n): retorna o quadrado de n. somaQuadrados(a, b): retorna a soma
dos quadrados de a e b, utilizando a função quadrado. */


function quadrado(n){
    let multiplicacao = n * n;
    return multiplicacao;
}

function somaQuadrados(a, b){
    let soma = quadrado(a) + quadrado(b);
    return soma;
}

let n1 = 3;
let n2 = 4;

console.log("O quadrado de " + n1 + " é " + quadrado(n1));
console.log("O quadrado de " + n2 + " é " + quadrado(n2));
console.log("A soma dos quadrados de " + n1 + " e " + n2 + " é igual a " + somaQuadrados(n1, n2));