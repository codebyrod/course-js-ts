function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.result')
    // console.log(form)

   /*  const resultado = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
        ERRADO DESSE JEITO
    } */

   /*  form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado');
    }; */

    const pessoas = [];
    let contador = 1
    function recebeEventoForm (event){
        event.preventDefault();
        const nome = document.querySelector('.nome')
        const sobrenome = document.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + `${peso.value} ${altura.value}</p>`

        // console.log(nome.value, sobrenome.value, peso.value, altura.value)

        /* 
        MINHA SOLUÇÃO, NÃO DEU TÃO ERRADO ASSIM
        const resultado = [nome.value, sobrenome.value, peso.value, altura.value]
        contador++; */

        /* 
        MINHA SOLUÇÃO
        document.querySelector('.resultado').innerHTML += `${resultado}  ${contador} <br/>`*/
        console.log(resultado)
    }

    /* const resultado = {[...nome], [...sobrenome], [...peso], [...altura]} 
    ERRADO
    */

    form.addEventListener('submit', recebeEventoForm)
    
}
meuEscopo();

