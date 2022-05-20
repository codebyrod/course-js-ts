// REVISÃO DE OBJETOS

// criando objetos literais
const pessoa = {
    //formado por par chave/valor
    nome: 'Camilo',
    sobrenome: 'Costa'
};

// Formas de acessar o objeto. Notação de ponto e notação de colchete
console.log(pessoa.nome); //Camilo
console.log(pessoa['nome']); //Camilo

// Notação de colchete dinâmica
const chave = 'nome';
console.log(pessoa[chave]); //Camilo

// Usando construtor de objeto
const pessoa2 = new Object();
pessoa2.nome = 'Ataulfo';
pessoa2.sobrenome = 'Camargo';
console.log(pessoa2); // { nome: 'Ataulfo', sobrenome: 'Camargo' }

//deletando propriedade de objetos
delete pessoa2.sobrenome;
console.log(pessoa2); // { nome: 'Ataulfo' }

//Objetos podem possuir métodos, que são funções que estão dentro do objeto que executam ações.
const pessoa3 = new Object();
pessoa3.nome = 'Rodnei';
pessoa3.sobrenome = 'Santos';
pessoa3.idade = 22;
pessoa3.falarNome = function() {
    return (`Meu nome é ${this.nome}`)
}
console.log(pessoa3.falarNome())

pessoa3.getNomeDataNasc = function(){
    const dataAtual = new Date();
    return `${this.falarNome()} e eu nasci em ${dataAtual.getFullYear() - this.idade}.`;
}

console.log(pessoa3.getNomeDataNasc());

// A vantagem é que agora podemos ter manipuladores do objeto dentro do próprio objeto.

// VERIFICANDO OS CHAVES EXISTENTE NO OBJETO
for (let chave in pessoa3) {
    console.log(chave);
}
/* 
nome
sobrenome
idade
falarNome
getNomeDataNasc 
*/

// VERIFICANDO OS VALORES DAS CHAVES EXISTENTE NO OBJETO
for (let chave in pessoa3) {
    console.log(pessoa3[chave]);
}
/* 
Rodnei
Santos
22
[Function]
[Function] 
*/

// FUNÇÕES "MOLDE" (Factory Function, Constructor Function e Classes)

// FACTORY FUNCTIONS
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const pessoa4 = criaPessoa('Rodrigo', 'Sousa');

// Usando get ele simula ser uma propriedade simples. Se removermos o get precisamos executar como método
console.log(pessoa4.nomeCompleto);//Rodrigo Sousa

// CONSTRUCTOR FUNCTIONS
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // TRAVANDO OS OBJETOS, funciona com arrays tb
    // Object.freeze(this);
}

// A palavra new cria um objeto vazio e atrela a palavra this a esse objeto e retorna this implicitamente.
const pessoa5 = new Pessoa('Rodrigo', 'Sousa');
console.log('PESSOA 5', pessoa5); 
// O log retorna não apenas os valores, mas também o construtor
//Pessoa { nome: 'Rodrigo', sobrenome: 'Sousa' };

// VALORES PASSADO POR REFERÊNCIA
//Vamos mudar o nome da pessoa6

const pessoa6 = new Pessoa('Glaucio', 'Marques');
console.log(pessoa6.nome); // Glaucio

// Porquê essa linha abaixo não dá erro se estamos alterando uma const?
pessoa6.nome = 'Roberto';
console.log(pessoa6.nome); // Roberto

// Na verdade o que não podemos alterar é o valor recebi pela const, ou ainda onde aquela const aponta na memória.

// No exemplo acima estamos fazendo algo assim:
// const pessoa6 = [enderecoNaMemoria] = 'Valor'

// Quando alteramos uma propriedade estamos fazendo algo similar à isso:
// const pessoa6 = [enderecoNaMemoria] = 'Valor2'

// O que não podemos alterar é o endereço que aquilo foi guardado na memória. Algo assim:
// const pessoa6 = 'Valor3'

// TORNANDO OBJETOS IMUTÁVEIS
Object.freeze(pessoa6);

// Essa linha abaixo não vai alterar nada, pq nosso objeto está travado
pessoa6.sobrenome = 'Sem alterações';
console.log(pessoa6);

// Para travar todos os objetos, é só setar o freeze na constructor
