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
async function executa() {
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

// a palavra async vai nos permitir usar a palavra await para esperarmos uma promise ser usada