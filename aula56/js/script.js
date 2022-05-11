//FUNÇÕES IMEDIATAS
//IIFE -> Immediately Invoked Function Expression
//Expressão de função invocada imediatamente

//Quando estamos trabalhando no browser, por exemplo, a gente quer fugir do escopo global pq elas podem ser alteradas, 

//O que fazemos para fugir do escopo global? encapsulamos em funções

function qualquerCoisa(){
    console.log(1212);
}
qualquerCoisa();

//SINTAXE
//Envolvido em um parênteses, e já chamado com parênteses ao final do código
(function() {
    //código aqui
})();

//Exemplo
(function(idade, peso, altura) {
    const sobrenome = 'Sousa';

    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Rodrigo'))
    }

    falaNome();
    console.log(idade, peso, altura);
})(27, 73, 1.80);
