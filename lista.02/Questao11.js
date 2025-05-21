/**11. Escreva uma função recursiva para calcular o número fatorial de um número. */

function faltorial(n){
    if(n==0){
        return 1; 
    } else{
       return  n * faltorial (n-1)
    }

}

let resultado = faltorial(5)
console.log(resultado);
