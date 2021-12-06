//CÓDIGO QUE SIEMPRE VA EN EXPRESS
var express = require('express');
var router = express.Router();

//CREO UNA VARIABLE PARA CONECTAR LA RUTA CON EL CONTROLADOR
let postController = require('../controllers/postController');


//REQUERIMOS CONSTANTES EN LE RUTA DONDE SE ENCUENTRA LA PÁGINA CON LA CUAL UTILIZAREMOS MULTER
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/imagenesPosteos/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //views
  }
});

const upload = multer({
  storage: storage
})

//DEFINO LA RUTA PARA MANEJAR LOS DISTINTOS TIPOS DE REQUEST
//DETALLE POST
router.get('/detallePost/id/:id', postController.detailPost); //luego de los dos puntos le pongo el valor id que es lo que viaja por url
//AGREGAR POST
router.get('/agregarPost', postController.agregarPost);
router.post('/agregarPost', upload.single("image"), postController.savePost)
//BORRAR POST
router.post("/borrarPost/:id", postController.borrarPost);
//EDITAR POST
router.get("/editarPost/:id", postController.editarPost);
router.post("/editarPost/:id", upload.single("image"), postController.updatePost); //imput enviamos al controlador upda
router.post('/comentar/:id', postController.comentar);

//buscador//
router.get('/busqueda', postController.busqueda);

//EXPORTO EL MÓDULO PROPIO
module.exports = router;
//