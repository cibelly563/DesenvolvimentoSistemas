/**10. Implemente uma função que receba outra função como parâmetro (callback) e a execute. */ 


function saudacao() {
  console.log("Olá, meu nome é Cibelly");
}

function executarCallback(callback) {
  console.log("Iniciando...");
  callback(); 
  console.log("Finalizando...");
}

executarCallback(saudacao);