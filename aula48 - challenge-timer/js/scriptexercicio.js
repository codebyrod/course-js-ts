const clock = document.querySelector('.clock');

function createSeconds (sec) {
    const data = new Date (sec * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

let seconds = 0;
let timer;

function startCouting () {
    timer = setInterval(function() {
        seconds++;
        clock.innerHTML = createSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', function(e){
    const element = e.target;

    if(element.classList.contains('iniciar')){
        clock.classList.remove('pausado')
        clearInterval(timer);
        startCouting();
    }
    
    if(element.classList.contains('pausar')){
        clearInterval(timer);
        clock.classList.add('pausado')
    }
    
    if(element.classList.contains('zerar')){
        clock.classList.remove('pausado')
        clearInterval(timer);
        seconds = 0;
        clock.innerHTML = '00:00:00'
    }
});

/* 
iniciar.addEventListener('click', function(){
    clearInterval(timer);
    startCouting();
});

pausar.addEventListener('click', function(){
    clearInterval(timer);
});

zerar.addEventListener('click', function(){
    clearInterval(timer);
    seconds = 0;
    clock.innerHTML = '00:00:00';
});
 */