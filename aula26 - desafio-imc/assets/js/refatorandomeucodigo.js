//Estou refazendo esse exercício algumas vezes para fixar os conceitos
//Evito olhar o máximo para a resolução do professor

//prevenir o submit do formulário
//função que faça o calculo do imc
//função que faça o ranking do imc
//função que sete o resultado na tela

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const pesoInput = e.target.querySelector('#peso');
    const alturaInput = e.target.querySelector('#altura')

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if (!peso) {
        return setResult('Peso inválido', false)
    }

    if (!altura) {
        return setResult('Altura inválida', false)
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} - (${nivelImc})`
    console.log(peso, altura);
    
    getNivelImc(imc);
    setResult(msg, true)
})

function getImc (peso, altura) {
    const calcImc = peso / altura ** 2
    const imc = calcImc.toFixed(2)
    return imc;
}

function getNivelImc (imc) {
    nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3' ]

    if (imc >= 40) return nivel[5]
    if (imc >= 35) return nivel[4]
    if (imc >= 30) return nivel[3]
    if (imc >= 25) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResult (msg, isValid){
    const result = document.querySelector('.resultado');
    result.innerHTML = ``
    
    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('erro')
    }
    
    p.innerHTML = msg
    result.appendChild(p)
}
