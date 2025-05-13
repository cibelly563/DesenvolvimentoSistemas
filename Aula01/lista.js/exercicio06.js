function verificarNumero(numero) {

if(numero<0){
    if(numero %2==0){
        return(`o numero ${numero} é negativo e par. `);
    } else {
        return(` o numero ${numero} é negativo e impar.`);
    }
} else{
    return(` o numero é positivo.`)
}
}
let numero=-9
console.log(verificarNumero(numero));