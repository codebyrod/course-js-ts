/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valor
*/

/* let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); */

/* 
Referência (mutável) - array, object, function
*/

/* let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b); //ambos os lugares foram afetados pq ambos apontam para o mesmo lugar da memória

a.push('Luiz');
console.log(a, c);
 */

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

/* const b = a; // aqui estamos dizendo que a aponta para o mesmo lugar na memória que b */

const b = {...a} // aqui estamos copiando o conteúdo de a para b

a.nome = 'João'; 
console.log(b);

