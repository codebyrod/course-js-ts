//Quando usamos um laço for geralmente sabemos o tamanho do laço

//While ou Do While geralmente a gente não sabe quantas repetições vai ocorrer
//Variável de controle, checar uma condição, se for verdadeira vai pro bloco
//dentro do bloco vamos atualizar a condição, e repete-se o processo

/* let i = 0 // varáivel de controle

while (i <= 10){ //condição
    console.log(i); //executa1
    i++; //executa2
} //retorna o laço enquanto a condição for verdadeira */

/* const nome = 'Luiz'; //condição a ser analisada
let i = 0; // varáivel de controle

while (i < nome.length){ //condição
    console.log(nome[i]); //executa1
    i++; //executa2
} */

//Vamos fazer uma function sorteando números aleatórios

/* function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = random(min, max)

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
} */

//Diferença entre While e Do While
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand;

//While checa a condição, depois executa. Aqui ela não vai executar nada
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('Abaixo daqui é Do While');

//Do while executa ao menos uma vez antes de verificar a condição
do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);
