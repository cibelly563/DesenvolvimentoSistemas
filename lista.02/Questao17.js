/**Elabore uma função para a partir do parâmetro preço da conta, calcule o valor da gorjeta que é de 10%
sobre o valor da conta. Exiba o valor da conta, o valor da gorjeta e o valor total da conta. */
let precodaconta=300;

function parametroConta(conta){
    let contagorjeta = conta * 0.10;
    let contatotal = conta + contagorjeta ;

console.log("o valor da conta é",conta);
console.log("o valor da gorjeta é",contagorjeta);
console.log("valor total",contatotal);

}

parametroConta(precodaconta);

