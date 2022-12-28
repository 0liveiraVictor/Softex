const express = require('express'); //importação do módulo 'express'
const cookieParser = require('cookie-parser');  //importação do pacote 'cookie-parser'
const cors = require('cors');   //importação do pacote 'cors'

const routes = require('./routes/router');  //importação do arquivo 'router.js'

const serverPort = 8080;    //configuração da porta do servidor

const appServer = express();    //variável da aplicação (configuração do 'server')
appServer.use(cookieParser());  //uso do 'cookie-parser' na aplicação
appServer.use(cors());  //uso do 'cors' na aplicação
appServer.use(express.json());  //configurando o servidor para que requisições possam ser interpretadas como JSON
appServer.use(routes);  //inscrição das rotas no 'server' da aplicação

//conexão de acesso ao servidor
appServer.listen(serverPort, () => {

    //impressão no console da "ligação" do servidor
    console.log('------------------------------------------------------------------------------');
    console.log('Conexão com servidor inicializada com sucesso!');
    console.log(`URL do serviço: localhost:${serverPort}`);
    console.log('------------------------------------------------------------------------------');

});