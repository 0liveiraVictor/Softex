const express = require('express'); //importação do módulo 'express'
const router = express.Router();    //uso do pacote 'Router' do 'express'

const UserController = require('../controllers/UserController');    //importação do arquivo 'UserController.js'

router.get('/', UserController.index);  //rota raiz da aplicação
router.post('/user/add', UserController.store); //rota de armazenamento de dados de um novo usuário
router.get('/user/list', UserController.findAll);   //rota de busca para listar os dados de todos os usuários
router.get('/user/:id', UserController.findId); //rota de busca para listar os dados de um usuário em específico

module.exports = router;