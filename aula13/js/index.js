

const nome = prompt('Digite seu nome completo')
document.body.innerHTML += `Seu nome é <strong>${nome}</strong> <br />`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é <strong>${nome[1]}</strong> <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra "A" no seu nome é <strong>${nome.search('a')}</strong> <br />`; //dá pra usar indexOf também
document.body.innerHTML += `O último índice da letra "O" no seu nome é <strong>${nome.lastIndexOf('o')}</strong> <br />`;
document.body.innerHTML += `As últimas três letras do seu nome são <strong>${nome.slice(-3)}</strong> <br />`;
//document.body.innerHTML += `As letras do seu nome são: <strong>${nome.match(/[a - z]/g)}</strong> <br />`;
//document.body.innerHTML += `As letras do seu nome são: <strong>${nome.match(/[a - z]/)}</strong> <br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas <strong>${nome.toUpperCase()}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas <strong>${nome.toLowerCase()}</strong> <br />`;

