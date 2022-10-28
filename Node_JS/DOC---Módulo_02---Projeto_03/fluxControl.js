//importação da biblioteca 'express'
const express = require("express");

//variável principal do servidor
const server = express();

//definição da porta de acesso do servidor
const portAcess = 9924;

//requisição 'get' estática
server.get('/meusite', (request, response)=>{

    //resposta da solicitação requisitada pelo cliente
    response.send("<h1>Bem-Vindo(a) a Página Inicial</h1>" + "<h2>Você está na rota principal do meu site</h2>" + "<h3><<< Tudo sobre tecnologia você encontra aqui! >>></h3>");

});

//requisição 'get' dinâmica com uso de 'placeholder'
server.get('/meusite/:language/:framework', (request, response)=>{

    const lang = request.params.language;
    const frame = request.params.framework;

    //resposta da solicitação requisitada pelo cliente
    response.send("<h1>Bem-Vindo(a) a Página de Tecnologias</h1>"  + `<h2>Sua linguagem de preferência é: ${lang}</h2>` + `<h2>Seu framework de preferência é: ${frame}</h2>`);

});

//requisição 'get' dinâmica com uso de 'query'
server.get('/meusite/backend_nodejs', (request, response)=>{

    const verLang = request.query.versionLang;
    const verFrame = request.query.versionFrame;

    //resposta da solicitação requisitada pelo cliente
    response.send("<h1>Bem-Vindo(a) a Página de Tecnologias JavaScript e NodeJS</h1>"  + `<h2>Versão da linguagem JavaScript: ${verLang}</h2>` + `<h2>Versão do framework NodeJS: ${verFrame}</h2>`);

});

//conexão de acesso ao servidor
server.listen(portAcess, ()=>{

    //impressão no console da "ligação" do servidor
    console.log(`-------------------------------------------------------------------------------------`); 
    console.log(`A inicialização do servidor foi executada na porta ${portAcess}.`);
    console.log(`URL: http://localhost:${portAcess}`);
    console.log(`-------------------------------------------------------------------------------------`);

});