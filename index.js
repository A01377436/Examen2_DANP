//importar las bibliotecas
const express = require('express');
//traer el objeto sequelize
const sequelize = require('./utils/database')
const path = require('path');
const procesadorRoutes = require('./routes/procesador');

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use('/procesador',procesadorRoutes);


sequelize.sync()
    .then(()=>{
        console.log("Conexión Exitosa")
//Lanzar la aplicación
        app.listen(8081,()=>{
            console.log("Servidor en línea");
        });
    }).catch(error=>console.log(error))