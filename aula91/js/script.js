// MÉTODOS ÚTEIS PARA PROMISSES (promessas)

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

/* function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject ('CAI NO ERRO');
            return;
        }
        
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promisse');
        }, tempo);
    });
} */

// Promise.all, Promisse.race, Promise.resolve, Promise.reject
// PROMISSE.ALL -> se todas derem certo retorna todas, se uma der errado retorna o erro.
// PROMISE.RACE (corrida) -> retorna a promisse que obter o resultado em primeiro lugar, uma corrida mesmo.

/* const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000, 1000),
    'Outro valor'
]; */

// PROMISE ALL
// Estamos dizendo para pegar todas as promises da const promisses
// Caso não tenha erros, ele retorna todas as promisses. Se houver erro ele retorna apenas o erro.
/* Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((err) => {
        console.log(err);
    }); */

// Criando uma nova function para usar na promise.race
function esperaAi2(msg, tempo) {
    return new Promise((resolve, reject) => {
             
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject ('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promisse');
        }, tempo);
    });
}

// criando uma nova const para usar na promise.race
/* const promises2 = [
    esperaAi2('Promise 1', rand(1, 5)),
    esperaAi2('Promise 2', rand(1, 5)),
    esperaAi2('Promise 3', rand(1, 5)),
    esperaAi2(1000, rand(1, 5))
]; */

// PROMISE RACE
// a primeira que resolver você me entrega o valor.
// depois de retornar o setTimeOut continua rodando, pq ele não tem como falar pro setTimeOut parar de rodar.
// Uma hora vai cair no erro
/* Promise.race(promises2)
    .then((valor) => {
        console.log(valor);
    })
    .catch((err) => {
        console.log(err);
    }); */

// PROMISE RESOLVE
/* function baixaPagina() {
    // estamos simulando se o valor está em cache ou não
    // const emCache = true;

    // Caso a gente mude nossa flag
    const emCache = false;

    if(emCache){
        // Isso já é uma promessa resolvida
       return Promise.resolve('Página em cache');
    } else {
        return esperaAi2('Baixei a página', 3000);
    }
} */

/* baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e)); */

// PROMISE REJECT
function baixaPagina() {
    // estamos simulando se o valor está em cache ou não
    const emCache = true;

    // Se tiver em cache, rejeita
    if(emCache){
       return Promise.reject('Página em cache');
    } else {
        return esperaAi2('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));
