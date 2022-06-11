// ASYNC/AWAIT

function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
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

// Executando um código de maneira asincrona, Fase1 Fase2 e assim por diante, usando then e catch
/* esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor)
        return esperaAi('Frase 2', rand());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', rand());
    })
    .then(fase => {
        console.log(fase);
    })
    .catch(err => {
        console.log(err);
    }); */

// USANDO ASYNC AWAIT
// substituímos esse then/catch por async await
/* async function executa() {
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3)
}

executa(); */

// USANDO ASYNC AWAIT com try catch
// substituímos esse then/catch por async 
/* async function executa() {
    try{
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        // Vai logar a fase 1 e a fase 2 e vai cair no erro.
        const fase3 = await esperaAi(2, rand());
        console.log(fase3);
    
        console.log('Terminamos na fase:', fase3)

    } catch(e) {
        console.log(e);
    }
} 

executa();
*/

// O uso de async/await e de promise depende do contexto. Tem lugar que é mais fácil e intuito usar uma ou outra.
// a palavra async vai nos permitir usar a palavra await dentro de uma função para esperarmos uma promise ser finalizada.

// As promises tem três estados
// Pendente -> executada, mas ainda não retornou o valor.
// Fulfilled -> resolvida
// rejected -> rejeitada

// PENDENTE
async function executa2() {
    try{
        const fase1 = esperaAi('Fase 1', rand());
        console.log(fase1);

        setTimeout(function() {
            console.log('Essa promise estava pendente');
        }, 1100);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        // Vai logar a fase 1 e a fase 2 e vai cair no erro.
        const fase3 = await esperaAi(2, rand());
        console.log(fase3);
    
        console.log('Terminamos na fase:', fase3)

    } catch(e) {
        console.log(e);
    }
}

executa2();