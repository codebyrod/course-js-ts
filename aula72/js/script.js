//DEFINE PROPERTY E DEFINE PROPERTIES
//Na aula passada aprendemos a congelar todo o objeto com a propriedade freeze, mas imagina agora que queremos congelar uma ou mais propriedades/metódos específicos?
//Para isso usaremos a defineProperty(singular) defineProperties(plural).

function Produto(nome, preco, estoque) {
    // dizemos que essas duas propriedades abaixo são públicas pq estão disponíveis fora do escopo da functions
    this.nome = nome;
    this.preco = preco;

    //Estoque também está visível
    /* this.estoque = estoque; */

    //Vamos mudar algumas configurações em estoque
    
    //Object.defineProperty recebe três parâmetros respectivamente, objeto que iremos modificar, qual é a propriedade daquele objeto, e o descritor (um objeto que modificará nossa propriedade/método)
    
    //Caso nosso objeto esteja vazio, a nossa propriedade estoque já foi criada só com a gente chamando o objeto, e passando a nossa propriedade. Como o exemplo abaixo
    /* Object.defineProperty(this, 'estoque', {
    }) */

    // Aqui this está assumindo o lugar do nosso objeto Produto
    Object.defineProperty(this, 'estoque', {
       
        // true se e somente se esta propriedade aparece durante enumeração das propriedades no objeto correspondente. Valor padrão é false.
        enumerable: true, // Mostra a chave -> Produto { nome: 'Camisa', preco: 20, estoque: undefined }

        // O valor associado com a propriedade. Pode ser qualquer valor válido em Javascript  (número, objeto, função, etc). Nesse caso estamos usando parâmetro
        value: estoque, // Mostra o valor da chave -> Produto { nome: 'Camisa', preco: 20, estoque: 3 }

        // true se e somente se o valor associado com a propriedade pode ser modificada com um operador de atribuição (en-US).
        writable: false, // Possibilidade de alteração

        // true se e somente se o tipo deste descritor de propriedade pode ser alterado e se a propriedade pode ser deletada do objeto correspondente. Valor padrão é false.
        configurable: false, //Caso seja true estamos permitindo reconfigurar toda essa configuração passada. Caso seja false a chave não pode ser deletado ou alterada.

        // CONFIGURABLE COMO TRUE
        /* configurable: true, */
        
    });

    /* // CONFIGURE COMO TRUE PERMITE-NOS SETAR NOVAS CONFIGURAÇÕES
    Object.defineProperty(this, 'estoque', {
    }) */

}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1); //Produto { nome: 'Camisa', preco: 20, estoque: 3 }

//OBJECT KEYS
console.log(Object.keys(p1)); //[ 'nome', 'preco', 'estoque' ]

// FOR IN
for (let chave in p1) {
    console.log(chave); // nome /n preco /n estoque
}

//DEFINE PROPRIETIES
function ProdutoNovo(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: false
        }
    })

}

const p2 = new ProdutoNovo('shorts', 40, 5);
console.log(p2);