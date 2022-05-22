// Métodos úteis para Objetos

/* 
...(spread)
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
Object.values
Object.entries
 */

// JÁ VIMOS
/* Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
 */

// COPIANDO OBJETOS COM SPREAD OPERATOR
// objetos assim como arrays são passados por referència
const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = produto;
produto.nome = 'Cubo Mágico';

// Ambas const apontam para o mesmo local na memória 
console.log(outraCoisa);

//Usamos spread operator para copiar o objeto
//Podemos adcionar propriedades
const produto2 = { 
    ...produto,
    material: 'porcelana'
};

console.log(produto); // { nome: 'Cubo Mágico', preco: 1.8 }
console.log(produto2); // { nome: 'Cubo Mágico', preco: 1.8, material: 'porcelana' }

// OUTRA FORMA DE COPIAR, USANDO OBJECT ASSIGN
// O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino. Este método irá retornar o objeto destino. (MDN)
// Object.assign(destino, ...origens)
const produto3 = Object.assign({}, produto, { material: 'barro cozido'});
console.log(produto3); //{ nome: 'Cubo Mágico', preco: 1.8, material: 'barro cozido' }

// COPIANDO APENAS UMA OU MAIS PROPRIEDADES ESPECÍFICAS, manualmente
const produto4 = {nome: produto.nome, preco: produto.preco};
console.log(produto4); //{ nome: 'Cubo Mágico', preco: 1.8 }

//RETORNANDO AS PROPRIEDADES DO OBJETO (value, writable, enumerable, configurable)
const produto5 = { nome: 'Notebook', preco: 4000, marca: 'HP' };
console.log(Object.getOwnPropertyDescriptor(produto5, 'nome'));
/* {
  value: 'Notebook',
  writable: true,
  enumerable: true,
  configurable: true
} */

//OBJECT.VALUES -> ACESSANDO OS VALORES DO OBJETO
const produto6 = { nome: 'Console', preco: 3000, marca: 'XBox', modelo: 'One X' };
//retorna somente os valores
console.log(Object.values(produto6)); //[ 'Console', 3000, 'XBox', 'One X' ]

//OBJECT.ENTRIES -> ACESSANDO PROPRIEDADES DO OBJETO (CHAVE E VALOR)
const produto7 = { nome: 'Smartphone', preco: 1200, marca: 'Nokia', modelo: 'NK026' };
//retorna um array de arrays para cada par de chave: valor
console.log(Object.entries(produto6)); 
/* [
    [ 'nome', 'Console' ],
    [ 'preco', 3000 ],
    [ 'marca', 'XBox' ],
    [ 'modelo', 'One X' ]
  ] */

//Podemos iterar dentro do array, bem como usar desestruturing
for(let [chave, valor] of Object.entries(produto7)){
    console.log(chave, valor);
}
/* 
nome Smartphone
preco 1200
marca Nokia
modelo NK026
*/
