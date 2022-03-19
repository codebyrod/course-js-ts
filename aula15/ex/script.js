const alunos = ['Luiz', 'Maria', 'João']

alunos.push('Luiza')
alunos.push('Eduardo')
console.log(alunos);

console.log(typeof alunos) //object
console.log(alunos instanceof Array);

/* alunos[0] = 'Eduardo' // Altera um elemento no indice 0, uma vez que esse índice já está preenchido.
c onsole.log(alunos)*/

/* alunos[3] = 'Luiza' // Adiciona um elemento no indice 3, uma vez que esse indice não está preenchido.
console.log(alunos) */

// console.log(alunos.length);

/* alunos[alunos.length] = 'Fábio' //Uma forma meio gambiarra de inserir novos itens ao array
alunos[alunos.length] = 'Leticia'
alunos[alunos.length] = 'Luana' */

// MÉTODOS DE ADICÃO
/* alunos.push('Roberto') // Adiciona no fim
alunos.unshift('Rodrigo') //Adiciona no começo
 */
// MÉTODOS DE REMOÇÃO
/* alunos.pop() // remove do final do elemento
const removido = alunos.pop() // podemos guardar o removido em uma const

const alunoRemovido = alunos.shift() // removendo e guardando em uma const
 */


