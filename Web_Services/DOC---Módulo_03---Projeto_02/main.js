const express = require('express'); //importação do módulo 'express'
const cors = require('cors'); //importação do módulo 'cors'
const bodyParser = require('body-parser'); //importação do módulo 'body-parser'

const app = express(); //variável principal da aplicação
app.use(bodyParser.json()); //configurando o servidor para que o body ('body-parser') das requisições seja interpretado como JSON
app.use(cors()); //configurando o servidor para uso do 'cors'

const port = 4141; //definição da porta de acesso do servidor

const lista = []; //definindo um banco de dados como sendo um array 'lista'

// ------------------------------ C r u d  CREATE com a requisição HTTP POST ------------------------------

// *********** envio de dados **********
app.post('/student/add', (request, response)=>{

    try{
            
        let position = lista.length + 1; //valor da posição (índice + 1) atual do banco de dados
        let student = request.body; //recebendo os dados do estudante a partir do corpo da requisição
        student.id = position; //atribuição da posição 'id' do estudante no banco de dados
        lista.push(student); //adicionando os dados do estudante no banco de dados

        //resposta da solicitação requisitada pelo cliente
        return response.status(201).json({

            Status: 'Estudante registrado com sucesso!',
            Student_add: student

        });

    } catch(erro){
        
        return response.status(400).send(`Erro: ${erro}`);

    }

});

// ------------------------------ c R u d  READ com a requisição HTTP GET ------------------------------

// *********** visualização de todos os dados ********** 
app.get('/students', (request, response)=>{

    try{
            
        if(lista.length == 0){
    
            //resposta da solicitação requisitada pelo cliente
            return response.status(404).send('<h2>Sem registros de dados dos estudantes!</h2>');
    
        } else{
    
            //resposta da solicitação requisitada pelo cliente
            return response.status(200).json({
                
                Status: 'Registros dos estudantes encontrados!',
                Students_all: lista
            
            });
    
        }

    } catch(erro){
        
        return response.status(400).send(`Erro: ${erro}`);

    }

});

// *********** visualização de dados por identificadores ('position') ********** 
app.get('/student/:position', (request, response)=>{

    try{

        let id = request.params.position; //identificador 'id'
    
        if(id > 0 && id <= lista.length){
    
            //resposta da solicitação requisitada pelo cliente caso a posição seja encontrada
            return response.status(200).json({
    
                Status: `Estudante encontrado! | Registro: ${id}ª posição.`,
                Student_id: lista[id-1]
    
            });
    
        } else if(id <= 0 || id > lista.length){
    
            //resposta da solicitação requisitada pelo cliente caso a posição NÃO seja encontrada
            return response.status(404).send('<h2>Estudante não encontrado!</h2>');
    
        }

    } catch (erro){

        return response.status(400).send(`Erro: ${erro}`);

    }

});

// ------------------------------ c r U d  UPDATE com a requisição HTTP PUT ------------------------------

// *********** atualização de dados por identificadores ('position') **********
app.put('/student/edit/:position', (request, response)=>{

    try{
    
        let id = request.params.position; //identificador 'id'   
    
        if(id > 0 && id <= lista.length){
    
            let student = request.body; //recebendo os novos dados do estudante a partir do corpo da requisição
            student.id = parseInt(id); //atribuição da posição 'id' do estudante no banco de dados
            lista[id-1] = student; //atualizando os novos dados do estudante no banco de dados
    
            //resposta da solicitação requisitada pelo cliente caso a posição seja encontrada
            return response.status(200).json({
    
                Status: `${id}º estudante atualizado com sucesso!`,
                newStudent_id: lista[id-1]
    
            });
    
        } else if(id <= 0 || id > lista.length){
    
            //resposta da solicitação requisitada pelo cliente caso a posição NÃO seja encontrada
            return response.status(404).send('<h2>Estudante não encontrado!</h2>' + '<h2>Atualização não realizada!</h2>');
    
        }

    } catch (erro){

        return response.status(400).send(`Erro: ${erro}`);

    }

});

// ------------------------------ c r u D  DELETE com a requisição HTTP DELETE ------------------------------

// *********** deleção de dados **********
app.delete('/student/del/:position', (request, response)=>{

    try{

        let id = request.params.position; //identificador 'id'   
    
        if(id > 0 && id <= lista.length){
    
            lista.splice(id-1, 1); //removendo os dados do estudante a partir da requisição solicitada pelo cliente
    
            //resposta da solicitação requisitada pelo cliente caso a posição seja encontrada
            return response.status(200).json({
    
                Status: `Estudante deletado com sucesso!`,
                Student_all: lista
    
            });
    
        } else if(id <= 0 || id > lista.length){
    
            //resposta da solicitação requisitada pelo cliente caso a posição NÃO seja encontrada
            return response.status(404).send('<h2>Estudante não encontrado!</h2>' + '<h2>Deleção não realizada!</h2>');
    
        }

    } catch (erro){

        return response.status(400).send(`Erro: ${erro}`);

    }

});

// ------------------------------ Tratamento de erros com a requisição HTTP ALL ------------------------------

// *********** endpoint **********
app.all('*', (request, response)=>{

    //resposta ao cliente caso haja erro de sintaxe na solicitação da requisição
    return response.status(404).send('<h2>Página não encontrada!</h2>');

});

// ------------------------------ Acesso à conexão ------------------------------

//conexão de acesso ao servidor
app.listen(port, ()=>{

    //impressão no console da "ligação" do servidor
    console.log('-------------------------------------------------------------------------------------'); 
    console.log(`A inicialização do servidor foi executada na porta ${port}.`);
    console.log(`URL: http://localhost:${port}`);
    console.log('-------------------------------------------------------------------------------------');

});