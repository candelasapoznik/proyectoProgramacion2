//CÓDIGO QUE SIEMPRE VA EN EXPRESS
var express = require('express');
var router = express.Router();

//CREO UNA VARIABLE PARA CONECTAR LA RUTA CON EL CONTROLADOR
let resultadoBusquedaController=require('../controllers/resultadoBusquedaController');

//DEFINO LA RUTA PARA MANEJAR LOS DISTINTOS TIPOS DE REQUEST
//PARA RESULTADOS
router.get('/', resultadoBusquedaController.results);

//EXPORTO EL MÓDULO PROPIO
module.exports = router;