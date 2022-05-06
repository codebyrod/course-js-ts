// parar o envio do forms
// capturar o envio do submit
// renderizar na tela erros de preenchimento
// renderizar na tela o imc específico de cada pesso

function calculaIMC() {
    const form = document.querySelector('.form');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resultado = document.querySelector('.resultado')
    const erro = document.querySelector('.erro');

    function capturaDados(e) {
        e.preventDefault();
        resultado.innerHTML = ``

        function verificaCampoPreenchido() {
            if (peso.value === '' && altura.value !== '') {
                erro.innerHTML = `<p>Atribua valores para peso</p>`
            } else if (peso.value !== '' && altura.value === '') {
                erro.innerHTML = `<p>Atribua valores para altura</p>`
            } else if (peso.value === '' && altura.value === '') {
                erro.innerHTML = `<p>Atribua valores para peso e altura</p>`
            } else /* (peso.value !== '' && altura.value !== '') */ {
                erro.innerHTML = ``

                function calculaResultado() {
                    const alturaValue = altura.value / 100
                    const imc = peso.value / (alturaValue * alturaValue)
    
                    if (imc < 18.5) {
                        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso</p>`
                    } else if (imc >= 18.5 && imc < 24.9) {
                        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} e você está no peso normal</p>`
                    } else if (imc >= 25 && imc < 29.9) {
                        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} e você está com Sobrepeso</p>`
                    } else if (imc >= 30 && imc < 34.9) {
                        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} e você está com Obesidade Grau 1</p>`
                    } else if (imc >= 35 && imc < 39.9) {
                        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} e você está com Obesidade Grau 2</p>`
                    } else if (imc >= 40) {
                        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} e você está com Obesidade Grau 3</p>`
                    }
                    console.log(altura.value);
                    console.log(alturaValue);
                    console.log(imc);
                }
                calculaResultado();
            }
        }
        verificaCampoPreenchido();
            console.log(`${erro.innerHTML}`)
    }

    form.addEventListener('submit', capturaDados)

}
calculaIMC();