/**Elabore uma função que receba o salário bruto de uma pessoa e calcule o salário líquido. Reduza do salário
5% se o salário bruto for até R$ 1.518,00, 7,5% se o salário bruto for até R$ 2.826,65, 15% se o salário
bruto for até R$ 3.751,05 e, 27,5%, se o salário for superior a R$ 3.751,05. Exiba o salário bruto, descontos
e o salário líquido. */

function calcularSalario(salarioBruto){

    let descontoSalario;
    let percentual;

    if(salarioBruto<=151800){
        percentual = 5
        descontoSalario =  salarioBruto * 0.05;

    } else if (salarioBruto<=282665){
        percentual = 7.5
        descontoSalario = salarioBruto *  0.075;

    }else if(salarioBruto<=375105){
        percentual = 15
        descontoSalario = salarioBruto * 0,015;

    } else{
        percentual = 27,5
        descontoSalario =  salarioBruto *0.275
    }
}

let salarioLiquido= salarioBruto - descontoSalario;

console.log("salario bruto",salarioBruto);
console.log("desconto",percentual,"% : R$", descontoSalario);
console.log("salarioLiquido", salarioLiquido);


