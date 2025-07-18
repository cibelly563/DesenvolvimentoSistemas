// 1- crie um array chamado cores com tres cores diferentes
//adicione uma nova cor ao final do array
//remova a primeira cor do array 
//mostre o array final no console


let cores = ['amarelo','rosa','verde']
let indicerosa = cores.indexOf('amarelo')
if(indicerosa != 1){
    cores.splice(indicerosa,1 )
    cores.push('roxo')
}
console.log(cores)