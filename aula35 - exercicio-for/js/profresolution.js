const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'}
];
const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    /* 
    //Podemos substituir o innerHTML pelo innerText por dois motivos
    //1. mais seguro
    //2. estamos apenas inserindo texto
    //tagCriada.innerHTML = texto;
    //tagCriada.innerText = texto 
    */
    //Podemos inserir um Nó de Texto (NodeText)
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada);
}
container.appendChild(div);
