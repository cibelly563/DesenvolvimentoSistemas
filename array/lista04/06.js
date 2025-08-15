//Crie um array de 6 elementos e use slice() para criar um novo array apenas com os 3 primeiros.

 let array1 = [1,2,3,4,5,6];
  
 let novoarray = array1.splice(0,3);

 console.log('array original',array1);
 console.log('novo array',novoarray);

 