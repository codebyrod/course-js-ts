//FUNÇÕES CONTRUTORAS
//criam novos objetos
//Funções fábricas são funções normais que retornam um objeto
//Função construtora já fazem muitas coisas automaticamente. Por exemplo, cria objeto, retorna objetos

//Função fábrica => objetos

//Função construtora => objetos
//Precisa mudar a convenção de como criar os nomes
//Na função Construtora precisamos usar o new => Pessoa (new)
//Ambas as funções são como molde para construir objetos
//ex:

function Pessoa(nome, sobrenome){

    //Atributos ou métodos Privados. Não é possível acessar do lado de fora da função, nem por notação de ponto nem nada.
    const ID = 123456;
    const metodoInterno = function() {

    };

    //Atibutos ou métodos Públicos. (quando a gente usa this)
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(`${this.nome}: sou um método.`)
    };
}

//A palavra new abaixo faz três coisas
//1. cria um novo objeto vazio
//2. faz o this apontar para o objeto vazio
//3. retorna implicitamente o objeto para a variável passada (p1, p2, etc.) com isso não precisar usar o return

const p1 = new Pessoa('Rodrigo', 'Sousa')
const p2 = new Pessoa('João', 'Rodrigues')

//USANDO MÉTODOS
p1.metodo(); //Rodrigo: sou um método
p2.metodo(); //João: sou um método


