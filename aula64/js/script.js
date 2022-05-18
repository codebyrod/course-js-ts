// Método Splice faz o que shift, pop, push, unshift faz
// Também é de valor passado por referência, ou seja, altera o array original

//              -5        -4       -3        -2         -1
//               0         1        2         3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, deleteQuantElem, elem1, elem2, elem3);

// Simulando o POP;
// remove o último elemento do array
nomes.splice(4, 1); // Estamos removendo o indíce 4, apenas 1 elemento
console.log(nomes); // [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia' ]
// Podemos jogar o elemento removido em uma const. A diferença é que ela retorna um array
//const nomes2 = [...nomes];
const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos2 = nomes2.splice(4, 1);
console.log(`ARRAY 2 ${removidos2}`, nomes2); // ARRAY 2 Júlia [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]

//A MESMA COISA COM VALORES NEGATIVOS
// const nomes3 = [...nomes];
const nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos3 = nomes3.splice(-1, 1);
console.log(`ARRAY 3 ${removidos3}`, nomes3); // ARRAY 3 Júlia [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]

//REMOVENDO TODOS DEPOIS DE UM ÍNDICE X
// const nomes4 = [...nomes];
const nomes4 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos4 = nomes4.splice(-3, Number.MAX_VALUE);
console.log(`ARRAY 4 ${removidos4}`, nomes4); // ARRAY 4 Eduardo,Gabriel,Júlia [ 'Maria', 'João' ]

// ENVIANDO COISAS PARA O ARRAY
// const nomes5 = [...nomes];
const nomes5 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const adicionados5 = nomes5.splice(3, 0, 'Rodrigo') //Ele adiciona Rodrigo no Índice 3
console.log(`ARRAY 5 ${adicionados5}`, nomes5); // ARRAY 5  [ 'Maria', 'João', 'Eduardo', 'Rodrigo', 'Gabriel', 'Júlia' ]

// SUBSTITUINDO ELEMENTOS NO ARRAY
// const nomes6 = [...nomes];
const nomes6 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const substituindo6 = nomes6.splice(3, 1, 'Marcelo') //Ele adiciona Marcelo no índice 3
//Não conseguimos renderizar array dentro de templates strings
console.log(`ARRAY 6 ${substituindo6}`, nomes6); // ARRAY 6 Gabriel [ 'Maria', 'João', 'Eduardo', 'Marcelo', 'Júlia' ]

// SUBSTITUINDO MAIS DE UM ELEMENTO NO ARRAY
// const nomes7 = [...nomes];
const nomes7 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const substituindo7 = nomes7.splice(3, 2, 'Plínio', 'Ciro') //Ele remove Gabriel e Júlia e Adiciona Plínio e Ciro
//Não conseguimos renderizar array dentro de temlates strings
console.log(`ARRAY 7 ${substituindo7}`, nomes7); // ARRAY 7 Gabriel,Júlia [ 'Maria', 'João', 'Eduardo', 'Plínio', 'Ciro' ]

// Simulando o SHIFT;
// remove o primeiro elemento do array
const nomes8 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos8 = nomes8.splice(0, 1); // Estamos removendo o indíce 0, apenas 1 elemento
console.log(`ARRAY 8 ${removidos8}`, nomes8); // ARRAY 8 Maria [ 'João', 'Eduardo', 'Gabriel', 'Júlia' ]

// Simulando o PUSH;
//adiciona elementos no final do array
const nomes9 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
nomes9.splice(nomes9.length, 0, 'Adalberto', 'Caique'); // Estamos verificando o tamanho do array e somando mais um, removendo zero elementos e inserindo quantos elementos quisermos.
console.log(`ARRAY 9`, nomes9); // ARRAY 9 ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'Adalberto', 'Caique']

// Simulando o UNSHIFT;
// adiciona elementos no começo do array
const nomes10 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
nomes10.splice(0, 0, 'Adalberto', 'Caique');
console.log(`ARRAY 10`, nomes10); // ARRAY 10 ['Adalberto', 'Caique', 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
