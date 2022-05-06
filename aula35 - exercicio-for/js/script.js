const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

//OBS: O node não possui a parte do widow e do dom 
//window, que é o bom: browser object model
//document, dom: document objet model

for (let i = 0; i < elementos.length; i++) {
    console.log(i);

//criar elemento
//criar conteudo
    const container = document.querySelector('.container')
    
    function criaElemento () {
        const element = document.createElement(elementos[i].tag)
        return element
    }

    const element = criaElemento()
    element.innerHTML = elementos[i].texto
    container.appendChild(element)
    console.log(element);
    console.log(elementos[i].tag)
    console.log(elementos[i].texto)
   /*  elementCreator(elementos[i].tag[i])
    const container = document.querySelector('.container');
    container.innerHTML = element
 */
  /*   function elementCreator (par) {
        const element = document.createElement(par)
        console.log(element);
        return element
    } */
}