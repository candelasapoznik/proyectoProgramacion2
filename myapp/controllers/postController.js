let db = require('../database/models')
let bcrypt = require('bcryptjs')

// defino una variable que contiene el OL donde escribimos los métodos que se van a encargar de manejar los request.
const postController={
    //metodo para cada request particular 
    detailPost: function (req,res,next){
        let idPost = req.params.id; // capturo el id que viaja en la url con req.params.id y lo meto en la variable idPost
        let infoPosteo = posts.buscarPorId(idPost); //Le envio como párametro de la funcion idPost para que me busque la información de los posteos por id.
        let infoComentarios = comentarios.lista; 
        let infoUsuario = users.lista;

        return res.render('detallePost', { 
            detallePost: infoPosteo, //es la info que le envio a la vista 
            listaComentario : infoComentarios,
            listaUsuario: infoUsuario,
        }) //le envio la info del posteo y los comentarios a la vista
    },
    agregarPost: function (req,res,next){
        res.render('agregarPost',{})
        }
};

//exportamos la variable en la última línea del código para dejar disponible el código del controlador
module.exports=postController;
