function verificarVoto(anonascimento,anoatual){
    let idade = anoatual-anonascimento;
    if(idade<=16){
        console.log("voce pode votar");
    }else{
        console.log("voce nao pode votar");
    }
    return
}
let anoquenasceu= 2007;
let anoatual = 2025;

console.log(verificarVoto(anoquenasceu,anoatual));
