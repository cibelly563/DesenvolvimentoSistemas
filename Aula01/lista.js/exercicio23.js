function folhaPagamento(valorhora,horastrabalho){
    let salarioBruto= valorhora*horastrabalho;

    let desconto=0;
    if(salarioBruto<=900){
        desconto=0;
    } else if(salarioBruto<=1500){
        desconto= salarioBruto * 0.05;
    } else if (salarioBruto <=2500){
        desconto=salarioBruto * 0.10
    } else{
        desconto= salarioBruto * 0.20
    }

    let sindicato = salarioBruto * 0.3;
    let fgts = salarioBruto * 0.11;

    let descontototal= desconto + sindicato
    let salarioliquido = salarioBruto + descontototal

    console.log("Salário Bruto: R$", salarioBruto);
    console.log("(-) IR: R$", desconto);
    console.log("(-) Sindicato: R$", sindicato);
    console.log("FGTS (11%): R$", fgts);
    console.log("Total de descontos: R$", descontototal);
    console.log("Salário Líquido: R$", salarioliquido);

    return;
}
let horastrabalhadas=220;
let valorhora=5;

console.log(folhaPagamento(valorhora,horastrabalhadas));
