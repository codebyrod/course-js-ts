//CLASSES EM JAVASCRIPT
// mesma coisa que escrever uma função construtora

class Pessoa {
    // Método que utilizamos para passar parâmetros aqui na classe
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Os métodos que criamos foram criados diretamente no prototype
    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber(){
        console.log(`${this.nome} está bebendo.`)
    }
}

// Instanciar é criar um objeto a partir do molde, da classe.
const p1 = new Pessoa('Rodrigo', 'Sousa');
console.log(p1);
p1.falar();

const p2 = new Pessoa('Ataulpho', 'Silva');
console.log(p2);
p2.beber();

const p3 = new Pessoa('Gustavo', 'Santos');
console.log(p3);
p3.comer();

const p4 = new Pessoa('Marcelo', 'Oliveira');
console.log(p4);
p4.falar();

// CRIANDO A MESMA COISA COM CONSTRUCTOR FUNCTION
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
};

const p5 = new Pessoa2('Luiz', 'Miranda');
const p6 = new Pessoa2('Luiz', 'Miranda');

