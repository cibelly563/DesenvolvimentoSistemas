let frutas = ['maça','banana','laranja'];

let indice = frutas.indexOf('banana');

//se o indice retornado for diferente de -1, mude ,atraves do indice pára 'uva'

if(indice !== -1){
    frutas[indice] = 'uva';
    frutas.unshift('bergamota');
    frutas.push('tangerina');
    frutas.splice(indice,2);
}
console.log(frutas)