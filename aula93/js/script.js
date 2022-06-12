// AJAX - Asynchronous JavaScript And XML
// Não tem como falar de Javascript assíncrono sem falar de Requisição assíncrona

// 1. Vamos criar uma função usando XMLHttpRequest (Ajax)
// 2. Essa função pode fazer requisição de qualquer tipo de dado (Json, xml, txt puro)

// 3. Vamos criar uma função chamada request para fazer request. Vamos guardar essa função em uma const.
// 4. Essa função vai receber um objeto como parametro
/* const request = obj => {

    // 5. Vamos criar uma const xhr, que significa XMLHttpRquest, nome padrão
    // 6. Estamos usando o constructor da função
    const xhr = new XMLHttpRequest();

    // 7. iremos usar um verbo http (importante conhecer esses verbos), o verbo que vamos utilizar também é chamado de método. Get é um método padrão para requisição web.
    // 7.1 dentro de open mandariamos 1.get; 2.url; 3. assincrono (true), ou ser sincrono (false)
    xhr.open('GET', 'URL', true);

    // 7.2 aqui vamos usar métodos do obj/parâmetro
    xhr.open(obj.method, obj.url, true);

    // 7.3 Se fosse um post teriamos que mandar aqui um send, nesse caso não vamos precisar, por isso vamos fazer um get
    xhr.send();

    // 8. Agora iremos ver quando essa requisição foi concluída
    // 8.1 na execução desse evento já teremos uma resposta
    // Ler mais sobre códigos http
    // 8.3 De 200 a 300, vamos considerar como sucesso, acima de 300 vamos considerar que não deu certo
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){

            // 8.4 iremos fazer uma função de callbac, depois a gente converte para promise
            // 8.5 função de callback de sucesso
            obj.sucess(xhr.responseText)
        } else {
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            })
        }
    })

}; */

// 9. criamos links entre as páginas
// 9.1 como comportamento padrão, ao clicarmos em um link ele carrega a página clicada. Para este estudo queremos mudar esse comportamento padrão. A ideia é, ao clicar no link não fazer nada, e fazer o javascript carregar esse HTml ejogar dentro de algum componente aqui na página
// 9.2 Vamos criar no Html uma div pra receber um component

// 10 Vamos adicionar um evento de clique no document todo, uma vez que não é uma boa prática adicionar muitos eventos 
/* document.addEventListener('click', e => {

    // 10. 1 vamos criar uma const que recebe o alvo do clique
    const el = e.target;

    // 10.2 vamos criar uma const com a tag do local que foi clicado
    const tag = el.tagName.toLowerCase();

    // 10.3 uma condição, caso seja a tag a que foi clicada, executa a função carrega página
    if(tag === 'a') {

        // 10.3.1 prevenindo o evento padrão
        e.preventDefault();
        carregaPagina(el);
        carregaPagina2(el);
    }
}) */

// 11. criando a função  
/* function carregaPagina(el) {

    // 11.1 vamos pegar o href
    const href = el.getAttribute('href');

    // 11.2 demonstrando que o href está sendo capturado
    console.log(href);

    // 11.3 Agora tendo o link podemos carregar a página via AJAX ali
    // 11.4 método de requisitação
    request({
        method: 'GET',
        url: href,

        // 11.4.1 Se o nosso sucess deu certo, ele vai executar a função carregaResultado
        sucess(response) {
            carregaResultado(response);
        },

        // 11.4.2 se deu errado, ele vai dar um console.log no errorText
        error(errorText) {
            console.log(errorText);
        }
    })
} */

// 12. Função de carregar resultado, a função insere o arquivo que foi clicado, dentro do innerHtml da div que tem a classe resultado
/* function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
} */

// 13. Aba Network do depurador web
// Cada vez que fazemos uma requisição temos um type (na header da coluna), o type indica qual é o tipo da requisição, retorna xhr, que é o famoso AJAX.

// 14. Resumindo tudo:
// 14.1 - Criamos uma função request (que recebia um parâmetro obj) que vai ter um xhr
// 14.2 - Usamos o constructor do XMLHttpRequest dentro da const xhr
// 14.2 - Depois mandamos um .open(), que vai conter um obj.method (que é o obj do parâmetro), 

// USANDO PROMISE
/* const request2 = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        })
    })
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a') {
        e.preventDefault();
        carregaPagina2(el);
    }
})

function carregaPagina2(el) {
    const href = el.getAttribute('href');
    console.log(href);
    request2({
        method: 'GET',
        url: href
    })
    .then(response => carregaResultado2(response))
    .catch(error => console.log(error))
}

function carregaResultado2(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
} */

// USANDO PROMISE, ASYNC AWAIT e TRY CATCH
const request3 = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                })
            }
        })
    })
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a') {
        e.preventDefault();
        carregaPagina3(el);
    }
})

async function carregaPagina3(el) {
    const href = el.getAttribute('href');
    console.log(href);
    const objConfig = {
        method: 'GET',
            url: href
    }

    try{
        const response = await request3(objConfig);
        carregaResultado3(response);
    } catch(e) {
        console.log(e.msg);
    }
}

function carregaResultado3(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// Na vida real utilizamos pouco esse Ajax pq é muito verboso, usamos muito mais Axios
