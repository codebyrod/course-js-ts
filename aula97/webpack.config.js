// vamos configurar nosso webpack
// webpack converte automaticamente nosso código para versões anteriores dependendo do navegador
// Para iniciar cli npm init -y (que já pula muitas etapas)
// vamos instalar um monte de coisinhas
// npm i --save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli regenerator-runtime core-js@2
// precisamos importar o path do node
// depois de criado, precisamos exportar 
// vamos criar um modelo do webpack para a gente sempre reutilizar

// *********
// 1. INSTALAÇÃO
// npm init -y
// npm i --save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli regenerator-runtime core-js@2

//2. GIT IGNORE
// criaremos um arquivo .gitignore para ignorar a pasta node_modules

// SITE WEBPACK
// https://webpack.js.org/

//3. CONFIGURANDO O WEBPACK
// precisamos instalar um módulo do node que chama path
const path = require('path'); //O node usa o sistema de módulos CommonJS

// Todo arquivo javascript no node é um módulo

//4. precisamos exportar coisas para usarmos fora desse módulo
// vamos exportar a configuração do webpack
module.exports = {
    // Qual o modo que a gente está trabalhando? mode
    mode: 'development', //aquivo não é mimificado (tudo numa linha só)

    // Depois de verificar o mode precisamos dizer qual é nosso arquivo de entrada
    // Vamos trabalhar sempre dentro da pasta src
    // teremos outra pasta pública que serão os arquivos gerados pelo webpack (bundle)
    //4.1 Criaremos um arquivo de entrada dentro da pasta src, index.js
    //4.1 Vamos configurar caminho do arquivo de entrada
    entry: './src/index.js',

    //4.2 No output usaremos o path.resolve, que resolverá o caminho pra gente
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },

    // O webpack pode usar o babel se ele quiser
    // 4.4 criando o objeto modules
    module: {

        //4.4.1 teremos regras para cada tipo de aquivo
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },

    //4.3 Esse devtool faz o mapeamento do erro no arquivo original (e não no bundle), o que nos ajuda muito a debugar.
    devtool: 'source-map',
}

// 5. Depois de configurado a gente pode executar nosso script no package.json
// precisaremos de um nome para o script, e usaremos o -w (watch) para as mudanças
    /*"scripts": {
        "gera": "webpack -w"
    }, */

// 6. Vamos executar o script, importante ressaltar que mesmo sem nada no index o bundle é criado
// npm run gera 

// 7. Ctrl + Shift + p => abrir barra de pesquisa: abrir com open live server

// 8. Sempre que editarmos as configurações do webpack, precisaremos reiniciar o script

// 9. No linux tem um comando que permite executar o script por um tempo
    // timeout 30 npm run gera


