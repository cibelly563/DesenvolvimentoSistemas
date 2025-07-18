let carros = [];
// adicionando elementos no array
carros.push('corolla');
carros.push('sw4');
carros.push('onix');
carros.push('fusca');
//alterando elementos do array
carros[2] = "amarok";
//removendo o ultimo elemento
carros.pop();
//adicionando mas elementos no array
carros.push('l200');
carros.push('a3');
carros.push('uno'); 
//pecorrendo o array
for(let i = 0; i< carros.length; i++ ){
    console.log("indice" + i);
    console.log("valor" + carros[i]);
    console.log();
    
}

