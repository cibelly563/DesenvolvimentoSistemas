let salarioBruto = 1000;
let inss = salarioBruto * 0.07;
let irrf = salarioBruto * 0.14;
let salarioLiquido = salarioBruto - (inss+irrf);

console.log("salario bruto:" + salarioBruto);
console.log("(-) INSS:"+inss);
console.log("(-) IRRF:"+irrf);
console.log("salario liquido:"+salarioLiquido)
