function mediaAritimetica(nota1,nota2,nota3){

    let media= (nota1+nota2+nota3)/3;
    console.log("a media é",media);
    
    if(media>=70){
        console.log("situaçao do aluno:APROVADO");
    } else if(media<40){
        console.log("situaçao do aluno:REPROVADO");
    } else{
        console.log("situaçao do aluno:EM RECUPERAÇAO");
    }
}
let nota1=7;
let nota2=8;
let nota3=9;

console.log(mediaAritimetica(nota1,nota2,nota3));
