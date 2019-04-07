# Exercícios em Javascript (para iniciantes em programação)

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

### Exercício 3.2

### Exercício 3.3

## 4. Loop

### Exercício 4.1

Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.

## 5. Vetores (array)

### Exercício 5
Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.


<a name="ferramentas"/>
## Ferramentas

### Para iniciar na programação
  
codepen.io

rocketseat.com.br

Chrome browser and DevTools

### Abrindo o *console* (no codepen.io)

(escrever algo sobre console)


## Referências

https://github.com/progweb2sem2014/repodidatico/wiki/Exerc%C3%ADcios-de-Javascript-(05-09)

https://github.com/gabrieldarezzo/helpjs-ravi

http://professor.leonardomeirelles.com/wp/lista-de-exercicios-javascript/

https://www.guj.com.br/t/exercicios-com-javascript/323892
