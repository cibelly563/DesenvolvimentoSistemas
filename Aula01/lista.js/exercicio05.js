/**
 * faça um programa que leia 3 número inteiros e apresente o maior deles
 */
let n1 = 5;
let n2 = 6;
let n3 = 7;
let maior;

if(n1>n2){
    maior= n1;
}

else{
    maior= n2;
}

if(n3 > maior) {
    maior= n3;
}
console.log(`o maior numero é ${maior}`);
