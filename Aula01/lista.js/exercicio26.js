function verificarPartida(time1,gol1,time2,gol2){
    if(gol1 > gol2){
        console.log("vencedor",time1);
        return;
    } 
    if(gol2 > gol1){
        console.log("vencedor",time2);
        return;
        
    }
    else{
        console.log("EMPATE");
        return;
    }
}
let time1="flamento";
let gol1 = 3;
let time2 = "corintias;"
let gol2 =2;

console.log(verificarPartida(time1,gol1,time2,gol2));
