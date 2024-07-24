/*
Exercício 3.3
Faça um programa que leia um número e determine se ele é positivo, negativo ou zero.
*/

function verificaNumero(numero) {
    if (numero > 0) {
        console.log(numero + " é positivo");
    } else if (numero < 0) {
        console.log(numero + " é negativo");
    } else {
        console.log(numero + " é zero");
    }
}

// Testes gerados pelo ChatGPT
verificaNumero(5);  // Esperado: "5 é positivo"
verificaNumero(-3);  // Esperado: "-3 é negativo"
verificaNumero(0);  // Esperado: "0 é zero"
verificaNumero(7);  // Esperado: "7 é positivo"
verificaNumero(-10);  // Esperado: "-10 é negativo"
