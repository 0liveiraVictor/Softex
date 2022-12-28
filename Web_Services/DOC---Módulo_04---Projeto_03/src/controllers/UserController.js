const dbLista = require('../database/db.js');   //importação do arquivo 'db.js'
const falso = require('@ngneat/falso'); //importação do pacote 'falso'

module.exports = {
    
    //--------------------- método de visualização da rota raiz ---------------------
    async index(request, response){

        try{
            
            return response.status(200).send('<h1>--- ROTA RAIZ DO PROJETO DE UMA API SIMPLES ---</h1>' + '</br></br><h2>* Use a rota "/user/add" (HTTP POST) para criar (automaticamente) dados de um novo usuário.</h2>' + '<h2>* Use a rota "/user/list" (HTTP GET) para listar os dados de todos os usuários já existentes.</h2>' + '<h2>* Use a rota "/user/{nº}" (HTTP GET) para buscar os dados de um usuário, em específico, já existente.</h2>');

        } catch(error){

            return response.status(400).send(`Error: ${error}`);

        }

    },

    //--------------------- método de armazemanto de dados de um novo usuário --------------------- 
    async store(request, response){

        try{

            const user = ({

                id: dbLista.length + 1,
                fullName: falso.randFullName(),
                address: falso.randAddress(),
                username: falso.randUserName(),
                email: falso.randEmail()

            });

            dbLista.push(user);
            
            return response.status(201).json({

                Status: 'Usuário criado com sucesso!',
                User_add: user
                
            });

        } catch(error){

            return response.status(400).send(`Error: ${error}`);

        }

    },

    //--------------------- método de visualização dos dados de todos os usuários ---------------------
    async findAll(request, response){

        try{
            
            return response.status(200).json({

                Status: 'Registro de usuários encontrado com sucesso!',
                User_all: dbLista

            });
            
        } catch(error){

            return response.status(400).send(`Error: ${error}`);

        }

    },

    //--------------------- método de visualização de dados de um usuário em específico (pelo identificador 'id') --------------------- 
    async findId(request, response){

        try{

            const id = request.params.id;

            if(id <= 0 || id > dbLista.length){

                return response.status(404).send('<h3>Usuário não registrado!</h3>');

            } else{

                const user = dbLista[id - 1];

                return response.status(200).json({

                    Status:`Usuário ({id} = {${id}}) encontrado com sucesso!`,
                    User_id: user

                });

            }     
            
        } catch(error){

            return response.status(400).send(`Error: ${error}`);

        }

    }

};