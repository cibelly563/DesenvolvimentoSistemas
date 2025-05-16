/**Crie uma função chamada media que receba três números como argumentos e retorne a média aritmética
entre eles. */

function media(n1,n2,n3){
    let media= (n1+n2+n3)/ 3;
    return(`a media aritmetica é ${media}`)
}
let n1 = 4;
let n2 = 5;
let n3= 4;

console.log(media(n1,n2,n3));
