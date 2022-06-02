//Factory Functions e Prototypes
//Na Factory Functions ainda estavamos acomplando

function CriaPessoa(nome, sobrenome){
    //7. Criando a const que receberá os métodos
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando`)
        },

        beber() {
            console.log(`${this.nome} está bebendo`)
        },

        comer() {
            console.log(`${this.nome} está comendo`)
        }
    };

    //8. Aqui também alteraremos. O return receberá um object.create
    /* return {
        nome,
        sobrenome,
    
        //3. Vamos criar alguns métodos aqui.
        //6. Vamos tirar os métodos do return e jogar o método dentro de uma const
        falar() {
            console.log(`${this.nome} está falando`)
        },

        beber() {
            console.log(`${this.nome} está bebendo`)
        },

        comer() {
            console.log(`${this.nome} está comendo`)
        }
    }; */

    //9. Criaremos um novo return como object.create
    // 10. Esse objcrt receberá como parâmetro a const e um objeto com propriedades dentro
    // 11. As chaves dessas propriedades receberão um descriptor, usamos apenas a chave value para atribuir um valor à chave
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })

}

const p1 = CriaPessoa('Rodrigo', 'Sousa');
//1. Vamos dar um log e verficiar no console do navegador
console.log(p1);
//2. Percebemos que ele também tem o proto

//4. Voltando no proto percebemos que foi criado os métodos direto na Function Factory, e já sabemos que come muito recurso do nosso pc uma vez que cada objeto que criamos, ele criara por sua vez todos os métodos da função Pai.

//5. Queremos acoplar esses métodos no proto

// 12. Chamando os objetos criados

/* const p2 = CriaPessoa('Maria', 'Turlino');
console.log(p2);
console.log(p2.nome); */

//Comentários do professor: 
// Ele disse que não gosta da herança pq acha a hierarquia da herança meio frágil, pois mesmo que estejamos reutilizando o código, seguimos acoplando um no outro e o professor não gosta disso. Outro ponto é que a herança tende a adicionar complexidade onde não precisa.

// 13. Vamos criar uma função desacoplada
// 14. Passaremos as const fora do corpo da função

const falar = {
    falar() {
    console.log(`${this.nome} está falando`)
}};

const beber = {
    beber() {
    console.log(`${this.nome} está bebendo`)
}};

const comer = {
    comer() {
    console.log(`${this.nome} está comendo`)
}};

// 14. Criaremos uma const que receberá nossas const-métodos
// 15.Temos duas formas de criar a essa const recebedora

// 16. Com spread operator
/* const pessoaPrototype = {...falar, ...beber, ...comer} */

// 17. Com assign. Assign recebe o target, e os objetos a serem copiados
const pessoaPrototype2 = Object.assign({}, falar, beber, comer)

// 18. IMPORTANTE - Em programação quando compomos um objeto com vários outros objetos chamamos isso de COMPOSIÇÃO(MIXING)

function CriaPessoa2(nome, sobrenome) {
    return Object.create(pessoaPrototype2, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p3 = CriaPessoa2('Fábio', 'Caracol');
const p4 = CriaPessoa2('Gabriela', 'Amâncio');
console.log(p3);
console.log(p4);

// Há um debate sobre qual padrão é melhor, constuctor function ou factory function. O professor orientou a escolhermos um padrão e seguir com ele. Entenda os padrões e escolha um.

