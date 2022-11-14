const clock = document.querySelector('.clock');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function createSeconds (sec) {
    const seconds = new Date (sec * 1000); //Estamos multiplicando por mil newDate recebe milisegudnos
    let teste =  seconds.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' //Estamos usando TimeZone UTC para fixar o time da nossa localidade
    })
    console.log(teste);
    return teste    
}



function iniciaRelogio() {
    let segundos = 0;
    let timer;
    
    
    timer = setInterval(function() {
    segundos++;
    clock.innerHTML = createSeconds(segundos)
    }, 1000);
}

document.addEventListener('click', function(e) {
    const element = e.target;
    if (element.classList.contains('iniciar')) {
        
        clock.classList.remove('pausado');
        clearInterval(timer); //impedir que mais de um timer esteja rodando junto.
        iniciaRelogio();
    }
    
    if (element.classList.contains('pausar')) {
        clearInterval(timer);
        clock.classList.add('pausado');
    }
    
    if (element.classList.contains('pausar')) {
        clock.classList.remove('pausado');
        clearInterval(timer);
        segundos = 0;
        clock.innerHTML = '00:00:00';
    }
})

//TAMBÉM TEM ESSA FORMA AQUI ABAIXO, QUE TAMBÉM FUNCIONA, MAS SEGUNDO O PROFESSOR ESSA ESTRUTURA COM IFS ECONOMIZARIA RECURSOS DA NOSSA MÁQUINA
/* iniciar.addEventListener('click', function(e) {
    clock.classList.remove('pausado');
    clearInterval(timer); //impedir que mais de um timer esteja rodando junto.
    iniciaRelogio();
})

pausar.addEventListener('click', function(e) {
    clearInterval(timer);
    clock.classList.add('pausado');
})

zerar.addEventListener('click', function(e) {
    clock.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    clock.innerHTML = '00:00:00'
}) */