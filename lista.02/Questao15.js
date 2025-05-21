/**Escreva uma função que tenha parâmetros padrão e teste chamá-la com diferentes combinações de
argumentos. */

function argumentos(idade = 17, nome = "cibelly") {
    console.log("Olá, meu nome é", nome, "e tenho", idade, "anos.");
}

argumentos();                // Olá, meu nome é cibelly e tenho 17 anos.
argumentos(20);              // Olá, meu nome é cibelly e tenho 20 anos.
argumentos(25, "andriely");     // Olá, meu nome é andriely e tenho 25 anos.