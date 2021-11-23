//CÓDIGO QUE SIEMPRE VA EN EXPRESS
var express = require('express');
var router = express.Router();

//REQUERIMOS CONSTANTES EN LE RUTA DONDE SE ENCUENTRA LA PÁGINA CON LA CUAL UTILIZAREMOS MULTER
const multer = require('multer');
const path = require('path'); 


//CREO UNA VARIABLE PARA CONECTAR LA RUTA CON EL CONTROLADOR
let usersController=require('../controllers/usersController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imagenesUsuarios/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });

  const upload = multer({ storage: storage })

//DEFINO LA RUTA PARA MANEJAR LOS DISTINTOS TIPOS DE REQUEST EN ESTE CASO PARA USER
// PARA REGISTRO: ruta por GET que envía el formulario de creación
router.get('/registracion', usersController.register);
// ruta por POST que procesa la información del formulario registracion
router.post('/registracion', upload.single("fotoDePerfil"), usersController.registerPost);
//PARA LOGIN 
router.get('/login', usersController.login);
//PARA CHEQUEAR QUE EL USUARIO ESTA OK, SINO SERÍA POR GET
router.post('/login', usersController.processLogin);
//PARA LOGOUT
router.get('/logout', usersController.logout);
//PARA DETALLE USUARIO
router.get('/detalleUsuario/id/:id', usersController.detail);
//PARA MI PERFIL
router.get('/miPerfil/:id', usersController.profile);
router.get("/test", usersController.test)
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