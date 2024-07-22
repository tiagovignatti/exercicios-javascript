/*
Exercício 5
Faça um programa que leia um vetor numérico de 10 
posições. Depois, ordene o vetor em ordem crescente 
e apresente os elementos ordenados.
*/

var vet = [10]
var p = 0;

while (p < 10) 
{
    var addVet = parseFloat(prompt("Qual numero deseja colocra no vetor: "));
    vet[p] = addVet
    p = p + 1

}

var maior = vet[0];
var i = 0;

while (i < vet.length - 1)
{
    if (vet[i] > maior)
    {
        maior = vet[i];
    }
    i = i + 1;
}

console.log(vet)
console.log("maior número encontrado no vetor é:", maior);
