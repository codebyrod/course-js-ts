// HERANÇA COM CLASSES

// 1. Vamos construir uma classe de um dispositivo eletronico que recebe um nome e um estado
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log(`${this.nome} já ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
            console.log(`${this.nome} já desligado.`);
            return;
        }

        this.ligado = false;
    }
}

// 3. Vamos comentar isso aqui
/* const d1 = new DispositivoEletronico('Smartphone');
d1.ligar()
console.log(d1) */

// 2. Agora vamos especificar ainda mais nossa classe
// 4. Esse extends que vai dizer de quem vamos herdar a classe
// 7.Comentando
/* class Smartphone extends DispositivoEletronico {} */

// 5.Desse jeito acima smartphone já herda tudo de DispositivoEletronico. Vamos fazer um teste.
// 7.Comentando
/* const s1 = new Smartphone('IPhone');
s1.ligar();
console.log(s1); */

// 6. Mas como vamos especificar, certamente vamos acrescentar características do objeto. Vamos comentar tudo de cima e refazer
class Smartphone extends DispositivoEletronico {
    // 8. Usamos o constructor
    constructor(nome, cor, modelo) {
        // 9. Quando usamos um extends e um construtor precisamos chamar o super. Ele já puxa os parâmetros requisitados. Caso quisermos mais além de nome, basta colocar como parâmetro do super.
        super(nome);

        // 10. Agora vamos passar as propriedades específicas
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Samsung', 'Cinza', 'Galaxy S10');
console.log(s1);

// 11. O Professor orientou para que tomemos cuidado com graus de especificação. Se tivermos muitas heranças, uma em relação à outra e outra isso pode tornar a manuntenção mais complicada.

// 12. Podemos criar outras classes que estende Dispositivo Eletronico.

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    // 13. Podemos sobreescrever métodos, bem como podemos criar outros métodos.
    ligar(){
        console.log('Você já alterou o método ligar')
    }

    // 14. Método está apenas no tablet
    falaOi() {
        console.log('Oi');
    }
}

const t1 = new Tablet('iPad', true);
console.log(t1);
t1.ligar();
t1.falaOi();

// Na HERANÇA herdamos coisas de nossas classes pai. As classes pais por sua vez não herdam nada dos filhos. No exemplo acima Smartphone e Tablet são classes irmãs.