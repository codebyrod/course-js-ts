//MÉTODOS DE INSTÂNCIAS E ESTÁTICOS
//métodos que podemos acessar na classe sem instânciar a classe, ou seja sem usar a palavrinha new. Eles também não vão estar disponíveis dentro da instância.

// 10. Imagine que criemos uma function de teste
function teste() {
    console.log('Esse é meu teste');
    // 16. Vamos verificar quem é o this aqui
    console.log(this) //O this aqui é o Object [global] do Node
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;

        // 11. Vamos invocar nossa function aqui
        teste();
    }

    //1. Método de instância, disponível para serem usadosnas instâncias da classe
    aumentarVolume() {
        this.volume += 2;
    }

    // Método de instância
    diminuirVolume() {
        this.volume += 2;
    }

    //2. Método estático, disponível apenas para a classe pai, no caso aqui a classe ControleRemoto. Para definirmos um método estático precisamos usar a palavra static antes do método.
    static atualizaSoftware() {
        console.log('Ok, atualizando o software de todos os controles.');

        //5. Como não estamos usando a palavra new (ou instanciando a classe) não temos acesso ao constructor da classe
        console.log(this.volume);
    }

    static soma(x, y){
        // 15. vamos verificar quem é o this aqui
        console.log(this); //[class ControleRemoto], ou seja, é a própria classe
        return x + y;
    }

    //6. Quando não chamamos a palavra new não estamos criando uma instância, logo não temos acesso ao constructor, e nem aos dados internos desse constructor.
    //7. Quando instanciamos a classe estamos criando um novo objeto. 
}

// 12. Vamos comentar essas linhas abaixo
/* const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1); */

//3. Se tentarmos chamar o método estático dentro de uma instância de classe vai dar erro.
// controle1.atualizaSoftware(); //controle1.atualizaSoftware is not a function


//4. Mas quando chegamos pela classe pai, tudo dá certo
//8. Nesse caso aqui não estamos instanciando a classe uma vez que não usamos a palavra new para construir um objeto.
ControleRemoto.atualizaSoftware(); //Ok, atualizando o software de todos os controles.

// 9. Método estático recebendo parâmetros
console.log(ControleRemoto.soma(2, 5)); //7

// 13. Vamos chamar a instância mais uma vez
// 14. Só o fato de criarmos a palavra new já acessa o constructor, ao acessar o constructor ele executa a função que pedimos para executar dentro do constructor
const controle2 = new ControleRemoto('AOC'); //Esse é meu teste

// 16. Ao invés de criarmos uma função externa, podemos criar um método estático. Lembrando que o método estático não tem acesso aos dados da instância