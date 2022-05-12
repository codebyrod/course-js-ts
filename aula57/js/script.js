//FACTORY FUNCTION (Funções Fábricas)
//Relacionada ao paradigma de programação orientada a objetos

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //Uma função dentro de um objeto é chamado de método
        
        /* fala: function(assunto) { */
        //Uma maneira mais simples de escrever a mesma coisa que a linha de cima
        fala(assunto) {
            /* 
            //Aqui estamos consumindo diretamente do parâmetro da função
            return `${nome} está falando sobre ${assunto}.`; */

           /*  //Usando o this. O this sempre vai se referir a quem chamou o que tivermos executando. 
            //No caso quem pediu para executar o metodo foi o p1
            return `${nome} tem ${this.altura.toFixed(2)} de altura.`; */

            //Agora estamos usando o nome da chave e não mais do parâmetro.
            return `${this.nome} está falando sobre ${assunto}.`;

            /* //Seria possível acessarmos o método com this também
            return `${this.nome} está falando sobre ${this.imc()}.`; */
        },

        altura,
        peso,

        //Construindo um imc como método
        /* imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        } */

        //Como fazer esse imc fingir ser um atributo?
        //GETTER -> só queremos obter o valor
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        //ISSO PODE SER UM GETTER pq não precisamos setar nenhum valor
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //SETTER
        set nomeCompleto(valor){

            //Método Split fatia as partes ao encontrar o caractere setado
            valor = valor.split(' ');

            //Método shift remove o indice do início do array. No caso abaixo estamos removendo e setando o valor no atributo nome
            this.nome = valor.shift();

            //Método join junta todos os elementos de um array em uma string e retorna esta string
            this.sobrenome = valor.join(' ');
            console.log(`teste log setter - ${valor}`);
        }
    };
}

const p1 = criaPessoa('Rodrigo', 'Sousa', 1.8, 73);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 65);
console.log(p2.fala('JS')); //Maria está falando sobre JS
//console.log(p2.imc()); //25.39
console.log(p1.nome); // Rodrigo

//INSERINDO O GET NO IMC
/* console.log(p2.imc()); */ //TypeError: p2.imc is not a function
//Deu erro pq o imc está fingindo ser um atributo da classe e não mais um método.

//Ao chamarmos o imc como atributo ele retorna normalmente
console.log(p2.imc); // 25.39

//CRIANDO GETTER E SETTER 
//E se quiséssemos passar um valor pro atributo nomeCompleto e magicamente ele soubesse o que é nome, o que é sobrenome e setar ambos valores nos respectivos atributos. 
p1.nomeCompleto = 'Agostinho Carrara Mendonça'
console.log(`teste final ${p1.nomeCompleto}`);

// 1 -> Tranformamos o método em um falso atributo com GETTER
// 2 -> Setamos um valor para o nomeCompleto que está fingindo ser um atributo
// 3 -> O valor setado no atributo será enviado para o SETTER como parâmetro

//TESTANDO
const p3 = criaPessoa('Marcela', 'Almeida', 1.92, 80);
const p4 = criaPessoa('Reginalda', 'Corisco', 1.70, 70);
const p5 = criaPessoa('Bruno', 'Faizete', 1.75, 82);

console.log(p3.imc);
console.log(p4.imc);
console.log(p5.imc);
//VANTAGEM DE UTILIZAR FACTORY OU CONSTRUTOR FUNTION?
//Para criar novas pessoas ou objetos, basta uma linha. Odemorado mesmo é construir a função, mas depois disso a utilização é incrivelmente fácil e rápida
