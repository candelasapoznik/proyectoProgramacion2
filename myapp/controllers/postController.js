const posts = require('../data/posteos');
const users = require('../data/usuarios')
const comentarios = require('../data/comentarios');

const postController={
    detailPost: function (req,res,next){
        let idPost = req.params.id;
        let infoPosteo = posts.buscarPorId(idPost); //esta funcion me buscar la información de los posteos por id.
        let infoComentarios = comentarios.lista; 
        return res.render('detallePost', { 
            detallePost: infoPosteo, 
            listaComentario : infoComentarios}) //le envio la info del posteo y los comentarios a la vista
    },
    agregarPost: function (req,res,next){
        res.render('agregarPost',{})
        }
};
module.exports=postController;
