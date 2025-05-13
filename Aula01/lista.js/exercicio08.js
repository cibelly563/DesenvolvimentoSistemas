function erroNumero(numero) {
    if(numero == -5 ){
        return(`o numero ${numero} é igual a -5.`);
    } if(numero == 5){
        return(` o numero ${numero} é igual a 5.`);
    } else{
        return(`erro:o numero ${numero} não é igual a -5 ou a 5.`);
    }
}
let numero= -5;
console.log(erroNumero(numero));

