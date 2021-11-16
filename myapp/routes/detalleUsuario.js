//CÓDIGO QUE SIEMPRE VA EN EXPRESS
var express = require('express');
var router = express.Router();

//CREO UNA VARIABLE PARA CONECTAR LA RUTA CON EL CONTROLADOR
let detalleUsuarioController=require('../controllers/detalleUsuarioController');

//DEFINO LA RUTA PARA MANEJAR LOS DISTINTOS TIPOS DE REQUEST
router.get('/:id', detalleUsuarioController.index);

//EXPORTO EL MÓDULO PROPIO
module.exports = router;