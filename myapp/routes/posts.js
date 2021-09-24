//CÓDIGO QUE SIEMPRE VA EN EXPRESS
var express = require('express');
var router = express.Router();

//CREO UNA VARIABLE PARA CONECTAR LA RUTA CON EL CONTROLADOR
let postController=require('../controllers/postController');

//DEFINO LA RUTA PARA MANEJAR LOS DISTINTOS TIPOS DE REQUEST
//DETALLE POST
router.get('/detallePost/id/:id', postController.detailPost); //luego de los dos puntos le pongo el valor id que es lo que viaja por url
//AGREGAR POST
router.get('/agregarPost', postController.agregarPost);

//EXPORTO EL MÓDULO PROPIO
module.exports = router;