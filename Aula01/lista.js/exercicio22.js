function indentificarTurno(horario){
    if(hora >=5 && hora <=12){
        console.log("turno matutino");
        return;
    }
    if(hora >=13 && hora <=19){
        console.log("turno vespertino");
        return;
    } 
    if(hora >=20 && hora <=24){
        console.log("turno noturno");
        return;
    }
    else{
        console.log("turno invalido");
        return;
    }
}
let hora=20
console.log(indentificarTurno(hora));
