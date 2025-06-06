/**26. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1
a 10. O usuário deve informar de qual número ele deseja ver a tabuada. A saída deve ser
conforme o exemplo abaixo:

Tabuada de 5:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50 */

let base = 2;     
let expoente = 4;  

let resultado = 1;
for (let i = 0; i < expoente; i++) {
  resultado *= base;
}

console.log(base + " ^ " + expoente + " = " + resultado);