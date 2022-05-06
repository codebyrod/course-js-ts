// IEEE 754-2008

// let num1 = 1; //number
// let num2 = 2.5; //number

//console.log(num1.toString() + num2); //12.5
//num1 = num1.toString(); // vai transformar a variável em string

/* num1 = 1500;
console.log(num1.toString(2)) // versão binária: 10111011100
 */
//console.log(typeof num1);

//num1 = 10.5789551255547;
//console.log(num1.toFixed(2)); //10.58 ou seja, quantas casas decimais é pra colocar depois da virgula. Aqui não perderia o valor armazenado na variavel, geralmente a gente usa isso aqui lá no final só pra exibir pro usuário.

//console.log(Number.isInteger(num1)); // verifica se um número é inteiro.

/* let temp = num1 * 'Ola'; //Nan
console.log(temp);
console.log(Number.isNaN(temp)); //true. Retornar true pq temp é um NaN
 */

//IMPRECISÃO JAVASCRIPT
// imprecisão do javascript com número com casas decimais
// segue o padrão iEEE754-2008

let num1 = 0.7;
let num2 = 0.1;

console.log(num1); //0.7999999999

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //0.9999999999 (deveria ser 1)
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5

/* // num1 = num1.toFixed(2);
console.log(num1); //
console.log(Number.isInteger(num1));
 */

// PARA RESOLVER ESSE PROBLEMA DEVEMOS USAR O PARSEFLOAT OU O NUMBER
num1 = parseFloat(num1.toFixed(2))

console.log(num1); // 1.5
console.log(Number.isInteger(num1)); // falsepq não é um inteiro.

num1 += num2; //1.6
num1 += num2; //1.7
num1 += num2; //1.8
num1 += num2; //1.9
num1 += num2; //2.0

// num1 = parseFloat(num1.toFixed(2))

num1 = Number(num1.toFixed(2)) //ESSE AQUI VAI RESOLVER O PROBLEMA
console.log(Number.isInteger(num1));
console.log(num1);

// SEGUNDO MODO DE RESOLVER A QUESTÃO É FAZENDO CONTAS

/* num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0
 */












