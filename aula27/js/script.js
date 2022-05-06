// OPERADORES TERNÁRIOS
// ? :

//imagina site com usuário comum e usuários vips
// dependendo da pontuação vai receber uma flag (se é vip ou não)
// + 1000 pontos é vip

const pontuacaoUsuario = 1000;

/* if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
} */

// USANDO OPERAÇÃO TERNÁRIA
// e já vamos guardar o valor em uma variável

// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário comum'
console.log(nivelUsuario);

//USANDO OR
const corUsuario = null;
const corPadrao = corUsuario || 'black';

console.log(nivelUsuario, corPadrao);
