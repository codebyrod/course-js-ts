//Repetição manual
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');


//Precisamos de três coisas
//1. variável de controle, 2. condição, 3. incremento ou decremento
//geralmente chamamos essa variável de controle de i de index
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

//Podemos controlar os valores da inicialização, da condição e do in/decremento
for (let i = 400; i <= 500; i += 10) {
    console.log(`Linha ${i}`);
}

//Podemos decrementar tb
for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha ${i}`);
}

//Checando se o número é par ou ímpar
for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

//Percorrendo array com for
const frutas = ['Maçã', 'Pêra', 'Uva', 'Goiaba', 'Banana', 'Mamão'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`,frutas[i]);
}
