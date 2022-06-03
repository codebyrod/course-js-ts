// GETTERS E SETTERS EM CLASSES

// 9. Usamos symbol. Symbol cria um id único e aleatório cada vez que é chamado, então um symbol nunca vai ser igual a outro. Podemos colocar um descritor internamente, mas é só chamar o symbol mesmo que funciona.
// 10. Em seguida jogaremos a nossa propriedade privada dinâmica dentro da nossa classe

const velocity = Symbol();

// 1. imagine um joguinho que tem um carro
class Carro {
    constructor(nome){
        this.nome = nome;

        // 2. a velocidade do carrinho começa em 0
        /* this.velocidade = 0; */
        
        //11. Substituindo a propriedade velocidade
        this[velocity] = 0;
    }

    // 15. Agora estamos criando um setter para receber algum dado de possível alteração
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[velocity] = valor;
    }

    // 14. Criando um método chamado getter, onde o valor real de velocidade está
    get velocidade() {
        return this[velocity];
    }

    // 3. teremos um método acelerar
    acelerar() {
        /* if(this.velocidade >= 100) return */
        /* this.velocidade++; */

        //11. Substituindo a propriedade velocidade
        if(this[velocity] >= 100) return;
        this[velocity]++;
    }

    // 4. teremos um método freiar
    freiar() {
        /* if(this.velocidade <= 0) return
        this.velocidade--; */

        //11. Substituindo a propriedade velocidade
        if(this[velocity] <= 0) return;
        this[velocity]--;
    }
}

const c1 = new Carro('Fusca');

// 5. Estamos fazendo um for simulando uma aceleração
for(let i = 0; i<= 200; i++){
    c1.acelerar();
}
console.log(c1);

// 6. imagina que alguém erra e seta uma velocidade muito superior
/* c1.velocidade = 1500; */
console.log(c1);
// retorno do log -> Carro { nome: 'Fusca', velocidade: 1500 }

// 7. Como podemos prevenir isso de acontecer?
// 8. Usaremos uma propriedade privada da classe com um tipo de dado chamado symbol e usaremos getter e setter

// 12. Vamos setar uma velocidade
c1.velocidade = 2000;
console.log(c1);
//return do log -> Carro { nome: 'Fusca', velocidade: 2000, [Symbol()]: 100 }

// 13. Mas e se quisermos setar uma velocidade? Aí usaremos getter e setter

// 16. Dando um console.log para verificar a alteração depois do get/set
// return do log -> Carro { nome: 'Fusca', [Symbol()]: 100 }

// 17. Porém, por algum motivo permitimos setar diretamente um valor válido entre 0 e 100, um poderzinho.
c1.velocidade = 25;
console.log(c1);
//return do log -> Carro { nome: 'Fusca', [Symbol()]: 25 }

//REPASSANDO GETTERS E SETTERS PARA REFORÇAR
// 18. Construindo uma classe
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // 19. Atribuindo um getter
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    //21. Atribuindo um setter. O setter vai receber um valor, que é o valor que seria atribuído futuramente. Esse valor é separado e divido entre nome e sobrenome
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }

}

// 20. Instanciando um objeto
const p1 = new Pessoa('Rodrigo', 'Sousa');
console.log(p1.nomeCompleto);
// return do log -> Rodrigo Sousa

// 21. setando um valor
p1.nomeCompleto = 'Josefino Arnaldo Xavier';
console.log(p1.nome);
console.log(p1.sobrenome);

