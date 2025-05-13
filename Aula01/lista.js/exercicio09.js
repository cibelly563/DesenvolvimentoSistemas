function anoBissexto(ano) {
    if(ano % 400 ==0){
        return(` o ano ${ano} é bissexto`);
    } else if(ano % 4 ==0 && ano % 100 !==0){
         return(` o ano ${ano} é bissexto`);
    }else{
        return(` o ano ${ano} que voce mencionou não é bissexto.`);
    }
}
let ano = 1988;
console.log(anoBissexto(ano));
