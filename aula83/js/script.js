// ESTRUTURA DE DADOS OBJETO MAP()
// Estrutura de dados map, não array.map()

// O Professor vai passar o problema que ele teve e um caso de uso.

// 1. Um objeto comum, muitas vezes quando recebemos dados de api, vem mais ou menos assim
const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

//2. Qual foi o problema que o professor teve?
// 2.1 - O professor estava montando um algoritmo, onde queria pegar novas pessoas

/* const novasPessoas = {};
for(const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa};
}
console.log(novasPessoas); */

// O retorno do console.log
/* {
    '1': { id: 1, nome: 'Helena' },
    '2': { id: 2, nome: 'Maria' },
    '3': { id: 3, nome: 'Luiz' }
} */

// 3. São dois problemas, o primeiro que precisava que a chave fosse um Number e o segundo é que a ordem ficou diferente, seguiu uma ordem numérica, e não como estava anteriormente

// 4. Nesse sentido o professor usou um map
// 5. Criamos um objeto Map()
const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const { id } = pessoa;
    // 6. Usamos set para setar o valor. O primeiro argumento será a chave que queremos, o segundo vai ser o valor que queremos colocar no map.
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas);
// 7. Retorno do log
/* Map {
    3 => { id: 3, nome: 'Luiz' },
    2 => { id: 2, nome: 'Maria' },
    1 => { id: 1, nome: 'Helena' }
} */

console.log(novasPessoas.get(2));
/* { id: 2, nome: 'Maria' } */

// 8. Podemos iterar sobre o map para retornar um array
for (const pessoa of novasPessoas) {
    console.log(pessoa);
}
//retrono do console.log
/* [ 3, { id: 3, nome: 'Luiz' } ]
[ 2, { id: 2, nome: 'Maria' } ]
[ 1, { id: 1, nome: 'Helena' } ] */

// 9. Pegando o id de fora
for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome);
}
// retorno do console.log
/* 3 3 Luiz
2 2 Maria
1 1 Helena */

// 10. Podemos pegar apenas as chaves
for (const pessoas of novasPessoas.keys()) {
    console.log(pessoas);
}

//retorno do console.log
/* 
3
2
1 */

// 11. Podemos pegar apenas os valores
for (const pessoas of novasPessoas.values()) {
    console.log(pessoas);
}
//retorno do console.log
/* { id: 3, nome: 'Luiz' }
{ id: 2, nome: 'Maria' }
{ id: 1, nome: 'Helena' } */

// 12. deletando um dos valores
novasPessoas.delete(2);
console.log(novasPessoas);
// retorno do console.log
// Map { 3 => { id: 3, nome: 'Luiz' }, 1 => { id: 1, nome: 'Helena' } }

// Link para documentação
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map