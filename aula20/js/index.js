function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.result')
    const erro = document.querySelector('.erro')

    function recebeDados(e){
        e.preventDefault();

        const nome = document.querySelector('.nome')
        const sobrenome = document.querySelector('.sobrenome')
        const peso = document.querySelector('.peso')
        const altura = document.querySelector('.altura')

        if(nome.value !== "" & sobrenome.value !== "" & peso.value !== "" & altura.value !== ""){
            console.log(nome.value, sobrenome.value, peso.value, altura.value)
            resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<br/></p>`

            nome.value = ''
            sobrenome.value = ''
            peso.value = ''
            altura.value = ''
        } else{
            erro.innerHTML = `<p>Preencha TODOS os campos</p>`
        }
    }

    form.addEventListener('submit', recebeDados)

}

meuEscopo();