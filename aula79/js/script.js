// VALIDAÇÃO DE CPF

// 070.987.720-03
//705.484.450-52

/*
//705.484.450-52
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5(primeiro dígito)
num > 9 ? num : 0

7x 0x 5x 4x 8x 4x 4x 5x 0x  5x
11 10  9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20  0  10 = 284

11 - (284 % 11) = 2(primeiro dígito)
num > 9 ? num : 0

// CPF Válido
705.484.450-52 === 705.484.450-52;

Se houver alteração no dígito, então quer dizer que o CPF não é valido
*/

// Coisas que vamos utilizar na solução

// Na função que vamos criar precisamos receber esse CPF como string

/* let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); //Esse /\D+/g quer dizer tudo que não é número
console.log(cpfLimpo); //70548445052
console.log(typeof(cpfLimpo)); //string */

// transformando a string em um array, cada string em um elemento do array
/* cpfArray = Array.from(cpfLimpo);
console.log(cpfArray) //['7', '0', '5', '4','8', '4', '4', '5','0', '5', '2'] */

// Fazendo um reduce do Array
/* const cpfTotal = cpfArray.reduce((ac, valor) => ac + Number(valor) , 0);
console.log(cpfTotal); //44 */

//1. Receber um cpf
//2. Decompor esses números, no caso podemos usar o Array From para isso
//3. Alguma estratégia para fazer a conta de multiplicação em todos, provavlemte alguma forma de fazer um for para usarmos os índices dos arrays
//4. Acumular o resultado dos fors 
//5. Fazer a conta do resto 11
//6. Verificar se o digito é maior de 9
// Fazer tudo de novo para o segundo número
//Verificar se o número é igual do numero recebido