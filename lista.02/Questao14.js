/**14. Implemente uma função que receba um número variável de argumentos e retorne a soma de todos eles. */

function somarNumero(a, b, c) {
  if (a) {
    if (b) {
      if (c) {
        return a + b + c;
      } else {
        return a + b;
      }
    } else {
      return a;
    }
  } else {
    return 0;
  }
}

console.log(somarNumero(1, 2, 3)); 
console.log(somarNumero(1, 2));    
console.log(somarNumero(3));       
console.log(somarNumero());        