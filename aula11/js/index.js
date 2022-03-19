// Minha solução

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

console.log(varA, varB, varC)
// A B C

varA = varB;
console.log(varA, varB, varC)
// B B C

varB = varC
console.log(varA, varB, varC)
// B C C

let varD = 'A';
varC = varD
console.log(varA, varB, varC)
// B C A

console.log(varA, varB, varC, varD)

//o professor usou outra forma usando uma variável temporária
//abaixo segue a solução do professor

let varX = 'X'; //Y
let varY = 'Y'; //Z
let varZ = 'Z'; //X

let varTempX = varX
console.log(varX, varY, varZ)

varX = varY
console.log(varX, varY, varZ)
//Y Y Z

varY = varZ
console.log(varX, varY, varZ)
//Y Z Z

varZ = varTempX
console.log(varX, varY, varZ)
//Y Z X

//tem uma maneira mais fácil de resolver esse problema sem criar 
//outra variável

let var1 = '1'; //2
let var2 = '2'; //3
let var3 = '3'; //1

[var1, var2, var3] = [var2, var3, var1]
console.log(var1, var2, var3)
