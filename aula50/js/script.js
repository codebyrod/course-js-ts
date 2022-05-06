//Relembrando o que já usamos
// Até agora foram 3ou 4 maneiras de declarar funções no js

//DECLARAÇÃO CLÁSSICA DE FUNÇÃO(quando usamos a palavra function)

function falaOi () {
    console.log('Oi');
};

//Esse tipo é um declaração literal/clássica de função. Aqui ocorre o Function Hoisting. Hoisting seria quando a engine elevar nossa declaração para o topo, com isso a gente pode tentar executar a função antes ou depois dela ser construída.

//O QUE SÃO FUNÇÕES?
//First-class objects(Objetos de primeira classe). Isso significa que a gente pode tratar as funções como dados. Por exemplo

//Function Expression
//Podemos nomear as functions nesse caso, mas não é muito comum, o mais comum é passar anônima. Só que como a gente jogou uma função anônima em uma variável, a variável se tornou uma função com o nome da própria variável.
const souUmDado = function() {
    console.log('Sou um dado.');
};

//Acima estamos falando que uma constante recebe como dado uma função.
//podemos executar normalmente essa função.

souUmDado();

//Isso é muito poderoso pq podemos jogar essa variavel como parâmetro de outra função e fazer essa outra função executar minha função. Por exemplo

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);
//Aqui estamos executando uma função a partir de um parâmetro de outra função.

//ARROW FUNCTION
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}

funcaoArrow(); //'Sou uma arrow function'

//DENTRO DE UM OBJETO
const obj = {
    falar: function () {
        console.log('Estou falando');
    }
};

//Podemos executar a função usando notação de ponto
obj.falar(); //'Estou falando'

//Outra maneira mais recente de passar função como propriedade de um objeto é a que segue:

const objDois = {
    falar() {
        console.log('Estou falando diretamente do objDois');
    }
};

objDois.falar();