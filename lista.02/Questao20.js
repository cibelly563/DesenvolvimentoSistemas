/**20. Crie uma função chamada somaDigitosPrimos que receba um número inteiro positivo e retorne a soma
dos dígitos que são números primos. */

function somaDigitosPrimos(digito01,digito2,digito3){
    let soma= digito01+digito2+digito3;

    if(digito01%1==0 && digito01%digito01==0 ){
     console.log("o numero é primo");
     
    }

    if(digito2%1==0 && digito2%digito2==0 ){
     console.log("o numero é primo");
    }

    if( digito3%1==0 && digito3%digito3){
       console.log("o numero é primo");
    }
      
    console.log("a soma dos digitos é",soma);

    return;
}


somaDigitosPrimos(5, 7 , 8);