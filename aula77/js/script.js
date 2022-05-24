// HERANÇA
//Imagine um sistema para um dono de eccomerce
//Camiseta, caneca
//Eu abstraio essas três coisas para depois especializar
// Essas três coisas são produtos
//Depois de abstrair, vamos especiicar.
// A camiseta tem uma propriedade que a caneca não tem. camiseta {cor: ''}
// A caneca tem uma propriedade que a camiseta não tem. camiseta {material: ''}
// Em ambos produtos temos dois métodos, aumento e de desconto, faremos um pouco diferente

function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
};

Produto.prototype.aumento = function(quantia){
  this.preco += quantia
};

Produto.prototype.desconto = function(quantia){
  this.preco -= quantia
};

// Vamos especializar
/* function Camiseta(nome, preco, cor){
  //preciso chamar o construtor da função Produto
  //Lembrando da função do new. Cria objeto vazio, aponta para esse objeto vazio, retorna objeto.
  // Podemos simular todas essas funções do new com um método chamado de call.

  // call (chamar em inglês) significa que você deseja chamar (executar) aquela função. O call também permite configurar quem será o this dentro dessa função, assim, é possível  executar uma função simulando que o this dentro dela será outra coisa qualquer.
  
  // Queremos que o código que está dentro de Produto seja executado dentro de Camiseta
  // Quem será o this dentro de call? O this será o objeto que eu criar
  // Em segundo lugar vai passar os argumentos que iremos usar da função produto
  Produto.call(this, nome, preco) // recebe como parâmetro o thisArg e os outros parâmetros que iremos usar
 
} */
/* 
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
console.log(camiseta); //Camiseta { nome: 'Regata', preco: 7.5 } */

//camiseta.aumento(10); //TypeError: camiseta.aumento is not a function

// No navegador: Camiseta.prototype não possui os mesmo prototypes que Produto
// Precisamos compartilhar os mesmo prototypes com Camiseta, sem alterar o prototypes de Produto

// Ao criar o objeto vazio e linkar ao produto perdemos o constructor da function Camiseta.
/* Camiseta.prototype = Object.create(Produto.prototype); */

/* const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10); */

// Conseguimos aumentar, mas agora apareceu outro problema. O Produto está sendo exibido como o Produto; Ao criar o objeto vazio e linkar ao produto perdemos o constructor da function Camiseta.
/* console.log(camiseta); */ //Produto { nome: 'Regata', preco: 17.5 }

//Extendendo 
function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco);
  this.cor = cor;

}

// Ao criar o objeto vazio e linkar ao produto perdemos o constructor da function Camiseta.
Camiseta.prototype = Object.create(Produto.prototype); 
//Para resolvermos a questão do constructor devemos setar novamente o construto como Camiseta
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10);

console.log(camiseta); // Camiseta { nome: 'Regata', preco: 17.5 }

// SOBREESCREVENDO AUMENTO, usando porcentagem
Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

camiseta.aumento(100);
console.log(camiseta) // Camiseta { nome: 'Regata', preco: 35, cor: 'Preta' }

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const c1 = new Caneca('Star Wars', 80, 'porcelana revestida', 5)
console.log(c1); // =>
/* Caneca {
  nome: 'Star Wars',
  preco: 80,
  material: 'porcelana revestida'
} */

c1.aumento(10);

console.log(c1);
/* Caneca {
  nome: 'Star Wars',
  preco: 90,
  material: 'porcelana revestida'
} */




// ENTENDENDO O CALL
/* const jogo = {
  nome: 'GTA'
}

const carro = {
  nome: 'Toyota',
  mostrarNome(){
    console.log(this.nome);
  }
}

carro.mostrarNome.call(jogo); */