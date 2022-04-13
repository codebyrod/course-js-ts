const nome = 'Luiz Otávio';
const nomes = ['Luiz', 'Otávio', 'Henrique'];

//For clássico - Geralmente com iteráveis (arrays ou strings)
//For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// const nome = 'Luiz Otávio';
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

// const nomes = ['Luiz', 'Otávio', 'Henrique'];
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log('#######')

//usando for in retorna o índice.
//Pra retonar o valor estamos usando a marcação de colchetes

// const nome = 'Luiz Otávio';
for (let i in nome) {
    console.log(nome[i]);
};

// const nomes = ['Luiz', 'Otávio', 'Henrique'];
for (let i in nomes) {
    console.log(nomes[i]);
};
console.log('#######')

// For of retorna o valor

// const nome = 'Luiz Otávio';
for (let valor of nome) {
    console.log(valor);
}

// const nomes = ['Luiz', 'Otávio', 'Henrique'];
for (let valor of nomes) {
    console.log(valor);
}

console.log('#######')

//Usando forEach(), veremos isso mais na frente
nomes.forEach(function (el, ind) {
    console.log(el, ind);
});

//Usando em objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

//For in - Retorna o índice ou chave (string, array ou objetos)
//For in é o mais recomendado para objetos, for of dá erro
for (let key in pessoa) {
    console.log(key, pessoa[key]);
}