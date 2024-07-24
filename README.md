# Exercícios em Javascript (para iniciantes em programação)

exercicios-javascript — é para você que gostaria de aprender programação, não sabe nada ainda e quer iniciar direto na prática utilizando a linguagem JavaScript.

A motivação inicial foi numa tentativa de ensinar minha namorada a programar.

# Índice

   * [Exercícios em Javascript (para iniciantes em programação)](#exercícios-em-javascript-para-iniciantes-em-programação)
   * [Índice](#índice)
   * [Antes de qualquer coisa](#antes-de-qualquer-coisa)
      * [Abrindo o DevTools](#abrindo-o-devtools)
      * [Abrindo o <em>console</em> no codepen.io](#abrindo-o-console-no-codepenio)
   * [Exercícios](#exercícios)
      * [Variáveis e Funções](#variáveis-e-funções)
         * [Exercício 1.1](#exercício-11)
         * [Exercício 1.2](#exercício-12)
         * [Exercício 1.3](#exercício-13)
         * [Exercício 1.4](#exercício-14)
      * [2. Condicionais (<em>if</em>, <em>else</em>)](#2-condicionais-if-else)
         * [Exercício 2.1](#exercício-21)
         * [Exercício 2.2](#exercício-22)
         * [Exercício 2.3](#exercício-23)
      * [3. Lógica](#3-lógica)
         * [Exercício 3.1](#exercício-31)
         * [Exercício 3.2](#exercício-32)
         * [Exercício 3.3](#exercício-33)
      * [4. Loop](#4-loop)
         * [Exercício 4.1](#exercício-41)
      * [5. Vetores (array)](#5-vetores-array)
         * [Exercício 5](#exercício-5)
   * [Respostas](#respostas)
   * [Outras ferramentas para iniciar na programação](#outras-ferramentas-para-iniciar-na-programação)
   * [Referências](#referências)


# Antes de qualquer coisa

Antes de iniciar, precisamos de boas ferramentas para iniciar nossos trabalhos. O "feijão com o arroz" pra mim são as seguintes ferramentas:

 - DevTools, que está dentro do próprio navegador Chrome (apertando a tecla 'F12', na tela do navegador)

 - codepen.io, que é muito bacana também mas que precisa estar online e conectado a Internet pra usar.


## Abrindo o DevTools

(preciso escrever algo sobre console)

## Abrindo o *console* no codepen.io

(preciso escrever algo sobre console)

# Exercícios

## Variáveis e Funções

### Exercício 1.1

Faça um programa que **exiba** 3 números na tela.

Dica - exibindo (ou "imprimindo") números na tela:

```javascript
var a = 23;
console.log(a);
```

### Exercício 1.2

Faça um programa que **leia** 3 números e **exiba**-os na tela.

Dica - lendo números:
```javascript
// abre uma janelinha com um "prompt" que lê um número digitado pelo
// usuário e atribui o resultado a variável "v1"
var v1;
v1 = Number (prompt ());
```

### Exercício 1.3

Faça um programa que **leia** 3 números, **some**-os e **exiba** a média entre eles.

Dica:
```
A média entre dois números, é a soma dos dois números divididos por 2
A média entre três números, é a some dos três números divididos por 3
A média entre 'n' números, é a some dos 'n' números divididos por 'n'
```

### Exercício 1.4

Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.

## 2. Condicionais (_if_, _else_)

### Exercício 2.1 

Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas **se** o resultado for maior que 100.


### Exercício 2.2

Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

Dica - utilize a seguinte função:
```javascript
function personagemMorreu (dano, saude) {
  //
}
```

### Exercício 2.3

Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.

Dica - utilize a seguinte função:
```javascript
function limitaPosicao (posicao) {
  // código da função
}
```

## 3. Lógica

### Exercício 3.1

Faça um programa que leia um número e verifique se ele é par ou ímpar. Exiba uma mensagem indicando o resultado.

Dica - Use o operador de módulo (%) para verificar se um número é divisível por 2.

```javascript
function verificaParOuImpar(numero) {
    //código da função
}
```

### Exercício 3.2

Faça um programa que leia três números e exiba o maior entre eles.

Dica - Use uma série de comparações if para verificar qual número é o maior e, em seguida, exiba o resultado.

```javascript
function encontraMaiorNumero(num1, num2, num3) {
    //código da função
}
```

### Exercício 3.3

Faça um programa que leia um número e determine se ele é positivo, negativo ou zero.

Dica - Utilize uma série de condições if para verificar a natureza do número.

```javascript
function verificaNumero(numero) {
    //código da função
}
```

## 4. Loop

### Exercício 4.1

Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.

## 5. Vetores (array)

### Exercício 5.1
Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.

# Respostas

Ficaria muito grato em receber respostas, correções enviadas por email ou, melhor ainda, [abrindo um "pull request"](https://github.com/tiagovignatti/exercicios-javascript/pulls) por aqui.

Agradeço @SamuelSilvaB, @madruga0, @Thiagomuniz012 que já fizeram algumas excelentes contribuições:
- https://github.com/tiagovignatti/exercicios-javascript/pull/4
- https://github.com/tiagovignatti/exercicios-javascript/issues/2
- https://github.com/tiagovignatti/exercicios-javascript/pull/5 (EXCELENTE EXEMPLO DE CONTRIBUIÇÃO!)

# Outras ferramentas para iniciar na programação

[Glitch](glitch.com)
 
[Rocketseat](rocketseat.com.br)

[VSCode](https://code.visualstudio.com/)

Chrome browser and DevTools

# Referências

https://github.com/progweb2sem2014/repodidatico/wiki/Exerc%C3%ADcios-de-Javascript-(05-09)

https://github.com/gabrieldarezzo/helpjs-ravi

http://professor.leonardomeirelles.com/wp/lista-de-exercicios-javascript/

https://www.guj.com.br/t/exercicios-com-javascript/323892
