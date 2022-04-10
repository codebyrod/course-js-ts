/* 
let a = 'A'; // A
let b = 'B'; // B
let c = 'C'; // C
*/

// Atribuição já desestruturada
/* 
const [a, b, c] = [1, 2, 3]
console.log(a, b, c);
*/

//Atribuição desestruturando
/*
const numeros = [1, 2, 3]
const [x, y, z] = numeros
console.log(x, y, z);
*/

//Atribuição via desestruturação
/*
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c); //B C A
*/

//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//pegando o primeiro número via Array
/*
const primeiroNumero = numeros[0];
console.log(primeiroNumero);
*/

// valores por atribuição via desestruturação
/* 
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero);
 */

// Atribuindo o resto, usaremos ... e o nome da variavel que vai receber esse resto
// O nome desse operador é rest operator ...rest
// tb tem o operador de espalhamento ...spread

/* const [um, dois, três, ...resto] = numeros;
console.log(um, dois, três);
console.log(resto); */


//pulando valores do array com espaços vazios entre vírgulas
/*
const [um, , três, , cinco, ...resto] = numeros;
console.log(um, três, cinco);
console.log(resto); 
*/

//Acessando arrays multidimensionais
/* 
const arrayMulti = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros[1][2]); 
*/

//Atribuindo via desestruturação arrays multidimensionais
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//array zero, só colocamos a vírgula
//acessamos o segundo array
// virgula virgula para pular o indice 0 e 1, e no indice 2 declaramos a variavel
const [,[,,seis]] = numeros;
console.log(seis);

