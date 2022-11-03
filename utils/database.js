//Configuración de sequelize
const Sequelize = require('sequelize');
//Objeto de conexión
const sequelize = new Sequelize('Examen_DANP','admin','Zaironsuper**00',{
    dialect:'mysql',
    host:'database-1.cppuw12shxzr.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Características especiales de la conexión
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true
    }
});

//Cargar los modelos
const modelDefiners=[
    require('../models/processorModel'),
];

//Adherir los modelos al objeto de conexión
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Generar las relaciones entre las tablas
//Exportar el objeto sequelize
module.exports=sequelize;

//module.exports =sequelize;

/*const Consola = sequelize.define('consola',{
    //Atributos
    nombre:{
        type:Sequelize.STRING,
        allowNull: false
    },
    marca:{
        type:Sequelize.STRING,
        allowNull: false
    }
});*/

//Prueba de conexión

/*sequelize.sync()
    .then(resultado=>{
        console.log("Conexión exitosa")
    })*/