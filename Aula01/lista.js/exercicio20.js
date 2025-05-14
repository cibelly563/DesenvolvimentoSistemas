function turnoEstuda(turno){
    switch (turno){
        case 'M':
        console.log("bom dia");
        return;
        case 'V':
        console.log("boa tarde");
        return;
        case'N':
        console.log("boa noite");
        return;
        default:
            console.log("valor invalido");

    } 

}
console.log(turnoEstuda('M'));
