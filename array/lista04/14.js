//  Crie um array de nomes e use includes() para verificar se um determinado nome existe no array.
let nomes = ['cibelly','klara','ruan'];

let nomeprocurado = 'cibelly';

let existe = nomes.includes(nomeprocurado);

if(existe){
    console.log(`o nome ${nomeprocurado} existe`);
    
} else{
    console.log('esse nome não existe');

}
