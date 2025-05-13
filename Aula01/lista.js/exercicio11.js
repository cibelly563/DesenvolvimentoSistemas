function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let situacao;

    if (imc < 18.5) {
        situacao = "Você está acima do peso!"
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao ="Ótimo você está com o peso legal!";
    } else if (imc >= 25.0 && imc <= 29.9) {
        situacao ="Você está com sobrepeso.";
    } else if (imc >= 30.0 && imc <= 34.9) {
        situacao ="Obesidade grau I.";
    } else if (imc >= 35.0 && imc <= 39.9) {
        situacao ="obesidade Grau II.";
    } else {
        situacao ="Obesidade Grau III.";
    }

    return (`Seu IMC é ${imc}. ${situacao}`);

}
let peso = 89.0;
let altura = 1.79;

console.log(calcularIMC(peso, altura));
