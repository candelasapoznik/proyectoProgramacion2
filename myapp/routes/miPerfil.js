//CÓDIGO QUE SIEMPRE VA EN EXPRESS
var express = require('express');
var router = express.Router();

//CREO UNA VARIABLE PARA CONECTAR LA RUTA CON EL CONTROLADOR
let miPerfilController=require('../controllers/miPerfilController');

//DEFINO LA RUTA PARA MANEJAR LOS DISTINTOS TIPOS DE REQUEST
router.get('/idUsuarios/:id', miPerfilController.index);

//EXPORTO EL MÓDULO PROPIO
module.exports = router;
