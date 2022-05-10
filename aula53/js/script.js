//RETORNO DA FUNÇÃO
//retunr 
//Retorna um valor
//Termina a função

function soma( a, b) {
    return a + b;
}

//Se a gente vai no console do navegador e chama a função com valores, ela vai retorna algo pra gente
//soma(2, 5) //7

//Existem casos de funções que não retornam nada, mas que executam coisas internamente. Como é o caso das funções de evento ao clique e etc.

/* document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange'
}) */

// O que vai definir se a gente usa return ou não, é se a gente vai precisar do valor retornado pela função

//EXEMPLO DE UMA FUNÇÃO QUE CRIA PESSOAS
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
    //Essa linha de cima é o mesmo que
    //return { nome: nome, sobrenome: sobrenome }
}

const p1 = criaPessoa('Luiz', 'Otávio');

//Utilizar a função dá no mesmo que passar o objeto de forma literal, exemplo:
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);

//COMPLEXIFICANDO UM POUCO MAIS
function falaFrase(comeco) {
    function falaResto(resto){
        //Estamos usando na função interna o parâmetro da função externa
        return comeco + ' ' + resto;
    }
    //Aqui abaixo não estou executando a função, estou passando ela literalmente
    return falaResto;
    //seria o mesmo que fazer isso:
    /* return function(resto){
        return resto;
    } */
}

/* const olaMundo = falaFrase('Olá');
console.log(olaMundo); //[Function: falaResto] */

/* console.log(olaMundo); //É uma função. Agora o que usamos para chamar a função? Os parenteses? */

/* console.log(olaMundo()); //Só que essa função tem parâmetros no qual podemos mandar os argumentos. */ 

/* console.log(olaMundo('Mundo!')); */

const fala = falaFrase('Olá');
const resto = fala('mundo!');

console.log(resto);

// DEMONSTANDO UTILIDADE DISSO
//Função que duplica, triplica, quadriplica valor

/* function duplica(n) {
    return n * 2;
} */

/* function triplica(n) {
    return n * 3;
} */

/* function quadriplica(n) {
    return n * 4;
} */

/* console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2)); */

//Perceba que estamos repetindo as funções, imagine se tivessemos muitas outras função até multiplo de 20 ou mais. Teríamos que refazer 20x?

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function (n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

//Essa parte deu uma leve bugada, vale a pena procurar outros materiais de suporte para melhor compreensão