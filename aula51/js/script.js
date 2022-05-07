//Parâmetros da Função
//Podemos passar vários parâmetros para a função separados por vírgula.
function funcao() {
    console.log('Oie');
}

funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8); //Numa lógica deveria dar erro, uma vez que estamos enviando um argumento, mas não estalecemos um parâmetro na função. Mas a engine do JS apenas não se importa, ela apenas ignora nosso argumento.

//Mas pra onde vai nossos argumentos? 

function funcaoDois() {
    console.log(arguments);
    console.log(arguments[10]);
}

funcaoDois('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Rodrigo')

//O JS cria um objeto arguments. Dá para pegarmos por notação de colchetes. 

//Um exemplo do que podemos fazer com isso

//A função definida com a palavra function tem uma variavel especial que tem um argumento (arguments) que sustenta todos os argumentos enviados, independente de quantos parâmetros houver em nossa função
function funcaoTres() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

funcaoTres(1, 2, 3, 4, 5, 6, 7)
//28 que é a soma de tudo

//Enviado parâmetros
//Desse modo temos três parâmetros definidos, mas continuamos acessando todos os argumentos via arguments
function funcaoQuatro(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

funcaoQuatro(1, 2, 3, 4, 5, 6, 7)
//28 1 2 3

function funcaoCinco(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

funcaoCinco(1, 2, 3)
//1 2 3 undefined undefined undefined
//Explicando: a engine do JS criou as variaveis e setou um valor como undefined, igual quando inicializamos uma variavel sem atribuir valor.
//Caso não coincida o número de argumentos com o número de parâmetros, nossa função nunca vai dar erro.

//FUNÇÃO SOMAR DOIS NUMEROS
function somaDoisNumeros(a, b = 2) { //Forma mais atual de setar um valor padrão no argumento
    //Para contornar o problema de undefined podemos setar um valor padrão nos parâmetros.
    b = b || 2 //se b receber um argumento b é igual a b, se não receber b é igual a 2. Essa é a forma antiga de fazer isso.
    console.log(a + b);
}

somaDoisNumeros(2);
//Retorna NaN pq tá somando 2 + undefined

function somaTresNumeros(a, b = 2, c = 4) {
    console.log(a + b + c);
}

somaTresNumeros(2, 10); //16

//E se quisessemos pular o valor de b para ele pegar o valor de b padrão?

//A única forma que o professor disse conhecer é colocando o argumento que receberia o parâmetro de b como undefined
somaTresNumeros(1, undefined, 3);

//pular apenas com a vírgula vazia dá erro de sintaxe, null conta como zero.

//Atribuição via desestruturação no parâmetro da função
//imagine que você queira receber um obj que tem nome, sobrenome e idade
//DESESTRUTURA DE OBJETOS VIA PARÂMETROS
function desestPar({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

//Estamos passando um obj literal
desestPar({nome: 'Rodrigo', sobrenome: 'Sousa', idade: 27});

let obj = {nome: 'Narmer', sobrenome: 'Ausar', idade: 27};

desestPar(obj);

//DESESTRUTURAÇÃO DE ARRAYS VIA PARÂMETRO

function desestArr([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

desestArr(['Ausar', 'Auset', 'Tehuti']);

//FUNÇÃO DE CONTA
//vamos receber um operador, um acumulador e numeros
//usaremos o rest operator no parâmetro

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(arguments);
    //[Arguments] { '0': '+', '1': 1, '2': 20, '3': 30, '4': 40, '5': 50 }
    console.log(acumulador);
    console.log(operador, acumulador, numeros);
};

conta('+', 1, 20, 30, 40, 50);

//com arrow function não funciona os arguments

//REST OPERATOR NO LUGAR DO ARGUMENTS EM FUNCTION CLÁSSICA, FUNCTION EXPRESS, ARROW FUNCTION
const contaDois = function(...args){
    console.log(args);
};

contaDois('Ausar', 'Auset', 'Tehuti', 'Toth');
