const posts = require('../data/posteos');
const users = require('../data/usuarios')
const comentarios = require('../data/comentarios');

const editarMiPerfilController={
    index: function (req,res,next){
        res.render('index',{
            listaPosteos: posts.lista,
            listaUsuarios: users.lista,
            listaComent: comentarios.lista
        })
    }
};
module.exports= editarMiPerfilController;
