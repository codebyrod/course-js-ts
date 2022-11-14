export const nome = 'Rodrigo';
export const sobrenome = 'Sousa';
export const idade = 28;

export function soma (x = 0, y = 0){
    return x + y;
}

//Dá pra exportar assim e do outro jeito
/* export { nome, sobrenome, idade, soma } */

//exportar const default dá erro, então podemos fazer assim
/* export {nome as default, sobrenome, idade, soma} */

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

