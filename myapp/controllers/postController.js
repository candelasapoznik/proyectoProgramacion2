const posts = require('../data/posteos');
const users = require('../data/usuarios')
const comentarios = require('../data/comentarios');

const postController={
    detailPost: function (req,res,next){
        let idPost = req.params.id; // capturo el id que viaja en la url con req.params.id y lo meto en la variable idPost
        let infoPosteo = posts.buscarPorId(idPost); //Le envio como párametro de la funcion idPost para que me busque la información de los posteos por id.
        let infoComentarios = comentarios.lista; 
        let infoUsuario = users.lista;

        return res.render('detallePost', { 
            detallePost: infoPosteo, //es la info que le envio a la vista 
            listaComentario : infoComentarios,
            listaUsuario: infoUsuario
        }) //le envio la info del posteo y los comentarios a la vista
    },
    agregarPost: function (req,res,next){
        res.render('agregarPost',{})
        }
};
module.exports=postController;
