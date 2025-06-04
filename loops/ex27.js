let base = 2;     
let expoente = 4;  

let resultado = 1;
for (let i = 0; i < expoente; i++) {
  resultado *= base;
}

console.log(base + " ^ " + expoente + " = " + resultado);