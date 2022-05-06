//Date é uma função construtora
// Pra usar Date precisar chamar new Date
// Funções construtoras sempre começam com a primeira letra maiúscula
//link para o objeto date mdn
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

//datas correspondem ao valor de milissegundos desde 01/01/1970. Considerado o marco zero da época unix

/* const data = new Date();
//se executarmos assim o js vai criar um obj com a data atual (dia, mes, ano, hora, segundo e etc.)
console.log(data.toString());

const dataZero = new Date(0);
console.log('Data Zero', dataZero.toString()); // Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)
//importante dizer que não dá certinho por conta do nosso fuso horário que são três horas de diferença

const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000
// setando para nosso fuso horário
const dataInicial = new Date(0 + tresHoras) 
console.log('Data incial', dataInicial.toString()); //Thu Jan 01 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília)

const diaDois = new Date(0 + tresHoras + umDia)
console.log('Dia dois', diaDois.toString()); //Fri Jan 02 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília) */

//PARTINDO PARA ALGO USADO NO MUNDO REAL
/* const data = new Date(2000, 2, 27, 3, 29, 30, 500);
console.log(data.toString()); */

//quando passamos do valor comportado por um dos parâmetros, o js automaticamente acrescenta esse valor a proxima casa de valor. Por exemplo, segundo vai só até 60. Se passamos 70, js retorna 1min e 10 segundos. Somando o minutos às casas de minutos que já eistirem.

//quando omitimos um valor ele zera aquele valor específico
//const data = new Date(2022, 3); //Fri Apr 01 2022

//mês começa do índice 0

//DATA STRING
/* const data = new Date('2019-04-20 20:20:59.500'); //colocamos o mês real pq é uma string
console.log('Dia', data.getDate()); 
console.log('Mês', data.getMonth() + 1); //somando pq o índice começa com zero
console.log('Ano', data.getFullYear()); 
console.log('Hora', data.getHours()); 
console.log('Min', data.getMinutes()); 
console.log('Seg', data.getSeconds()); 
console.log('ms', data.getMilliseconds()); 
console.log('Dia da semana', data.getDay()); // 0 é Domingo, 6 - Sábado
console.log();
console.log(data.toString());
console.log(Date.now()); // marco zero 01/01/1970
 */

/* const dataAgora = new Date(Date.now());
console.log('Data de agora', dataAgora.toString());
 */
function zeroAEsquerda (num) {
    return (num >= 10 ? num : `0${num}`)
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
