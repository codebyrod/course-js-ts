//BREAK E CONTINUE
// break e continue funcionam em todos os laços mostrados até agora 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//UTILIZANDO FOR OF PARA EXEMPLO
for (let numero of numeros) {

    //CONTINUE
    //pula para a próxima iteração do laço

    //caso a condição do laço for seja verdadeira ele vai entrar no if
    //no if ele vai verificar a condição if
    //toda vez que a engine do js encontrar a palavra continue, a engine vai ignorar o resto do código dentro do bloco e vai retornar para o laço pai
    //Essa é uma forma de pular ações
    if (numero === 2) {
        continue;
    } //1, 3, 4, 5, 6, 7, 8, 9

    if (numero === 5) {
        continue;
    } //1, 3, 4, 6, 7, 8, 9

    console.log(numero); //1, 3, 4, 6, 7, 7 encontrando, saindo...

    //BREAK
    // break serve para parar uma ação, útil para economizar recursos e otimizar a velocidade do nosso código
    //Ex vamos encontrar o 7, assim que encontrarmos o 7 não faz sentido ainda rodar o código
    //quando a engine do js encontrar o break ele sai fora do laço e acaba ali
    if (numero === 7){
        console.log('7 encontrado, saindo...');
        break
    }
}

//FAZENDO A MESMA COISA COM FOR IN
/* for (let i in numeros) {
    let numero = numeros[i];

    if (numero === 2) {
        continue;
    }

    if (numero === 5) {
        continue;
    }

    console.log(numero); 
    
    if (numero === 7){
        console.log('7 encontrado, saindo...');
        break
    }
} */

//FAZENDO A MESMA COISA COM FOR CLÁSSICO
/* for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero === 2) {
        continue;
    }

    if (numero === 5) {
        continue;
    }

    console.log(numero); 
    
    if (numero === 7){
        console.log('7 encontrado, saindo...');
        break
    }
} */

//FAZENDO A MESMA COISA COM WHILE
//let i = 0 // variável de controle
/* while (i < numeros.length) {
    //PROBLEMA: geralmente colocarmos a iteração no final do laço. o problema é que se ele encontrar a palavra continue antes da iteração ele vai cair num looping infinito pq a iteração do laço não estará sendo modificada.
    
    let numero = numeros[i];

    if (numero === 2) {
        console.log(`Pulamos o número 2`);
        i++ //iteração do laço antes de continue p/  evitar looping infinito
        continue;
    }
    
    if (numero === 5) {
        console.log(`Pulamos o número 5`);
        i++ //iteração do laço antes de continue p/  evitar looping infinito
        continue;
    }

    console.log(numero); 
    
    if (numero === 7){
        console.log('7 encontrado, saindo...');
        break
    }

    i++ //iteração do laço.
} */

//FAZENDO A MESMA COISA COM DO WHILE
//let i = 0 // variável de controle
/* do {
    //PROBLEMA: geralmente colocarmos a iteração no final do laço. o problema é que se ele encontrar a palavra continue antes da iteração ele vai cair num looping infinito pq a iteração do laço não estará sendo modificada.
    
    let numero = numeros[i];

    if (numero === 2) {
        console.log(`Pulamos o número 2`);
        i++ //iteração do laço antes de continue p/  evitar looping infinito
        continue;
    }
    
    if (numero === 5) {
        console.log(`Pulamos o número 5`);
        i++ //iteração do laço antes de continue p/  evitar looping infinito
        continue;
    }

    console.log(numero); 
    
    if (numero === 7){
        console.log('7 encontrado, saindo...');
        break
    }

    i++ //iteração do laço.
} while (i < numeros.length); */
