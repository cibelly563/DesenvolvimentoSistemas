/**20. Crie uma função chamada somaDigitosPrimos que receba um número inteiro positivo e retorne a soma
dos dígitos que são números primos. */

function somaDigitosPrimos(numero) {
  let digito = numero % 10;
  let soma = 0;

  if (digito === 2 || digito === 3 || digito === 5 || digito === 7) {
    soma += digito;
  }

  if (numero >= 10) {
    soma += somaDigitosPrimos((numero - digito) / 10);
  }

  return soma;
}

// Exemplo de uso:
console.log(somaDigitosPrimos(23957)); // Saída: 17