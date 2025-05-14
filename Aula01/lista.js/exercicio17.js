function trianguloRetangulo(a, b, c) {
    if (a > 0 && b > 0 && c > 0 && a % 1 === 0 && b % 1 === 0 && c % 1 === 0) {
        let hipotenusa = a;
        let cateto1 = b;
        let cateto2 = c;

        if (b > hipotenusa) {
            hipotenusa = b;
            cateto1 = a;
            cateto2 = c;
        }

        if (c > hipotenusa) {
            hipotenusa = c;
            cateto1 = a;
            cateto2 = b;
        }

        if (hipotenusa * hipotenusa == cateto1 * cateto1 + cateto2 * cateto2) {
            console.log("É um triângulo retângulo.");
        } else {
            console.log("Não é um triângulo retângulo.");
        }
    } else {
        console.log("os valores  Devem ser inteiros e positivos.");
    }

    return;
}
let a =3;
let b = 4;
let c =5;

console.log(trianguloRetangulo(a,b,c));
