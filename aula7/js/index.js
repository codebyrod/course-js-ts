

// Não podemos criar constante com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um úmero
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// Não Utilize Var, utilize CONST

// já deve ser inicializado com valor

const nome = 'Rodrigo'

// nome = 'Rafael'// não podemos reescrever o valor da const

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; 
//apenas com let ele pode receber ele mesmo como valor da variavel

console.log(primeiroNumero)
console.log(segundoNumero)
console.log(resultado)
console.log(resultadoDuplicado)
console.log(resultadoTriplicado)

console.log(typeof resultado)
console.log( typeof (primeiroNumero, segundoNumero))
