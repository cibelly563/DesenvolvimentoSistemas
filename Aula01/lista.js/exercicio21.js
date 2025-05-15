function numeroSemana(numero){
    switch (numero){
        case 1:
            console.log("domingo");
            return;
            case 2:
            console.log("segunda");
            return;
            case 3:
            console.log("terça");
            return;
            case 4:
            console.log("quarta");
            return;
            case 5:
            console.log("quinta");
            return;
            case 6:
            console.log("sexta");
            return;
            case 7:
            console.log("sabado");
            return;
            
            default:
            console.log("valor invalido,tem que ser de 1 a 7.");
            return;
    }
}
let numero=1
console.log(numeroSemana(numero));
