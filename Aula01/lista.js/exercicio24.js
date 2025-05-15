function verificarLaranja(quantidadedelaranja){
    let preco;
    if(quantidadedelaranja<12){
        preco=1.30
    }
    else{
        preco=1.0
    }
    let custototal = quantidadedelaranja * preco;
    console.log("o custo total foi:",custototal);
    
    return;
}
let quantidadedelaranja=15;
console.log(verificarLaranja(quantidadedelaranja));
