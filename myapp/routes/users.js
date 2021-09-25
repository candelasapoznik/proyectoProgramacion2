//CÓDIGO QUE SIEMPRE VA EN EXPRESS
var express = require('express');
var router = express.Router();

//CREO UNA VARIABLE PARA CONECTAR LA RUTA CON EL CONTROLADOR
let usersController=require('../controllers/usersController');

//DEFINO LA RUTA PARA MANEJAR LOS DISTINTOS TIPOS DE REQUEST EN ESTE CASO PARA USER
// PARA REGISTRO
router.get('/registracion', usersController.register);
//PARA LOGIN
router.get('/login', usersController.login);
//PARA DETALLE USUARIO
router.get('/detalleUsuario/id/:id', usersController.detail);
//PARA MI PERFIL
router.get('/miPerfil/:id', usersController.profile);
//PARA EDITAR PERFIL
router.get('/editarMiPerfil/:id', usersController.editProfile);

//EXPORTO EL MÓDULO PROPIO
module.exports = router;
