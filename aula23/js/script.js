/* 
&& -   
|| - 
*/

// Podemos passar condições sem necessariamente criarmos uma condição (if)

const rosa = false && true
console.log(rosa); //false mas false como "valor mesmo"

const roxo = 'Rodrigo' && 0 && 'Maria'
console.log(roxo); // 0

const vermelho = 'Rodrigo' && true && 'Maria'
console.log(vermelho); // 'Rodrigo'

const verde = 'Rodrigo' && true && NaN
console.log(verde); // NaN

//Avaliações com todos os valores verdadeiros, o último valor é retornado.
//Avaliações com qualquer valor falso (em qualquer posição) o primeiro valor falso encontrado é retornado.

/* condicaoVerdadeira && executaMinhaFuncao();
Isso é o mesmo que:

​if (condicaoVerdadeira) {
    executaMinhaFuncao();
}
 */

/* 
FALSY
false
0
'' "" ``
null / undefined
Nan
*/

console.log('Luiz' && 'Maria'); //Maria
console.log('Luiz' && '' && 'Maria'); // ''
console.log('Luiz' && undefined && 'Maria'); // undefined

function falaOi(){
    return 'Oi';
}

/* const vaiExecutar = false;
console.log(vaiExecutar && falaOi()); // false
 */

const vaiExecutar = 'Joãozinho'; // pq 'Joãozinho' não é nenhum dos valores Falsy
console.log(vaiExecutar && falaOi()); // Oi

// Usando OR
console.log(0 || false || null || 'Rodrigo' || true);
// retornar o primeiro valor verdadeiro: 'Rodrigo'

//const corUsuario = null;
//const corPadrao = 'red' //retorna red

const corUsuario = 'black'
const corPadrao = corUsuario || 'red'// (retorna 'black') se o usuario passar uma cor, a gente seta a cor do usuário, senão a gente seta a cor padrão 

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
console.log(a || b || c || d || e); // NaN - último valor falso avaliado

const f = 0;
const g = null;
const h = 'Joãozinho';
const i = false;
const j = NaN;
console.log(f || g || h || i || j);
