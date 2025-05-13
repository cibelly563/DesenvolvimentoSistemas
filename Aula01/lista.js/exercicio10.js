function verificarEmprestimo(salario,prestação) {
    let limite = salario * 0.20;
    if(prestação>limite){
        return(`o emprestimo foi concedido.`);
    }else{
        return(`o emprestimo nao foi concedido.`);
    }
}
let salario = 1000;
let prestação = 200;
console.log(verificarEmprestimo(salario,prestação));
