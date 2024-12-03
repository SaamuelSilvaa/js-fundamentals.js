
/*
//Exercicio 1 - Imprimir números de 1 a 10, crie um loop que imprima os números de 1 a 10

for (i = 1; i <= 10; i++) {
    console.log(i)
}


// Exercicio 2 = Imprimir números pares entre 1 e 20
//Crie um loop que imprima apenas os números pares de 1 a 20.

for (i = 1; i <= 20; i++) {

    if (i % 2 === 0){
        console.log(i,'é par')
    } 
    }


    // Exercício 3: Somar os números de 1 a 100
//Crie um loop que calcule a soma de
//todos os números de 1 a 100.

let soma = 0
for(let num =1; num <= 100; num++){
    soma += num;
    console.log('A soma de 1 a 100 é: ', soma)
}
    

//Exercício 4: Imprimir os elementos de um array
//Dado um array de frutas, use um loop para imprimir cada fruta.


const frutas = [
    {
        name: 'Maçã',
        price: 2
    },{
        name: 'Pêra',
        price: 5
    },{
        name: 'Uva',
        price: 4
    },{
        name: 'Banana',
        price: 3
    }

]

for (let fruta of frutas) {
    console.log(fruta.name)
}




//Exercício 5: Multiplicar os números de 1 a 10 por 2
//Crie um loop que imprima o resultado da multiplicação de cada número de 1 a 10 por 2.

for (i = 1; i <= 10; i++) {

    console.log(i * 2)
}



//Exercício 6: Imprimir números de 10 a 1 (contagem regressiva)
//Crie um loop que imprima os números de 10 até 1.


let contador = 10
 while (contador >= 1) {
    console.log(contador);
    contador --;
 }


 for (i = 10; i >= 1; i--) {
    console.log(i)
}


//Exercício 7: Encontrar o maior número em um array
//Dado um array de números, use um loop para encontrar e imprimir o maior número.

let numeros = [10, 5, 8, 20, 3, 85];
let maiorNumero = numeros[0]; // Começamos assumindo que o primeiro número é o maior

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]; // Atualiza o maior número encontrado
    }
}

console.log(maiorNumero);


//Exercício 8: Contar números ímpares entre 1 e 50
//Crie um loop que conte quantos números ímpares existem entre 1 e 50 e imprima o resultado.

for (i = 1; i <= 50; i++) {

    if (i % 2 === 1){
        console.log(i,'é impar')
    } 
    
}


//Imprimir a tabuada de um número
//Dado um número, use um loop para imprimir a tabuada desse número (de 1 a 10).

let num = 5
for(i = 1; i <= 10; i++) {
    console.log(num +' x ' + i + ' = ' + num*i)
}



//Exercício 10: Reverter uma string
//Dada uma string, use um loop para imprimi-la de trás para frente.

let str = "Vida Rasa 4-4-2";
let resultado = '';

for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
}

console.log(resultado);

*/



