//carregando o módulo 'express' instalado
const express = require('express');

//definindo uma instância para a variável 'conn' a partir da função de criação do módulo 'express' ('express()')
const conn = express();

//rota principal da aplicação (exibe apenas o sucesso de conexão cliente-servidor) - método 'get'
conn.get('/', function(request, response){

    return response.send("<h1>Conexão Cliente-Servidor estabelecida com sucesso!</h1>");

});

//rota secundária da aplicação com uso de parâmetros (obtendo dados do cliente a partir de requisições) - método 'get'
conn.get('/softex/:nome/:profissao', function(request, response){

    return response.send("<h1>---------- Bem-Vindo a Softex Recife ----------</h1>" + "<h2>Oi, " + request.params.nome + ".</h2>" + "<h2>Você está trabalhando com " + request.params.profissao + ".</2>" + "<h2>Sucesso!</h2>" + "<h1>---------------------------------------------------------</h1>");

});

//número da porta de conexão -> http://localhost:9811
conn.listen(9811, function(){

    console.log("\n----------------------------------------------------------------------------------------");
    console.log("\nServidor conectado ... ");
    console.log("\nURL: http://localhost:9811");
    console.log("\n----------------------------------------------------------------------------------------");

});