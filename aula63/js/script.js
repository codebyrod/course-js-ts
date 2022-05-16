//UMA REVISÃO BÁSICA

//O que sabemos: 
//1. Arrays são indexados;
const nomes = ['Eduardo', 'Maria', 'Joana'];

//Podemos substituir com notação de colchetes
nomes[2] = 'João';
console.log(nomes); //[ 'Eduardo', 'Maria', 'João' ]

//Podemos remover um item e manter a ordem do íncide
delete nomes[2];
console.log(nomes); // [ 'Eduardo', 'Maria', <1 empty item> ]

//Construtor, funciona para string, objetos, funções, números. Porém quase nunca é usado
//const nomes = new Array('Eduardo', 'Maria', 'Joana', )

//VALOR POR REFERÊNCIA
//criamos duas variáveis, uma recebe os valores da outra por referência, ou seja, o que alterar em uma alterará na outra pois ambas apontam para o mesmo lugar da memória.
const nomes2 = ['Agostinho', 'Nenê', 'Tuco'];
const novo = nomes;

novo.pop();
console.log(nomes2);

//Valores por referência podem ser copiados, um dos meios para copiar é usando o operador spread. 
//Rest e spread são os mesmo, mudando apenas o contexto em que é usado. 
//Quando queremos pegar o resto do array, estamos usando o rest operator.
//Quando queremos copiar os dados do array, espalhar, usamos o spread operator

const nomes3 = ['Lineuzinho', 'Mendoça', 'Paulão'];

//Spread operator 
const novo3 = [...nomes3];

//nomes3.pop(); //Removemos o último elemento do nomes
const removido = nomes3.pop(); //jogamos o elemento removido para uma const

//Shift, remove do começo do array, desloca o índice de todos os elementos
//Pop, remove do final do array
//unshift, adciona no começo do array, desloca o indíce de todos os elementos
//push, adiciona no final do array


console.log(nomes3); //[ 'Lineuzinho', 'Mendoça' ]
console.log(novo3); // [ 'Lineuzinho', 'Mendoça', 'Paulão' ]

//PEGAR O TAMANHO DO ARRAY
//lenght não é um método e sim um atributo, por isso não precisa de parênteses.
console.log(novo3.length); //3

const nomes4 = ['Cascão', 'Mônica', 'Cebolinha', 'Franjinha', 'Jeremias', 'Magali'];

const novo4 = nomes4.slice(0, -1); //[ 'Cascão', 'Mônica', 'Cebolinha', 'Franjinha', 'Jeremias' ]
const novo4i0 = nomes4.slice(1, -2); 
console.log(novo4i0);//['Mônica', 'Cebolinha', 'Franjinha']

const nomes5 = 'Rogério Alberto Cruz Almeida';

//Converter String em Arrays
const nomes5i0 = nomes5.split(' ');
console.log(nomes5i0);

//Converter Arrays em Strings
const nomes5i1 = nomes5i0.join(' ')
console.log(nomes5i1);