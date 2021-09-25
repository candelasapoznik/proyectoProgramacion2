//CREO UNA VARIABLE PARA CONECTAR EL CONTROLADOR CON LOS DATOS
const usuarios = require('../data/usuarios');
const posts = require('../data/posteos');
const comentarios = require('../data/comentarios');


const userController={
    register: function (req,res,next){
        res.render('registracion',{})
    },
    login: function (req,res,next){
        res.render('login',{})
    },
    detail: function (req,res,next){
        let idUsuario = req.params.id; 
        let infoUsuario = usuarios.buscarPorId(idUsuario);
        let posteosUsuario = posts.buscarPorIdCreador(idUsuario);
        return res.render('detalleUsuario',{ 
            detalleUsuario: infoUsuario,
            posteos: posteosUsuario
        })
    },
    profile: function (req,res,next){
        let id = req.params.id; 
        let usuarioEncontrado = usuarios.buscarPorId(id);
        let posteosUsuario = posts.buscarPorIdCreador(id);
        return res.render('miPerfil',{ 
            usuario: usuarioEncontrado,
            posteos: posteosUsuario
        })
    },
    editProfile : function (req,res,next){
            return res.render('editarMiPerfil',{})
        }
}
module.exports=userController;
