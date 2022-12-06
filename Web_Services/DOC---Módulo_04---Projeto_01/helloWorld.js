const express = require('express'); //importação da biblioteca 'express'
const app = express(); //variável principal da aplicação
const portAcess = 1728; //definição da porta de acesso do servidor

// ------------------------------ Rota 'get' para 'Hello World' ------------------------------
app.get('/', (request, response)=>{

    //retorno da solicitação efetuada na requisição cliente
    return response.send('<h3>Hello World</h3>')

});

// ------------------------------ Acesso à conexão ------------------------------
//conexão de acesso ao servidor
app.listen(portAcess, ()=>{

    //impressão no console da "ligação" do servidor
    console.log('-------------------------------------------------------------------------------------'); 
    console.log(`A inicialização do servidor foi executada na porta ${portAcess}.`);
    console.log(`URL: http://localhost:${portAcess}`);
    console.log('-------------------------------------------------------------------------------------');

});
