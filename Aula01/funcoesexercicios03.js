/**
 * exercicio 07) faça uma funçao que receba o salario de um trabalhador e o emprestimo
 * verifique se o emprestimo é de ate 20% do salario do trabalhador ,se for,o emprestimo será aprovado
 * caso contrario ,deve ser,rejeitado
 *
 */

function salarioEmprestimo(salario,emprestimo){
    salario= 1000;
    emprestimo = 200;
    let calcularemprestimo = salario * 0.2;

    if(emprestimo>=calcularemprestimo){
        return ' sera aprovado';
    }
}

