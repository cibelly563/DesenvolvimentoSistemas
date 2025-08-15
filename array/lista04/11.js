//Crie um array de números e use reduce() para calcular a soma de todos os elementos.
let numeros = [1,2,3,4,5];
let soma  = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma);
