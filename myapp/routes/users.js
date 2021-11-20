//CÓDIGO QUE SIEMPRE VA EN EXPRESS
var express = require('express');
var router = express.Router();

//CREO UNA VARIABLE PARA CONECTAR LA RUTA CON EL CONTROLADOR
let usersController=require('../controllers/usersController');

//DEFINO LA RUTA PARA MANEJAR LOS DISTINTOS TIPOS DE REQUEST EN ESTE CASO PARA USER
// PARA REGISTRO: ruta por GET que envía el formulario de creación
router.get('/registracion', usersController.register);
// ruta por POST que procesa la información del formulario registracion
router.post('/registracion', usersController.registerPost);
//PARA LOGIN 
router.get('/login', usersController.login);
//PARA CHEQUEAR QUE EL USUARIO ESTA OK, SINO SERÍA POR GET
router.post('/login', usersController.processlogin);
//PARA LOGOUT
router.post('/logout', usersController.logout);
//PARA DETALLE USUARIO
router.get('/detalleUsuario/id/:id', usersController.detail);
//PARA MI PERFIL
router.get('/miPerfil/:id', usersController.profile);
//PARA EDITAR PERFIL GET
router.get('/editarMiPerfil/:id', usersController.editProfile);
//PARA EDITAR MI PERFIL POST
router.post('/editarMiPerfil/:id', usersController.updateProfile);
//PARA SEGUIR
router.get('/seguir/:id', usersController.follow);
//Creo la ruta de seguir usuario por metodo POST
router.post('/seguir/:id', usersController.follow)
//PARA DEJAR DE SEGUIR
router.get('/dejarDeSeguir/:id', usersController.unfollow);
//Creo la ruta de dejar de seguir usuario por metodo POST
router.post('/dejarSeguir/:id', usersController.unfollow)

//EXPORTO EL MÓDULO PROPIO
module.exports = router;
