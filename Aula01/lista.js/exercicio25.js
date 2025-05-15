/**Faça um programa que leia o ano atual e o ano de nascimento de uma pessoa e em seguida exiba
uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês
em que a pessoa nasceu). */
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
