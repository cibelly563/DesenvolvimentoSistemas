function intervaloNumero(numero) {
    if(numero>=5 &&  numero <=9){
        return(`o numero ${numero} está no intervalo de 5 e 9.`);
    }else{
        return(`o numero ${numero} nao esta no intervalo de 5 e 9.`);
    }
}
let numero = 6;
console.log(intervaloNumero(numero));
