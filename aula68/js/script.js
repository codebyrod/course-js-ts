// REDUCE
// Reduz o array para um único item
// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro de valores (Map)

const num1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 ,15 , 22, 27];

// Reduce recebe os mesmos parâmetros que filter com o acréscimo do acumulador, podendo setar um valor inicial
// Precisamos sempre retornar um valor 
const total = num1.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    // console.log(acumulador, valor);
    return acumulador;
}, 0);
console.log(total); //236

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 65},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 77},
];

// Quanto não setamos um valor inicial para o acumulador, ele sempre vai setar o primeiro item como acumulador
const maisVelha = pessoas.reduce(function(acumulador, valor){
    console.log(acumulador, valor);
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

