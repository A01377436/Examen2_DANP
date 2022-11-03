const path = require("path");
const Procesador = require("../utils/database").models.procesador;
const sequelize = require("../utils/database");
const Sequeliza = require("sequelize");
const { Console } = require("console");

// Proceso cuando se llame a la ruta


exports.postCrearProcesador=(req,res)=>{
    //DELETE FROM Consola
    console.log(req.body)
    Procesador.create(req.body)
    .then(resultado=>{
        console.log("Registro Exitoso");//Servidor
        res.send("RegistroExitoso");//Cliente
    })
    .catch(error=>{
        console.log(error);//Servidor
        res.send("Ocurrio un error")//Cliente
    })

}

exports.getProcesadores=(req,res)=>{
    //Select * from consola
    Procesador.findAll()
        .then(procesadores=>{
            console.log("Procesadores:",procesadores);
            res.send(procesadores);
        })
        .catch(error=>{
            console.log(error);
            res.send("Error");
        })
}