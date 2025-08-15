let array = [];

console.log("Tipo do meu array: " + typeof (array));
 
function adicionarNumero() {
    let input = document.querySelector('#numero');
    let n = parseInt(input.value);
    //alert(n)
    let exibirarray = document.querySelector('#exibir-array');

    //se n for nao numerico,mostrará um alert e encerrara a função
    if(isNaN(n)){
        alert('Digite um numero válido');
        return;
    }

    array.push(n);

    // limpar o campo de entrada
    input.value = '';

    console.log(array);
    exibirarray.innerHTML= `Array: ${array} <br/>tamanho do Array: ${array.length}`;
}

function removerarray() {
    let input = document.querySelector('#numero2');
    let n = parseInt(input.value);
    let removerarray = document.querySelector('#remover-array');

if(isNaN(n)){
        alert('Digite um numero válido');
        return;
    }

  let indice = array.indexOf(n)

   if(indice == - 1){
    alert('O numero não está no array');
    return
   }
   array.splice(indice,1)
    
    }
  
  console.log(array)
  removerarray.innerHTML = `array: ${array} <br/>removendo array: ${array.length}`

