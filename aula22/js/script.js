/* 
OPERADORES LÓGICOS
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Ao menos uma expressõa precisa retornar verdadeira
! -> NOT -> NÃO -> 
*/

const expressaoAnd = true && true && true && true
console.log(expressaoAnd)

const expressaoOr = false || false || true || false
console.log(expressaoOr);

// ! (negação) ou seja, inverte o valor
// !! nega a negação, não utlizamos, mas é só pra entender o funcionamneto

console.log(!false); //TRUE