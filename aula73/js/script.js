//GETTERS E SETTERS
// get e setters fazer um método da função simular que ele é uma propriedade
//get e set seria uma maneira de proteger a nossa propriedade
//get é para pegar o valor e o set é para setar o valor

// CONSTRUCTOR FUNCTION
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque; // log produto 3 3
    console.log('log produto', estoquePrivado, estoque);

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 

        // vamos eliminar essa propriedade com o getter e o setter
        // value: estoque, 

        // Essa por sua vez não faz sentido pq vamos usar o método que vai trabalhar o valor
        // writable: false,

        configurable: false,
        
        // O get tá sendo usado como chave e a function como valor
        // O trabalho do get é pegar o valor do momento e exibir ele
        get: function() {
            console.log('get eP', estoquePrivado); //get eP 6
            return estoquePrivado;
        },

        // set vai configurar o valor que foi pego no get
        //evite loopings infinitos ao setar propriedades diretamente no setter, umas das opções seria criar uma variável de controle
        /* set: function(valor) {
            console.log('set', valor); //set Cubo Mágico
            estoquePrivado = valor;
        } */

        //Verificando um tipo de valor no set
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Insira um dado do tipo Número');

                //Ao inserimos um throw ele invalida um retunr
                // A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar. (MDN)
                /* return; */
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1); //Produto { nome: 'Camisa', preco: 20, estoque: [Getter/Setter] }

//O get e o set só vai ser "acionado" quando formos setar outro valor
// Ao retribuirmos um valor, o valor vai ser jogado na função do set como parâmetro. Depois de ser setado vai ser jogado no get que vai pegar o valor e exibi-lo.
/* p1.estoque = "Cubo Mágico"; */ //TypeError: Insira um dado do tipo Número
p1.estoque = 6;

console.log(p1.estoque, 'log final'); //6 log final

// FACTORY FUNCTION
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace(' de Verão', ' de Inverno' );
            nome = valor;
        }
    }
}

const p2 = criaProduto('Shorts');
/* console.log(p2.nome); //Shorts */

/* p2.nome = 'Canga de Verão';
console.log(p2.nome); //Canga de Verão */

//coloquei um interceptador no valor
p2.nome = 'Canga de Verão';
console.log(p2.nome); //Canga de Inverno