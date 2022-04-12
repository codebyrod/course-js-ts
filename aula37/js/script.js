const frutas = ['Pera', 'Maçã', 'Uva']; //array de única dimensão também é chamado de vetor;

/* for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    console.log(i);
} */

//For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

//Eu não sabia que dava pra acessar propriedades do objeto assim:
console.log(pessoa['nome']); // Luiz

for (let key in pessoa){
    console.log(key, pessoa[key]);
}

/* for (let i in frutas) {
    console.log(i);
} */