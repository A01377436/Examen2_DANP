const Sequelize=require('sequelize');

const ProcessorModel = (sequelize) => {
    sequelize.define('procesador',{
        nombreModelo: {
            type: Sequelize.STRING,
            allowNull:true,
            primaryKey:true
        },
        familiaModelo:Sequelize.STRING,
        compania:Sequelize.STRING
    });
}

module.exports = ProcessorModel;