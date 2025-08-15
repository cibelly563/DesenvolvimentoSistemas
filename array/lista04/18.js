//Crie um array de números e use some() para verificar se existe algum número negativo

let numeros = [ 1,-2,4,-8];
let numeronegativo = numeros.some(numero => numero < 0);

if(numeronegativo){
    console.log('existe numero negativo');
    
}else{
    console.log('não existe numero negativo');
    
}