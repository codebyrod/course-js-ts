const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limparInput();
})

function criaTarefa(texto){
    const li = document.createElement('li');
    li.innerText = texto;
    tarefas.appendChild(li);
    //console.log(tarefas);
    criaBotaoApagar(li);
}

function limparInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        //console.log(e.keyCode);
        criaTarefa(inputTarefa.value);
        limparInput();
    }
})

function criaBotaoApagar(li){
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
    //console.log(li);
}

document.addEventListener('click', function(e){
    const el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }
})