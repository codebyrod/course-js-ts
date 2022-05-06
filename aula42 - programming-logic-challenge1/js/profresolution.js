//RESOLVENDO DE FORMA BÁSICA
/* function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(1,2)); */

//IREMOS AGORA REFATORAR NOSSO CÓDIGO, ou seja, implementar melhorias
/* function max(x, y) {
    //Quando fazemos um if pequenininho com uma linha podemos colocar tudo na mesma linha do código
    if (x > y) return x; 
    
    //Tiramos o else. Se a primeira condição for verdadeira ele vai chegar no return e sair da função. Caso contrário o if não será executado e já retorna o y.
    return y;
}
console.log(max(1,2));
*/

//USANDO TERNÁRIO
/* function max(x, y) {
    return x > y ? x : y;
}
console.log(max(1,2));
*/

//Usando Arrow Function
const maxNumber = (x, y) => x > y ? x : y;
console.log(maxNumber(1,2));
