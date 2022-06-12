// FETCH API (GET)

// USANDO PROMISE, ASYNC AWAIT e TRY CATCH

// 3. Não precisamos mais dessa função de request pq com fetch api ele já faz esse request de promise
/* const request3 = obj => {
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
}; */


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

// 4. Vamos usar essa função normal, limpamos o obj, o async/await e o try/catch
// 4.1 depois passamos para async/await para não confundir
/* function carregaPagina(el) {
    const href = el.getAttribute('href');
    fetch(href)
        .then(response => {
            if(response.status !== 200) throw new Error('ERRO 404!');
            return response.text();
        })
        .then(html => carregaResultado(html))
        .catch(e => console.log(e));
} */

// 5. Aplicaremos async/await na função carregaPagina();
async function carregaPagina(el) {
    try{
    const href = el.getAttribute('href');
    const response = await fetch(href);
    if(response.status !== 200) throw new Error('ERRO 404!');
    const html = await response.text();
    carregaResultado(html);
    } catch(e){
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


// 1. Vamos fazer um exemplo de como seria o fetch API
// 1.1 Aqui estamos usando um arquivo, mas poderia tambem ser uma url
// 1.2 O fetch já retorna uma promisse, ao retornar uma promise podemos usar um then e catch aqui mesmo

/* fetch('pagina1.html')
    .then( resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');

        // 1.3 os dados não vem prontos, precisamos converter nossos dados de acordo com o uso final que faremos com ele, como sabemos que viráum html, podemos converter para texto
        //1.4 essa função também retorna uma promise.
        return resposta.text(); 
    })
    // Precisamos chamar outro .then() para receber essa promise
    .then(html => console.log(html)) //o return do then está sendo setado no console.log
    .catch(e => console.log(e)); */

// 2. E se pedissémos uma página que não existe?
/* fetch('pagina4.html')
    .then( resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text(); 
    })
    .then(html => console.log(html))
    // .catch(e => console.error(e)) // 2.1 Usando console.error o erro vai aparecer vermelho
    // .catch(e => console.warn(e)) // 2.2 Usando console.warn o erro vai aparecer amarelinho
    .catch(e => console.log(e)); */
