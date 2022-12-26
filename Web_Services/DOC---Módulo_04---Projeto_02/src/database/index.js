const Sequelize = require('sequelize'); //importação do módulo 'sequelize'
const dbConfig = require('../config/database.js');  //importação do arquivo de configuração do SGBD MySQL 'database.js'
const Student = require('../models/Student.js');    //importação do arquivo de Models 'Student.js'

const connection = new Sequelize(dbConfig); //estabelecendo conexão com o banco de dados a partir do arquivo de configuração

Student.init(connection);   //configurando o model 'Student' com a conexão do bando de dados

module.exports = connection;