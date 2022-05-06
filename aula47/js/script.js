//Estamos criando uma função que retorna a hora atual
function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}

console.log(mostraHora());

//Pra trabalhar com intervalo de tempo setInterval();

//Estamos criando uma função doInterval que chama a outra função (mostraHora()) no console.log;
/* function doInterval() {
    console.log(mostraHora());
} */

//Aqui estamos dando um intevalo de 1 segundo para executar a função;
//OBS: Não estamos executando a função, apenas passando por referência
//setInterval(doInterval, 1000) //crtl+c para parar o terminal;

//FUNÇÃO ANÔNIMA
//Quando precisarmos usar uma função para executar outra função podemos usar uma função anônima;

//Usando um intervalo de execução da função de mostraHora com uma função anônima e um intervalo de tempo;
/* setInterval(function () {
    console.log(mostraHora(), 1000);
}); */

//Podemos jogar essa execução toda para uma variável 
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

//Como aqui não podemos usar um evento de clique para parar a função de intervalo, vamos criar uma outra função para parar a execução da função

setTimeout(function() {
    clearInterval(timer);
},  4000);

setTimeout(function() {
    console.log('Olá mundo!');
},  5000);
