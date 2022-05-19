//MAP
//Retorna um novo array com o mesmo comprimento, porém com seus valores modificados

//Dobre os números do array
const num1 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 ,15 , 22, 27];

/* const testeLog = num1.map(function(valor, indice, array){
    console.log(valor, indice, array);
}) */

const numerosEmDobro = num1.map((valor) => {
    return valor * 2;
});
console.log(numerosEmDobro);

//MAP EM OBJETOS
// Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//Retorne apenas uma string com o nome da pessoa
const nomeCada = pessoas.map(obj => obj.nome);
console.log(nomeCada);

// Remova apenas a chave nome do objeto
// Primeira forma: removendo o nome
const idades = pessoas.map(obj => {
    delete obj.nome;
    return obj;
})
console.log(idades);

// Segunda forma: retornar um obj novo contendo o objeto idade
const idades2 = pessoas.map(obj => {
    return { idade: obj.idade };
})
console.log(idades2);

//USANDO EXPRESSÕES
// vamos transformar o exemplo acima em arrow function. As chaves do objeto estão sendo usada como chaves do escopo léxico
/* const idades3 = pessoas.map(obj => { idade: obj.idade };
) */
//Para resolver precisar envolver as chaves em um parêntese
const idades3 = pessoas.map(obj => ({ idade: obj.idade })
);
console.log(`IDADE 3`, idades3);

// Adicione uma chave id em cada objeto
const comId = pessoas.map((e) => {
    // Dessa forma que estamos criando estamos alterando o objeto original
    /* obj.id = (indice +1); */

    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});