// uma função para cada coisa
const form = document.querySelector('.form');

//achei interessante isso de usar funções anônimas
form.addEventListener('submit', function (e) {
    e.preventDefault();

    //Recebendo os valores por e.target do input por id
    //tamo usando e.target pq tá vindo do form
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    //Aqui estamos convertendo o valor que foi recebido no input para Number
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    //Se a pessoa digita algo que não seja um número vai retornar NaN,
    //que é um FALSY
   if (!peso) { //se peso não for true
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
    
    console.log('Cheguei aqui...', imc, nivelImc);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    //não precisamos de else if pq uma vez que a função encontre o return ela vai parar
    //outra coisa é que podemos colocar o if todo numa linha por ser pequeno, mas é algo não recomendado
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
};

function getImc (peso, altura) {
    const imc = peso / altura **2;
    console.log(imc.toFixed(2));
    return imc.toFixed(2);
};

function criaP () {
    //1. Criamos um elemento p de paragraph, mas não adicionamos ele em lugar nenhum
    const p = document.createElement('p');
    //quando usamos return em uma função ele para de executar o bloco de código que vem posteriormente
    return p;
}

//vamos criar uma função que set alguma coisa na div resultado
function setResultado (msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ``;

    const p = criaP();

    if(isValid) {
        p.classList.add('.paragrafo-resultado');
    } else {
        p.classList.add('.erro');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}