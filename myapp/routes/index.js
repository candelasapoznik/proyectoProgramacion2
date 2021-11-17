//CÓDIGO QUE SIEMPRE VA EN EXPRESS
var express = require('express');
var router = express.Router();

//OBJETO DATA BASE
const db=require('../database/models');

//CREO UNA VARIABLE PARA CONECTAR LA RUTA CON EL CONTROLADOR
let indexController=require('../controllers/indexController');

//DEFINO LA RUTA PARA MANEJAR LOS DISTINTOS TIPOS DE REQUEST
router.get('/', indexController.index);

//EXPORTO EL MÓDULO PROPIO
module.exports = router;
