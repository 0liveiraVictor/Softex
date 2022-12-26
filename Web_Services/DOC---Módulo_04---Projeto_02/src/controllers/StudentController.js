const Student = require('../models/Student.js');    //importação do arquivo 'Student.js'

module.exports = {

    //--------------------- método de visualização da rota raiz ---------------------
    async index(request, response){

        try{
            
            return response.status(200).send('Rota Raiz em Funcionamento!');
    
        } catch(erro){
            
            return response.status(400).send(`Erro: ${erro}`);
    
        }
        
    },

    //--------------------- método de visualização dos dados de todos os estudantes ---------------------
    async findAll(request, response){

        try{
            
            const resultStudent = await Student.findAll();
            
            return response.status(200).json({

                Status: 'Registros encontrados!',
                Students_all: resultStudent

            });
    
        } catch(erro){
            
            return response.status(400).send(`Erro: ${erro}`);
    
        }

    },

    //--------------------- método de visualização de dados de um estudante em específico (pelo identificador 'position') --------------------- 
    async findById(request, response){

        try{
            
            const id = request.params.position;
    
            const resultStudent = await Student.findAll({
    
                where: {
                    id: id
                }
    
            });
            
            return response.status(200).json({

                Status: `Estudante encontrado! | Registro: ${id}ª posição.`,
                Student_id: resultStudent

            });
    
        } catch(erro){
            
            return response.status(400).send(`Erro: ${erro}`);
    
        }

    },

    //--------------------- método de armazemanto de dados de um novo estudante --------------------- 
    async store(request, response){

        try{

            const {registration, name, note, approval} = request.body;

            const resultStudent = await Student.create({
                registration, 
                name, 
                note, 
                approval
            });
            
            return response.status(201).json({

                Status: 'Estudante registrado com sucesso!',
                Student_add: resultStudent
    
            });
    
        } catch(erro){
            
            return response.status(400).send(`Erro: ${erro}`);
    
        }

    },

    //--------------------- método de atualização de dados de um estudante em específico (pelo identificador 'position') --------------------- 
    async updateById(request, response){

        try{

            const id = request.params.position;

            const {registration, name, note, approval} = request.body;

            const student = await Student.update({

                registration, 
                name, 
                note, 
                approval

            }, {

                where: {
                    id: id
                }

            });

            const resultStudent = await Student.findAll({
    
                where: {
                    id: id
                }
    
            });
            
            return response.status(200).json({
    
                Status: `${id}º estudante atualizado com sucesso!`,
                Student_update: resultStudent
    
            });            
    
        } catch(erro){
            
            return response.status(400).send(`Erro: ${erro}`);
    
        }

    },
 
    //--------------------- método de deleção de dados de um estudante em específico (pelo identificador 'position') --------------------- 
    async deleteById(request, response){

        try{
            
            const id = request.params.position;
    
            await Student.destroy({
    
                where: {
                    id: id
                }
    
            });

            const resultStudent = await Student.findAll();

            return response.status(200).json({
    
                Status: `Estudante deletado com sucesso!`,
                Student_all: resultStudent
    
            });
    
        } catch(erro){
            
            return response.status(400).send(`Erro: ${erro}`);
    
        }

    },

    //--------------------- método de tratamento de erros --------------------- 
    async all(request, response){

        try{
            
            return response.status(404).send('<h2>Página não encontrada!</h2>');
        
        } catch(erro){
            
            return response.status(400).send(`Erro: ${erro}`);
        
        }
        
    }

};