/**Crie uma função chamada contarVogais que receba uma string 
 * e retorne o número de vogais 
 * (a, e, i, o, u) nela. 
 * Dica: Pesquise sobre o método indexOf(); 
 * */

function contarVogais(texto){
   let vogais = "aeiouAEIOU";

    return(vogais.indexOf(texto))

    
}
let texto= "cibelly";

console.log(contarVogais("cibelly"));

