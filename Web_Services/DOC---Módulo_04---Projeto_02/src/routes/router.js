const express = require('express'); //importação do módulo 'express'
const router = express.Router();    //uso do pacote 'Router' do 'express'
const StudentController = require('../controllers/StudentController.js'); //importação do arquivo 'StudentController.js'

router.get('/', StudentController.index);   //rota raiz da aplicação
router.get('/students', StudentController.findAll); //rota de busca para listar os dados de todos os estudantes
router.get('/student/:position', StudentController.findById);   //rota de busca para listar os dados de um estudante em específico
router.post('/student/add', StudentController.store);   //rota de armazenamento de dados de um novo estudante 
router.put('/student/edit/:position', StudentController.updateById);    //rota de atualização de dados de um estudante em específico
router.delete('/student/del/:position', StudentController.deleteById);  //rota de deleção de dados de um estudante em específico
router.all('*', StudentController.all); //rota de informação, em caso de erro de sintaxe no envio de URL

module.exports = router;