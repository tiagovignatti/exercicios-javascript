/*
Exercício 2.3
Precisamos limitar as posições em que um inimigo pode 
andar na tela. A menor posição possível é 0 e a maior, 
100: qualquer valor maior que 100 ou menor que 0 sairia 
fora da tela. Precisamos de uma função LimitaPosicao 
que recebe uma POSICAO que pode ter qualquer valor 
positivo ou negativo, verifica se ela é válida ou não 
e retorna sempre um valor corrigido entre 0 e 100.
*/

function limitaPosicao (posicao) 
{
    if (posicao > 100 || posicao < 0)
    {
        console.log("Esta posição é INVÁLIDA!!!");
        /* A fim de solucionar o problemas de posições maiores
        que 100 ou menores que 0, pensei em pegar o resto da divisão por 
        100 para consegir uma posição valida; funcionol para numeros 
        maiores que 100, mas, para numeros menores que 0 ainda 
        cuntinuavam negativos,então foi só somar 100 aos resto de divisão
        menor que 0 assim nenhum resultado ia ser menor que 0 ou maior que 100.
         */
        var valorCorrigido = posicao % 100;
        if (valorCorrigido < 0)
        {
            valorCorrigido += 100
        } 
        console.log("Sua posição corrigida é:");
        return valorCorrigido;
    }else
    {
        console.log("POSIÇÃO VÁLIDA!!!");
        console.log("Posição: ",posicao);
    }

}

// Testes gerados pelo ChatGPT
console.log(limitaPosicao(0));  // Esperado: 0
console.log(limitaPosicao(100));  // Esperado: 100
console.log(limitaPosicao(198));  // Esperado: 98
console.log(limitaPosicao(-148));  // Esperado: 52
console.log(limitaPosicao(62));  // Esperado: 62
console.log(limitaPosicao(665));  // esperado: 65
console.log(limitaPosicao(-1));  // esperado: 99
console.log(limitaPosicao(-354));  // esperado: 46

