// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

const isDivible = (num) => {
    //const div3 = num % 3
    //const div5 = num % 5
    if (typeof num !== 'number') {
        return `${num} não é um número`;
    }

    if (num % 3 === 0 && num % 5 === 0) {
        return `FizzBuzz, pq ${num} é divisível por 3 e 5`;
    } else if (num % 3 === 0) {
        return `Fizz, pq ${num} é divisível por 3`;
    } else if (num % 5 === 0 ) {
        return `Buzz, pq ${num} é divisível por 5`;
    } else {
        return num;
    }
}

//console.log('teste typeof  ####', isDivible('teste'));

for (let i = 0; i <= 100; i++) {
    console.log(isDivible(i));
}

// USAMOS DO WHILE para testar um outro modo de fazer
// porém como estamos iterando, ele itera até o 101
/* let i = 0
do {
    i++
    console.log(isDivible(i));
} while (i <= 100); */

