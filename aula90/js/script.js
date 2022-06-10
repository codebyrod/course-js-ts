// PROMISSES (promessas)
// Por exemplo, quando trabalhamos com dados de API não sabemos ao certo quando teremos esses dados de volta. 
// A antiga solução para isso seria as funções de callback que será executada quando tiver pronto.
// As promisses vieram para resolver a partir da substituição as funções de callback (por exemplo: árvove de natal).

// 2. Vamos construir a função de tempo aleatório
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// 1. Vamos criar uma função que simula uma espera de tempo aleatório para exibir uma mensagem
// 4.2 Passando um novo parâmetro na função
function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        
        // 4.3 Colocamos uma condição, se identificar uma função, retorna ela mesma
        if(cb) cb();
    }, tempo);
}

// 3. Chamando a função repetidas vezes, o retorno dela virá aleatoriamente
/* esperaAi('Frase1', rand(1, 3));
esperaAi('Frase2', rand(1, 3));
esperaAi('Frase3', rand(1, 3)); */

// 4. Para resolver com callback precisariamos passar um novo parâmetro na function esperaAi

// 5. reescrevendo a função como callback
/* esperaAi('Frase1', rand(1, 3), function() {
    esperaAi('Frase2', rand(1, 3), function() {
        esperaAi('Frase3', rand(1, 3));
    });
}); */

// 6. Como resolveríamos isso com Promisses?
// 6.1 vamos reescrever a função

function esperaAi2(msg, tempo) {
    // 6.2 vamos chamar o construtor da promise
    // 6.3 dentro do construtor vamos receber uma função, padrão é arrow function
    // 6.4 dentro da arrow function recebemos dois parâmetros, resolve e reject
    // 6.5 resolve é: "o código executou com sucesso, resolve ele pra mim"
    // 6.6 reject é: "deu um erro no código, rejeita aqui pra mim"
    // 6.7 vamos colocar nosso código anterior dentro da promisse
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // 6.8 estamos chamando a função atráves do parâmetro da função
            resolve(msg);
        }, tempo);
    });
}

// 7. vamos chamar a função que está usando Promise
/* esperaAi2('Frase 1', rand(1, 3))
    .then(res => {
        console.log(res);
        return esperaAi2('Frase 2', rand(1, 3));
    })
    .then(res => {
        return res + ' vai pro outro THEN';
    })
    .then(res => {
        console.log(res);
        return esperaAi2('Frase 3', rand(1,3));
    }).then( res => {
        console.log(res)
    }); */

// 8. Importante dizer que as promisses serão exibidas em paralelo com o restante do código js. O JS não vai esperar a finalização das promisses para executar outras linhas
// 8.1 por isso são chamados de dados assíncronos
console.log('Isso aqui será exibido antes de qualquer promisse.');

// 9. reject
function esperaAi3(msg, tempo) {
    return new Promise((resolve, reject) => {
        // 10.1 Colocamos uma condição de verificação do parâmetro da função
        if(typeof msg !== 'string') reject ('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi3('Frase 5', rand(1, 3))
    .then(res => {
        console.log(res);
        //10.2 setando um valor que vai dar erro na verificação interna da chamada
        return esperaAi3(22222, rand(1, 3));
    })
    .then(res => {
        console.log(res)
        return esperaAi3('Frase 7', rand(1,3));
    })
    .then(res => {
        console.log(res);
        return;
    })
    // 10.3 catch para capturar o erro
    .catch( e => {
        console.log('ERRO:', e);
    });