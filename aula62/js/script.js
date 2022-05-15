//FUNÇÕES GERADORAS
//Imagina que preciso que uma função me entregue três valores.
//Na primeira vez que eu chamar a função ela me entrega o valor1. Na segunda o valor2 e na terceira o valor3 automaticamente;

//Lazy evaluation, o que pode ser bom para performance

function* geradora1(){

    //Código qualquer
    //É quase como se fosse um return
    yield 'Valor1'

    //Código qualquer
    yield 'Valor2'

    //Código qualquer
    yield 'Valor3'
}

const g1 = geradora1();

//console.log(g1); //Object [Generator] {}

//console.log(g1.next()); //{ value: 'Valor1', done: false }
//aqui temos duas chaves. A primeira é o valor. A segunda é se já se acabaram todos os valores. Como estamos no primeiro valor ele retorna falso.

//USANDO CONSOLE.LOG PARA MOSTRAR O RETORNO DOS VALORES
/* console.log(g1.next().value); // Valor1
console.log(g1.next().value); // Valor2
//console.log(g1.next().value); // Valor3

//Na última execução faremos com o objeto
console.log(g1.next()); //{ value: 'Valor3', done: false }
//Perceba que a propriedade done retorna false

//Chamando pela 4a vez
//Agora sim acabou
console.log(g1.next()); //{ value: undefined, done: true }
 */

//USANDO ESTRUTURA FOR PARA ITERAR
for (let valor of g1) {

    //O for of sabe quantas iterações existe em g1
    console.log(valor); //Valor1 -/ Valor2 -/ Valor3
}


//CRIANDO UM CONTADOR INFINITO
function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}

const g2 = geradora2();
console.log(g2.next().value); //0
console.log(g2.next().value); //1
console.log(g2.next().value); //2
console.log(g2.next().value); //3
console.log(g2.next().value); //4
console.log(g2.next().value); //5
console.log(g2.next().value); //6
console.log(g2.next().value); //7

//CRIANDO UM GERADOR QUE DELEGA TAREFA PARA OUTRA GERADORA

//A geradora3 jpa faz 0 1 2. Imagine que queremos que a geradora4 faça 3 4 5 por exemplo
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4){
    console.log(valor); //0 -/ 1 -/ 2 -/ 3 -/ 4 -/ 5 -/ 
}

//RETORNANDO FUNÇÕES NO YIELD
function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };

    /* //Imagina que colocamos o return aqui. O que acontece é que o return é executado como se fosse um yield2, porém todo o código depois do return será ignorado.
    return function() {
        console.log('Vim do return');
    } */
    //...
    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();

//Os valores que estão sendo retornado são funções
const func1 = g5.next().value;
const func2 = g5.next().value;

//Só estmaos chamando normalmente as funções
func1();
func2();
