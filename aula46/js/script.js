/* try {
    // É executada quando não há erros
} catch (err) {
    // É executada quando há erros
} finally {
    //É executado sempre
} */
/* 
try {
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e gerou erro');
    console.log('Fechei um arquivo');
} catch (err) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
} */
//Abri um arquivo
//Manipulei um arquivo e gerou erro
//Fechei um arquivo
//FINALLY: Eu sempre sou executado

/* try {
    console.log(a); //ERRO
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e gerou erro');
    console.log('Fechei um arquivo');
} catch (err) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
} */
//Tratando o erro
//FINALLY: Eu sempre sou executado

//FINALLY é um recurso try-catch que sempre vai ser executado

/* try {
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e gerou erro');
    console.log('Fechei um arquivo');

    //Try dentro de try
    try {
        console.log(b);
    } catch (err) {
        console.log('Deu erro');
    } finally {
        console.log('VOCÊ SEMPRE PODE CONTAR COMIGO');
    }

} catch (err) {
    console.log('Tratando o erro');
} finally {
    console.log('FINALLY: Eu sempre sou executado');
} */

//Vamos fazer uma função que retorna a hora atual
function retornaHora(data) {
// Dica do professor: quando se está dentro da função, 
// checar invertido p não precisar usar o else
    if(data && !(data instanceof Date)) { 
        //verificando se foi enviada a data
        //verificando se o parâmetro é uma instância do Objeto Date
    //    console.log('Não é');
    //Agora vamos lançar o erro
        throw new TypeError('Esperando instância de Date.')
    }

    //Caso não tenha sido enviado uma data, ele cria uma data pra gente
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}

//retornaHora(11);

//Só vai ser instancia de Date os objetos que criamos com new Date()
retornaHora(new Date());

try{
    const hora = retornaHora();
    console.log(hora);
} catch(e){
    //Tratar erro
    console.log('insira um objeto Date, ou deixe vazio para gerar a hora atual');
} finally {
    console.log('Tenha um bom dia.');
}
