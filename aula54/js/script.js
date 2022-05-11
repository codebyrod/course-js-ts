function retornaFuncao() {
    const nome = 'Rodrigo';

    //aqui embaixo estamos retornando uma função que tem acesso ao escopo léxico da mãe dela
    //a const funcao vai receber esse return
    return function() {
        return nome;
    }
}

//O que a função retornaFuncao retorna estamos setando na variável const funcao
const funcao = retornaFuncao();
//seria o mesmo que 
/* const funcao = function() {
    return nome;
} */

console.log(funcao); // retorna [function] pq é uma função anônima

// USANDO CONSOLE.DIR
//Exibe uma lista interativa das propriedades do objeto JavaScript especificado. A saída é apresentada como uma lista hierárquica que permitem ver o conteúdo de objetos-filho.

console.dir(funcao);
//f anonymous() -> [[Scopes]] -> [{0: Closure ()}] tem acesso a três escopos. O dela mesmo, o da mãe dela e do global

//Esse exemplo abaixo não está fidedigno, mas serve apenas para ilustração
/* function anonymous() {
    //vários objetos
    Scopes = {
        0: function Closure (retornaFuncao) {nome: 'Rodrigo'},
        1: Script = {
            funcao: function () {
                //vários objetos
                name: "";
            }
        },
        2: Global ={
            //varios objetos
        }
    }
} */

//Fazendo Teste com Parâmetro da função
function retornaFuncao2(nome) {

    //aqui embaixo estamos retornando uma função que tem acesso ao escopo léxico da mãe dela
    //a const funcao vai receber esse return
    return function() {
        return nome;
    }
}

const funcao2a = retornaFuncao('Luiz');
const funcao2b = retornaFuncao('João');

console.dir(funcao2a); //retorna Closure nome: Luiz
console.dir(funcao2b); //retorna Closure nome: João

console.log(funcao2a(), funcao2b());

//CONCLUSÃO
//Closure é a habilidade que a função tem em acessar seu escopo léxico