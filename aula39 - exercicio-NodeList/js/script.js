//Queremos pegar todos os elementos p dentro da classe paragrafos
//Esse modelo de querySelector só pega o primeiro elemento
const paragrafos = document.querySelector('.paragrafos');

//tentei criar um style interno, mas percebi que era melhor estilo inline
/* const header = document.querySelector('head');
const style = document.createElement('style');
header.appendChild(style); */

//para pegar todos os p dentro do paragrafos precisamos do queryselectorall
const ps = paragrafos.querySelectorAll('p');

//NodeList != Array, embora se comporte de maneira extremamente similar ao arry
//API do Browser, podemos usar as coisas do array para iterar o array (fo, in e of)

//Estamos pegando o valor de dentro do body
//Estamos usando a função getComputedStyle para pegar o valor de algum estilo
const bodyStyle = getComputedStyle(document.body);
const backgroundColorBody = bodyStyle.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}