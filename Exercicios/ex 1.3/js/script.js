/*
Exercício 1.3
Faça um programa que leia 3 números, some-os e exiba 
a média entre eles.
*/

/*
prompt retorna valores do tipo string. Você precisa 
converter esses valores para números antes de realizar 
operações matemáticas.
*/
var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite mais um número: "));
var num3 = parseFloat(prompt("Digite o último número: "));

var media = (num1 + num2 + num3) /3;

alert(`A média entre esses três números é: ${media}`);

console.log("Numeros digitados: ", num1, num2, num3);
console.log("Média: ",media);

