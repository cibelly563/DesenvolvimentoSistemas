/**Crie uma função chamada maiorNumero que receba um 3 números e retorne o maior valor. */

function maiorNumero(n1,n2,n3){
    if(n1>=n2 && n1 >= n3){
        return(`o numero ${n1} é maior `)
    }
  else  if(n2>=n1 && n2 >= n3){
        return(` o numero ${n2} `)
    }
    else{
        return(`o numero ${n3} é maior `)
    }
}
let n1 = 7;
let n2 = 4;
let n3 = 8;

console.log(maiorNumero(n1,n2,n3));
