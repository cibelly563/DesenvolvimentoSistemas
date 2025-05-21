/**Faça uma função que converta reais (BRL) para dólares (USD). */

function converter(valorReal){
  let valorDolar = valorReal* 0.1764;
  return valorDolar;
}
let real = 100;
let valorDolar = converter(real);
console.log(`R$  ${real} equivale a ${valorDolar} em dolares` );

