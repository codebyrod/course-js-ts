//Fazemos uma sequência aqui de funções, vemos a sequência, conseguimos identificar a ordem e etc.

/* function f1() {
    console.log('f1');
}
function f2() {
    console.log('f2');
}
function f3() { 
    console.log('f3');
}

f1();
f2();
f3();

console.log('Olá mundo!'); //f1 f2 f3 Olá mundo! */

//Porém na web a gente precisa se conectar na base de dados, buscar recursos na base de dados, exibir as coisas na tela, buscar recursos de uma API, carregar um arquivo JSON. Em geral coisas que não temos controle de quanto tempo o js vai levar para realizar tais operações.

//SIMULAÇÃO USANDO TIMEOUT
//Usaremos timeout e uma função que gera numeros aleatórios para simular a variação de tempo no qual não saberemos quanto tempo o js vai levar para concluir as tarefas necessárias
/* function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}

function f4() {
    setTimeout(() => {
        console.log('f4');
    }, rand());
}
function f5() {
    setTimeout(() => {
        console.log('f5');
    }, rand());
}
function f6() { 
    setTimeout(() => {
        console.log('f6');
    }, rand());
}

f4();
f5();
f6();

console.log('Olá mundo!'); */ //A única coisa que saberemos é que o console.log vai ser executado primeiro

//Precisamos que as funções sejam executadas na ordem, e agora?
//É aí que entra as FUNÇÕES DE CALLBACK

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min; //aqui usamos a multiplicação de propriedade distribuitiva em // Math.random() * (max- min) //
    return Math.floor(num)
}

//Passamos callback como parâmetro em todas as funções que queremos executar em sequência
function f7(callback) {
    setTimeout(() => {
        console.log('f7');
        //setamos uma condição, se existir alguma função de callback a gente executa callback().
        if (callback) callback();
    }, rand());
}
function f8(callback) {
    setTimeout(() => {
        console.log('f8');
        if (callback) callback();
    }, rand());
}
function f9(callback) { 
    setTimeout(() => {
        console.log('f9');
        if (callback) callback();
    }, rand());
}

//Nessa parte criamos a sequência da execução.
//Passamos uma função encadeada como parâmetro da f7. A f7 vai excutar o código e ao final vai executar o callback(). O callback está executando a próxima função ao mesmo tempo que a função recebe o parâmetro de callback. 

//RESUMO: f7 excuta todas as linhas, chama callback que está recebendo uma função anônima. Essa função anônima executa a f8, ao mesmo tempo que a f8 recebe uma parâmetro com uma função anônima para executar a f9, e assim sucessivamente.

/* f7(function() {
    f8(function() {
        f9(function() {
            console.log('Olá mundo!')
        });
    });
}); // f7 f8 f9 Olá mundo! */

//DEUU CERTOOOO

//mas, porém, contudo, entretanto, todavia

//O que acabamos de fazer também é chamado de CALLBACK HELL (o inferno do callback).

//Imagina se tivéssemos muitas outras funções para colocar em sequência. O código ficaria menos legível a cada nova função encadeada.

//VAMOS REFATORAR ESSE CALLBACK HELL
f7(f7Callback());

function f7Callback() {
    f8(f8Callback());
}

function f8Callback() {
    f9(f9Callback());
}

function f9Callback() {
    console.log('Olá mundo!')
}

//USANDO ARROW FUNCTIONS
//tentei usar arrow functions, mas não é possível executar uma função antes de inicializar. Isso pq arrow functions não possuem hoisting.
/* f7(f7Callback());
const f7Callback = () => f8(f8Callback);
f8(f8Callback());
const f8Callback = () => f9(f9Callback);
f9(f9Callback);
const f9Callback = () => console.log('Olá mundo!') */

//Uma melhor abordagem seriam as PROMISSES (promessas) que veremos mais pra frente. Segundo o professor um código mais limpo e mais simples.