// FETCH API E AXIOS (JSON)
// 1. Axios é muito similar ao fetch api, também retorna promises, e nesse caso ele é até mais simples, pq ele tem um passo a menos.

// 2. USANDO FETCH API
/* fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json)); */

/* function carregaElementosNaPagina(json) {
    const resultado = document.querySelector('.resultado');
    const table = document.createElement('table');
    resultado.appendChild(table);
    for(let pessoa of json) {
        
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr)
    }
} */

// 3. USANDO AXIOS
// Link para o link da axios -> https://github.com/axios/axios
// 3.1 tem várias formas de pegar, mas por enquanto vamos usar unpkg cdn, vamos colocar no html esse link
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// 3.2 Ao fazermos isso já temos acesso ao axios dentro do nosso script

// 4. USANDO AXIOS
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const resultado = document.querySelector('.resultado');
    const table = document.createElement('table');
    resultado.appendChild(table);
    for(let pessoa of json) {
        
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        /* const td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3); */

        table.appendChild(tr)
    }
}

// Curiosidade. No type do network
// fetch usa type fetch
// axios usa type xhr