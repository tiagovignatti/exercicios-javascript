/*
Exercício 1.4
Faça um programa que leia do usuário uma temperatura 
em Fahrenheit, converta-a para graus Celsius e escreva 
o novo valor na tela. 
A fórmula de conversão de Fahrenheit (F) para Celsius é 
C = ( ( F - 32 ) * 5 ) / 9. 

Exemplo: 100 Fahrenheit = 37,77 Celsius.
*/

var tempFahr = parseFloat(prompt("Digite a temperatura em graus Fahrenheit: "));

var fahrenheitToCelcius = ((tempFahr - 32) * 5 ) / 9;

alert(`A temperatura de ${tempFahr}°F convertida para Celcius é de ${fahrenheitToCelcius.toFixed(2)}°C.`)
console.log(fahrenheitToCelcius);