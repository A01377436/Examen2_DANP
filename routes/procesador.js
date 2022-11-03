const express = require('express');
const router = express.Router();
const procesadorController= require('../controllers/procesadores.js')
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas

//Servicio para eliminar un registro por id
router.post('/createP',procesadorController.postCrearProcesador);
//Servicio para actualizad un registro por id
router.get('/read',procesadorController.getProcesadores);

module.exports = router