//POLIMORFISMO
//maneira de métodos se comportarem de maneira diferente como subclasses
//subclasses, filhas de uma classe mãe ou classe pai (classe === Função construtora)

//vamos fazer uma classe de conta bancaria
//depois vamos especializar ela em conta corrente e conta poupança
//cada uma dessas subclasses teria o método sacar

//Superclasse
function Conta(agencia,conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/C: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo}`)
}

const conta1 = new Conta(11, 22, 10);
conta1.depositar(35);
conta1.sacar(15);

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

//Aqui estamos aplicando o polimorfismo, sobrescrevendo a função sacar que vai se comportar de forma única dentro da subclasse contacorrente.
ContaCorrente.prototype.sacar = function (valor) {
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return
    }
    this.saldo -= valor;
    this.verSaldo();
}

const cc1 = new ContaCorrente(01, 05, 0, 100);
cc1.depositar(10)                                      
//cc1.sacar(50)

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp1 = new ContaPoupanca(44, 55, 50);
cp1.depositar(20);
cp1.sacar(100);