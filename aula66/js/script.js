// FILTER, MAP, REDUCE
// As funções mais importantes de array.

// FILTER
// Sempre vai retornar um array, com a mesma quantidade de elementos ou menos.

// retorne os numeros maiores que 10
const num1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 ,15 , 22, 27];

//filter não modifica o array original, mas retorna um outro array.
//O método filter vai receber uma função de callback, essa função de callback vai iterar sobre cada um dos elementos do meu array.

// FORMULA 1 - LONGA
//Vamos criar uma função de callback.
// Ao ser passada como parametro de filter a função de callback já vai receber automaticamente três argumentos.
//O primeiro parâmetro, valor, é aquele que traduz o valor de cada elemento do array em cada iteração. Ex: Na primeira iteração o valor será 5, na segunda o valor será 50 e assim respectivamente.
//O segundo parâmetro será o índice.
// O terceiro parâmetro será o array.
//Filter executa a verificação a partir de booleans, verdadeiro ou falso.

function callbackFilter(valor, /* índice, array */ ){
    // vamos setar uma verificação na função de callback para que ela retorne true ou false para cada valor do array

    /* if(valor > 10) {
        return true;
    } else {
        return false;
    } */

    // Simplificando o código acima
    // quando temos uma função que retorna uma condição boleana, verdadeiro ou falso, é mais simples retornar a condição em si, pois ela vai retornar automaticamente verdadeiro ou falso.
    return (valor > 10); 
}

const num1FilterLonga = num1.filter(callbackFilter); // Observe que não estamos executando a função dentro do filter, mas estamos passando a função de callback como referência.

//OUTRA MANEIRA MAIS COMUM DE USAR FILTER
const num1FilterCurta = num1.filter(function(valor) {
    return valor > 10;
}); 

//ENTENDO O RETORNO DA FUNÇÃO COM O CONSOLE.LOG
const num1FilterArrow2 = num1.filter( (valor, indice, array) => {
    //console.log(valor); //ele faz um for dos valores em todos os valores
    console.log(valor, indice); //ele faz um for dos valores e dos indices em todos os valores e indices.

    console.log(array); //retorna o array completo a quantidade de vezes do comprimento.

    return valor > 10
});

//USANDO ARROW FUNCTION NO FILTER
//Podemos eliminar os parênteses pq está recebendo apenas um parâmetro, podemos eliminar as chaves e a palavra return pq só temos uma linha no escopo da função.
const num1FilterArrow = num1.filter( valor => valor > 10); 


// USANDO FILTER COM ARRAY DE OBJETOS
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];


// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande1 = pessoas.filter(function(obj) {
    return obj.nome.length >= 5;
});

console.log(pessoasComNomeGrande1); 
/* Retorno do console.log
{ nome: 'Maria', idade: 23 },
{ nome: 'Eduardo', idade: 55 },
{ nome: 'Letícia', idade: 19 },
{ nome: 'Rosana', idade: 32 },
{ nome: 'Wallace', idade: 47 } */

// Retorne as pessoas com mais de 50 anos
const agePeople50 = pessoas.filter(obj => obj.idade > 50);
console.log('Teste 50', agePeople50);

// Retorne as pessoas cujo nome termina com a
const nameEndA = pessoas.filter(obj => obj.nome.slice(-1) === 'a');
console.log(nameEndA);

// RESOLUÇÃO DO PROFESSOR
// Retorne as pessoas cujo nome termina com a
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);
