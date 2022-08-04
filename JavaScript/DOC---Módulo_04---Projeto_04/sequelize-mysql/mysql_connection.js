//carregando o 'Sequelize' a partir do pacote instalado <npm i sequelize mysql2>
const Sequelize = require('sequelize');

/*instanciando o objeto 'sequelize' a partir da classe carregada 'Sequelize' e passando como parâmetros
('nome_do_banco_de_dados', 'usuario_de_acesso', 'senha_de_acesso', {opções})*/
const sequelize = new Sequelize('softex_projects', 'root', '4M00pQ3Y2n', {

    //{opções} -> {dialect: 'SGBD', host: 'localizacao', port: nº_de_porta}
    dialect: 'mysql',
    host: 'localhost',
    port: 3306

})

//função 'authenticate' (verificação de conexão ao banco de dados)
sequelize.authenticate().then(function(){

    console.log('\n-------------------------------------------------------------------------------------------------');
    console.log('Conexão efetuada com sucesso!');
    console.log('-------------------------------------------------------------------------------------------------\n');

   //tratamento em caso de falha na conexão 
}).catch(function(error){

    console.log('\n-------------------------------------------------------------------------------------------------');
    console.log(`Falha na conexão! ERRO >>> ${error}`);
    console.log('-------------------------------------------------------------------------------------------------\n');

})

//exportando o objeto sequelize
module.exports = sequelize;