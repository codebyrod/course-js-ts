let nome = 'Luiz';
var nome2 = 'Luiz';

const verdadeira = true; 
//let nome = 'Otávio'; //Dá erro

//let não pode reatribuir 

/* if (verdadeira) {
    let nome = 'Otávio'
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'Rodrigo';
        console.log(nome, nome2);
    }
} // Otávio, Luiz */

// let tem escopo de bloco, por isso que não dá erro.
// {... bloco ... } tem chaves é um bloco
// Var só tem escopo de função

//bloco alinhado (if dentro de if)

//independente do escopo onde VAR é redeclarada ela reinicializa o valor, com exceção das funções.

//Em função é diferente
//A função protege as variáveis. exemplo:

/* function falaOi () {
    var nome3 = 'Cremilson';
}
console.log(nome3);
//ERROR: nome3 is not defined
falaOi();
 */

//Clojures - Vizinho (exemplo)

/* var sobrenome = 'Miranda';

function falaTchau() {
    console.log(sobrenome);
} */

//A função não achou nada no bloco e foi procurar nos vizinhos,
// caso a variavel esteja DENTRO do bloco de função, ela não pode ser acessada por nenhum outro lugar

//Fora da função
// Var escopo global
// let escopo local e de bloco {...bloco}

// Na função
// Var escopo da função 
// Let escopo de bloco {... bloco}

//HOISTING (elevação ou içamento)

// "Elevação" das variáveis var
// --->>> quando chamamos uma variável var antes de atribuií-la;
//com let não acontece o hoisting

// o hoisting acontece com funções tb (criadas normalmente)

//chamamos a váriavel antes de criarmos, ao invés de dar erro vai dar undefined
console.log(sobrenome);
var sobrenome = "Miranda";

