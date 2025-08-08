let array = [];

console.log("Tipo do meu array: " + typeof (array));
 
function adicionarNumero() {
    let input = document.querySelector('#numero');
    let n = parseInt(input.value);
    //alert(n)
    let exibirarray = document.querySelector('exibir-array');

    //se n for nao numerico,mostrará um alert e encerrara a função
    if(isNaN(n)){
        alert('Digite um numero válido');
        return;
    }

    array.push(n);

    // limpar o campo de entrada
    input.value = '';

    console.log(array);
    exibirarray.innerHTML= `Array: ${array} tamanho do Array ${array.length}`
}
