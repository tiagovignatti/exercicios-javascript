/*
Exercício 3.1
Faça um programa que leia um número e verifique se ele é par ou ímpar.
Exiba uma mensagem indicando o resultado.
*/

function verificaParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }
}

// Testes gerados pelo ChatGPT
verificaParOuImpar(0);  // Esperado: "0 é par"
verificaParOuImpar(1);  // Esperado: "1 é ímpar"
verificaParOuImpar(2);  // Esperado: "2 é par"
verificaParOuImpar(3);  // Esperado: "3 é ímpar"
verificaParOuImpar(100);  // Esperado: "100 é par"
verificaParOuImpar(101);  // Esperado: "101 é ímpar"
verificaParOuImpar(-2);  // Esperado: "-2 é par"
verificaParOuImpar(-3);  // Esperado: "-3 é ímpar"
