const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//CAPTURANDO A AÇÃO COM CLIQUE
btnTarefa.addEventListener('click', function(){
    /* if (inputTarefa.value !== '') return console.log('tem algo aqui'); */
    //como estamos usando uma negação para verificar o valor, podemos checar invertido
   /* if (inputTarefa.value) return console.log(inputTarefa.value); */
   //o código acima tá dizendo: se tiver algo, retorna esse algo no console

   //VERIFICANDO INVERTIDO
    if (!inputTarefa.value) return;

    //FUNÇÃO DE CRIAR TAREFAS
    criaTarefa(inputTarefa.value);
})

//CAPTURANDO O EVENTO DO ENTER
inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
     if (!inputTarefa.value) return;
     criaTarefa(inputTarefa.value);
    }
 })

//FUNÇÃO DE CRIAR TAREFAS
//recebe o valor do input como parâmetro
//cria um li
//insere o texto do parâmetro dentro do li
//insere o li dentro da ul
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    limpaInput();
    salvaTarefas();
}

//FUNÇÃO QUE CRIA OS LI'S (item de lista)
function criaLi() {
    const li = document.createElement('li');
    return li;
}

//FUNÇÃO QUE LIMPA O INPUT E VOLTA O FOCO PRA ELE
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus(); //o Js vai jogar o foco pra caixa de input depois de limparmos o input
}

//FUNCTION QUE CRIA O BOTAO APAGAR DAS TAREFAS
function criaBotaoApagar(li){
   li.innerText += ' ';
   const botaoApagar = document.createElement('button');
   botaoApagar.innerText = 'Apagar';
   botaoApagar.setAttribute('class', 'apagar'); //seta qualquer atribuito, class, href, title
   li.appendChild(botaoApagar);
}

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvaTarefas();
    }

})

function salvaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        //esse .trim() é para remover espaços sobrando nas pontas
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    //No localStorage só podemos passar string, por isso que convertemos em string
    console.log(tarefasJSON);
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

addTarefasSalvas()