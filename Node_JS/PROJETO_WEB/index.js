const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

const portAcess = 8080;

let livros = [];

server.use(cors());
server.use(bodyParser.urlencoded({extend: false}));
server.use(bodyParser.json());

server.get('/book', (require, response)=>{

    response.send(livros);

});

server.post('/book', (require, response)=>{

    const livro = require.body;

    console.log(livro);
    livros.push(livro);

    response.send('O livro foi inserido com sucesso!');

});

server.listen(portAcess, ()=>{

    console.log(`-------------------------------------------------------------------------------------`); 
    console.log(`A inicialização do servidor foi executada na porta ${portAcess}.`);
    console.log(`URL: http://localhost:${portAcess}`);
    console.log(`-------------------------------------------------------------------------------------`);

});