const express = require('express'); //importação do módulo 'express'
const routes = require('./routes/router.js');   //importação do arquivo 'router.js'

const cookieParser = require('cookie-parser');  //importação do pacote 'cookie-parser'
const cors = require('cors');   //importação do pacote 'cors'

require('./database/index.js'); //importação do banco de dados para o servidor

const serverPort = 1044;    //configuração da porta do servidor

const app = express();  //variável da aplicação (configuração do 'server')

app.use(cookieParser());    //uso do 'cookie-parser' na aplicação
app.use(cors());    //uso do 'cors' na aplicação
app.use(express.json());    //configurando o servidor para que requisições possam ser interpretadas como JSON
app.use(routes);    //inscrição das rotas no 'server' da aplicação

//conexão de acesso ao servidor
app.listen(serverPort, () => {

    //impressão no console da "ligação" do servidor
    console.log('-------------------------------------------------------------------');
    console.log(`Servidor inicializado! | Execução na porta: ${serverPort}.`);
    console.log(`URL: localhost:${serverPort}`);
    console.log('-------------------------------------------------------------------');

});