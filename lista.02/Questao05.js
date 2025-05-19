/**Crie uma função chamada contarVogais que receba uma string 
 * e retorne o número de vogais 
 * (a, e, i, o, u) nela. 
 * Dica: Pesquise sobre o método indexOf(); 
 * */

function contarVogais(texto){
   let vogais = "aeiouAEIOU";
   let contador=0

     if (vogais.indexOf(texto[0]) !== -1) contador++;
  if (vogais.indexOf(texto[1]) !== -1) contador++;
  if (vogais.indexOf(texto[2]) !== -1) contador++;
  if (vogais.indexOf(texto[3]) !== -1) contador++;
  if (vogais.indexOf(texto[4]) !== -1) contador++;
  if (vogais.indexOf(texto[5]) !== -1) contador++;
  if (vogais.indexOf(texto[6]) !== -1) contador++;

  return contador;

}


let texto= "cibelly";

console.log(contarVogais("cibelly"));

