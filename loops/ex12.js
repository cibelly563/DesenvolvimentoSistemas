/**Faça um programa que imprima toda a tabela ASCII normal; */

for (let i = 32; i <= 127; i++) {
  console.log(`Código ASCII: ${i} -> Caractere: ${String.fromCharCode(i)}`);
}