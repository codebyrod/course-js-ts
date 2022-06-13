"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Aula 104 - Sobre as ferramentas nesta seção
// Webpack e babel raramente são usadas diretamente como vamos aprender nessa mesma seção.
// create-react-app configura muitas outras coisas para a gente (webpack, babel, jest [para testes])
// Parte de módulos é muito importante
// BABEL E "CAN I USE"
// Compatibilidade de nossos cógidos com navegadores
// Alguns recursos mais avançados do ECMAScript pode não ser suportador por algun navegadores 
// site "can i use": https://caniuse.com/
//BABEL é um compilador, tradutor de código, de versões mais recentes, para versões mais antigas
// site: https://babeljs.io/
// Essa aula é só pra entender como o babel funciona, não usaremos o babel, usaremos o webpack, mas o webpack usa o babel
// Vamos entrar na pasta do projeto via terminal (no caso aula 96)
// e vamos digitar: npm init -y
// Será criado um arquivo package.json
// Será esse aquivo que gerenciará quais os pacotes do node que precisaremos aqui
// estaremos instalando o babel via terminal:
// npm install --save-dev @babel/cli @babel/preset-env @babel/core
// Ao instalarmos o babel, ele instalou no nosso projeto a pasta node_modules e o arquivo package-lock.json
// Criamos um .gitignore e dentro do arquivo colocamos a pasta que ele tem que ignorar, no caso, node_modules, assim mesmo, só o nome.
// 1. Agora vamos passar os mesmo comandos no teste que fizemos no babel, aqui

/* const nome = 'Luiz';
const obj = {nome};
const novoObj = { ...obj };
console.log(novoObj); */
// 2. Agora vamos falar para o babel transformar esse nosso script em um script menos moderno
// vamos digitar no terminal: (nome do arquivo de origin ou caminho, nome do arquivo de saída bundle.js)
// npx babel script.js -o bundle.js --presets=@babel/env
// 3. Será criado um arquivo com uma compatibilidade em todos os navegadores
// 4. Toda vez que alterarmos o arquivo precisaremos executar novamente o comando. 
// 5. Podemos setar uma forma automática para que o json faça isso pra gente.
// "babel": "babel ./js/script.js -o ./bundle.js --presets=@babel/env -w"
// 6. Ao adicionarmos essa linha de comando no package.json com a flag -w no final estamos pedindo ao arquivo para que ele fique observando as mudanças
// 7. Agora iremos executar no terminal o arquivo
// no terminal: npm run babel
// 8. Vamos setar uma nova classe
var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
});
