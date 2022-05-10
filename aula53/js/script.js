const nome = 'Rodrigo';

function falaNome() {
    console.log(nome);
}

falaNome(); //Rodrigo

//Por exemplo, tanto a function, quanto a const nome estão no escopo global. Isso é escopo léxico. A função reconhece tudo o que está dentro dela, nos seus vizinhos. 

//Quando a gente busca nome dentro da função, e a variavel não está dentro da função, ele vai escalando, busca no pai, se não achar no pai ele busca no pai do pai e assim sucessivamente até o escopo global. Caso ele não ache em nenum desses escopos, ele vai retornar um erro.

//As coisas tendem a complicar mais quando começamos a usar a chamada programação funcional

function usaFalaNome() {
    falaNome();
}

usaFalaNome(); //Rodrigo

//Exemplo 2 - Imagine que declaremos um nome dentro de falaNome2. A função vai identificar em primeiro o que está dentro dela. Encontrado a variável vai executar.

const nome2 = 'Rodrigo';

//independente de onde a função for executada ela vai lembrar do escopo dela
function falaNome2() {
    const nome = 'João'
    console.log(nome);
}

falaNome2(); //João

function usaFalaNome2() {
    falaNome2();
}

usaFalaNome2(); //João

//Como terceiro exemplo vamos verificar a reação da function falaNome quando setamos uma variavel dentro da function usaFalaNome.
const nome3 = 'Rodrigo';

function falaNome3() {
    console.log(nome);
}

falaNome3(); //Rodrigo

function usaFalaNome3() {
    const nome = 'João'
    falaNome3();
}

usaFalaNome3(); //Rodrigo

//Como podemos ver a função ignora a declaração de dentro da função onde está sendo executada porque ela lembra do escopo quando foi declarada.