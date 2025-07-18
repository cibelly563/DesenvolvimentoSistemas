console.log(frutas);
let nomes = ['ana','bruno','carlos', 'diana','eduardo'];

let indice= nomes.indexOf('carlos');
if(indice != -1){
    nomes[indice] = 'caio'
}

let indice2 = nomes.indexOf('ana')
if(indice2 != -1 ){
    nomes.splice(indice2,1)
}

console.log(nomes)