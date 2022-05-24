/* 
Javascript é baseado em protótipos para passar propriedades e métodos de um objetos para outro.

Definição de protótipos
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é udada até o topo (null) até encontrar (ou não) tal membro.

*/



// CONSTRUTORA => MOLDE (CLASSE)
/* function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
} */

// Instâncias
/* const pessoa1 = new Pessoa( 'Rodrigo', 'Sousa');
const pessoa2 = new Pessoa( 'Maria', 'Alexandre');
 */
// console.dir(pessoa1)
/* 
Pessoa
  nome: "Rodrigo"
    nomeCompleto: () => this.nome + ' ' + this.sobrenome
      length: 0
      name: ""
      arguments: (...)
      caller: (...)
      [[FunctionLocation]]: script.js:5
      [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[2]
  sobrenome: "Sousa"
  [[Prototype]]: Object
 */

// console.dir(pessoa2);

// Para cada vez que criamos uma instância de objetos, também duplicamos todos os métodos que foram passados no corpo da função. Isso causa um má perfomance pq estamos consumindo excessivamente os recursos. 

// é aí que entra os prototypes
// PROTOTYPES

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // Método nomeCompleto está dentro da nossa função molde, então a cada vez que criarmos uma instância esse método será copiado
  // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa( 'Rodrigo', 'Sousa');
const data = new Date();

console.dir(pessoa1);
/* 
Pessoa {
  nome: 'Rodrigo',
  sobrenome: 'Sousa',
  nomeCompleto: [Function]
} */

console.dir(data);
/* 2Mon May 23 2022 22:29:55 GMT-0300 (Horário Padrão de Brasília)
    [[Prototype]]: Object  */
// Olhando data não tem nada dentro de data, nenhum método, mas como então podemos acessar os métodos?
// Dentro dele é possível ver o [[Prototype]]: Object. Na verdade esse _proto_/Prototype pertence ao construtor dessa instância, sendo possível acessar como método diretamente pela instância. Essa propriedade está no pai e não foi copiado para todas as instâncias

// DE ONDE VEM O _PROTO_?
// Ao criarmos uma função construtora o Js já linka o objeto automaticamente uma propriedade da função chamada prototype.

console.log(Pessoa.prototype);
/* {constructor: ƒ}
  constructor: ƒ Pessoa(nome, sobrenome)
  [[Prototype]]: Object */

// CRIANDO ALGO NO PROTOTYPE
Pessoa.prototype.estouAqui = 'Hahaha'

console.log(pessoa1.estouAqui); //Hahaha

// Se olharmos aqui
console.log(Pessoa.prototype);
/* {constructor: ƒ}
      constructor: ƒ Pessoa(nome, sobrenome)
      [[Prototype]]: Object 
        estouAqui: "Hahaha"
        constructor: ƒ Pessoa(nome, sobrenome)
        [[Prototype]]: Object 
*/
//INSERINDO MÉTODO NO PROTOTYPE
Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
}

const pessoa3 = new Pessoa('João', 'Augusto');
console.log(pessoa3) // Pessoa { nome: 'João', sobrenome: 'Augusto' }

// A instância procura o método dentro do objeto, depois é que ela procura dentro do proto da função pai. A segunda opção é melhor para performance uma vez que ela busca o método por referência.
console.log(pessoa3.nomeCompleto()) // João Augusto

// A ORDEM DA BUSCA
// pessoa3 => Pessoa.prototype => Object.prototype