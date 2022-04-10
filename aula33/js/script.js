const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//isso aqui é chamado notação de ponto
//console.log(pessoa.nome); // Luiz

//Atribuição normal
//jogamos o valor em uma variável usando atribuição normal
/* 
const nome = pessoa.nome;
console.log(nome); // Luiz
*/

//Atribuição via desestruturação
//Aqui estamos dizendo que estamos criando uma variavel com o nome 'nome'
//que o valor da propriedade que temos que acessar em pessoa também é 'nome'
//Esse é um duplo processo pois extraimos do objeto a propriedade e já criamos uma variável com o mesmo nome da propriedade.

//desestruturação de uma propriedade
/* 
const { nome } = pessoa
*/

//desestruturação de mais de uma propriedade
/* 
const {nome, sobrenome, idade} = pessoa
*/

//setando valor padrão caso não exista valor naquela propriedade
/* 
const {nome = '', sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);
 */

//modificar o nome da variável
/* 
const {nome: n = '', sobrenome} = pessoa;
console.log(n, sobrenome);
*/

//Acessando objetos dentro de objetos
/*
const {endereco} = pessoa;
console.log(endereco); // { rua: 'Av Brasil', numero: 320 }
*/

//Quando quisermos objetos dentro de objetos
/* 
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero); //Av Brasil 320
*/

//Acessando objetos dentro de objetos e o objeto específico 
/* 
const {endereco: {rua, numero}, endereco} = pessoa;
console.log(endereco); // {rua: 'Av Brasil', numero: '320'}
*/

//Podemos juntar tudo
/* 
const {
    endereco: {rua : r = 'rua inexistente', numero}
} = pessoa;
console.log(r, numero, endereco); 
*/

//Usando Rest Operator
/* 
const {nome, ...resto} = pessoa;
console.log(resto); // {sobrenome: 'Miranda', idade: 30, endereco: { rua: 'Av Brasil', numero: 320 } 
*/

