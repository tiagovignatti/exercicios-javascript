/*
Exercício 3.2
Faça um programa que leia três números e exiba o maior entre eles.
*/

function encontraMaiorNumero(num1, num2, num3) {
    var maior;
    // Verifica qual é o maior número entre os três
    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } else {
        maior = num3;
    }
    console.log("O maior número é:", maior);
}

// Testes gerados pelo ChatGPT
encontraMaiorNumero(3, 1, 2);  // Esperado: "O maior número é: 3"
encontraMaiorNumero(10, 5, 8);  // Esperado: "O maior número é: 10"
encontraMaiorNumero(-1, 0, 1);  // Esperado: "O maior número é: 1"
encontraMaiorNumero(100, 50, 75);  // Esperado: "O maior número é: 100"
encontraMaiorNumero(5, 5, 5);  // Esperado: "O maior número é: 5"
encontraMaiorNumero(-3, -1, -2);  // Esperado: "O maior número é: -1"
encontraMaiorNumero(0, 100, 50);  // Esperado: "O maior número é: 100"
encontraMaiorNumero(1, 1, 0);  // Esperado: "O maior número é: 1"
