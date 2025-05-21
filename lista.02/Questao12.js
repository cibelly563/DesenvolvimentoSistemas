/**12. Implemente uma função recursiva para calcular a sequência de Fibonacci até um determinado número de
termos. */

function Fibonacci(n) {
    if(n == 0){
        return 0;
    } else if(n == 1){
        return 1;
    } else{
        return Fibonacci(n-1) + Fibonacci(n-2)
    }
}

function imprimirFibonacci(i,max){
    if(i < max){
        console.log(Fibonacci(i))
        return imprimirFibonacci(i+1,max);
    } else{
        return;
    }
}

let termo = 18;
imprimirFibonacci(0,termo)