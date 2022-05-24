// MANIPULANDO PROTOTYPES
// Sempre que criamos um objeto literal o js faz a chamada da função que é a construtora de objetos: 
// new Object -> Object.Prototype
const objA = {
  chaveA: 'A'
  //__proto__: Object.prototype
};
console.log(objA); //{ chaveA: 'A' }
console.log(objA.__proto__ === Object.prototype); //true

const objB = {
  chaveB: 'B'
  //__proto__: Object.prototype
};

const objC = new Object();
objC.chaveC = 'C';

// Estamos setando o objA como proto do objB, a partir de agora o objB pode acessar o que está dentro do objA, a recíproca não é verdadeira.
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA); //A
console.log(objA.chaveB); //undefined

// Agora o ObjC tem acesso ao objB e ObjA, pois ambos foram passados como proto em cadeia.
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB, objC.chaveA); //B A

// CUIDADO
// Não usar .__proto__ para acessar os protos dentro dos objetos, há varias recomendações na MDN para não fazer isso. Ao invés disso usar:

Object.getPrototypeOf(objA); //Um GETTER Para acessar as propriedades

// CRIANDO NOSSAS FUNÇÕES CONSTRUTORAS
function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camisa', 50);
console.log(p1); //Produto { nome: 'Camisa', preco: 50 }

/* p1.desconto(100);
console.log(p1); //Produto { nome: 'Camisa', preco: 0 }
 */

/* p1.aumento(100);
console.log(p1); //Produto { nome: 'Camisa', preco: 100 }
 */

// UTILIZANDO MÉTODOS EM OBJETOS CRIADOS FORA DO CONTEXTO DA CONSTRUCTOR
//criaremos um obj literal para exemplificar
//As chaves dos objetos tem que se iguais
const p2 = {
  nome: 'Caneca',
  preco: 15
};

// Ao tentarmos usar o método não conseguimos pq a p2 não foi criada dentro do contexto da constructor
// console.log(p2.aumento(100)); //TypeError: p2.aumento is not a function

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(100);
console.log(p2);

//OUTRA FORMA DE SETAR PROTOTYPE
// Já podemos criar um objeto setando um prototype

/* const p3 = Object.create(Object.prototype); 
console.log(p3); // {} um objeto vazio */

const p3 = Object.create(Produto.prototype); 
console.log(p3); // Produto {} um objeto vazio apontando para o construtor Produto

p3.aumento(100);
console.log(p3); //Produto { preco: NaN }

p3.preco = 30;
p3.aumento(100);
console.log(p3); //Produto { preco: 60 } */

//Podemos passar um objeto literar dentro do objeto crate, dentro do create estamos setando o prototype e ainda passando as configurações
const p4 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 100
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  }
}); 
console.log(p4); //Produto { preco: 100, tamanho: 42 }
