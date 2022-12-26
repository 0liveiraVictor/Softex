const {Model, DataTypes} = require('sequelize');    //importação do pacote 'Model' e 'DataTypes' do módulo 'sequelize'

//definição da classe (Model) Student
class Student extends Model {

    //método de construção do 'Model'
    static init(sequelize){

        super.init({

            //dados (colunas) da migration student criada no banco de dados
            registration: DataTypes.INTEGER,
            name: DataTypes.STRING,
            note: DataTypes.FLOAT,
            approval: DataTypes.BOOLEAN

        }, {sequelize});

    };

};

module.exports = Student;