//importação da biblioteca 'http' do nodejs
const {createServer} = require("http");

//variável principal do servidor
const server = createServer();

//configuração da porta de acesso do servidor
const portAcess = process.env.PORT || 4004;

//'listener' para qualquer requisição web do servidor | resultado: resposta!
server.on("request", (request, response)=>{

    //resposta da solicitação realizada
    response.end("<<< Resposta para a requisição solicitada pelo cliente! >>>")

});

server.listen(portAcess, ()=>{

    //impressão no console da execução do servidor
    console.log(`-------------------------------------------------------------------------------------`); 
    console.log(`A inicialização do servidor foi executada na porta ${portAcess}.`);
    console.log(`http://localhost:${portAcess}`);
    console.log(`-------------------------------------------------------------------------------------`);

});