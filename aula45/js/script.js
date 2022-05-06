//Saber ler e tratar os erros

//Vamos criar uma variável que não existe
//console.log(naoExisto);

/* 
ReferenceError: naoExisto is not defined
    at Object.<anonymous> (/home/rodrigo/Documentos/Curso Js e TS/Exercícios/aula45/js/script.js:4:13)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47 
*/

//São apresentados algumas coisas:
// 1. A referência do erro
// 2. E a stacktrace do erro
// 3. O arquivo onde está o erro
// 4. A linha do erro

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number' ) {
        throw new Error('x e y precisam ser números.');
        //throw estamos tratando o potencial erro.
        //Estamos usando uma função construtora pra isso
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, 'b'));
} catch (err) {
    //console.log(err); 
    //É potencialmente perigoso expor uma vulnerabilidade interna para o usuário final
    console.log('Exibir algo mais amigável pro usuário');
}




