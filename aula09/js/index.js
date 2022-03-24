// String, number, undefined, null, boolean, symbol(que veremos mais adiante)

const name = 'Rodrigo'; //String
const name1 = "Rodrigo"; //String
const name2 = `Rodrigo`; //String

const num1 = 10; //number
const num2 = 10.52; //number

let nomeAluno; // undefined = não aponta para local nenhum na memória

let sobrenomeAluno = null // 

/*
 * Nulo = não aponta para local nenhum na memória
 * usamos quando queremos desconfigurar uma variavel
 * nulo é quando queremos setar uma variavel enquanto nula
 * nunca usaremos undefined
*/

const aprovado = true; 
//boolean. Só tem duas possibilidades, verdadeiro ou falso. (lógico)

console.log(typeof name, name)
console.log(typeof name1, name1)
console.log(typeof name2, name2)
console.log(typeof num1, num1)
console.log(typeof num2, num2)
console.log(typeof nomeAluno, nomeAluno)
console.log(typeof sobrenomeAluno, sobrenomeAluno)
// segundo o professo null retornar um object é um bug da linguagem
console.log(typeof aprovado, aprovado)

let a = 2;
let b = a;
console.log(a, b)
//retunr 2 2

a = 3;
console.log(a, b)
// retunr 3 2


