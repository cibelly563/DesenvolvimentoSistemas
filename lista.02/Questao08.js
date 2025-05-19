/**Declare uma variável fora de uma função e modifique-a dentro da função e a exiba fora da função. */
let contador = 0;

function declararFuncao() {
  contador++; 
}

declararFuncao();
console.log(contador); 
