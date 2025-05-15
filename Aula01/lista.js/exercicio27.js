function compararNumeros(n1,n2){
    if(n1==n2){
        console.log("Numeros iguais");
        return;
    }
    if(n1>n2){
        console.log("primeiro é maior");
        return;
    }
    else{
        console.log("segundo é maior");
        return
    }
} 
let n1 = 3;
let n2 = 4; 

console.log(compararNumeros(n1,n2));
