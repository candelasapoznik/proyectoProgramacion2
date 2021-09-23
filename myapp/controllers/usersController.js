//CREO UNA VARIABLE PARA CONECTAR EL CONTROLADOR CON LOS DATOS
const usuarios = require('../data/usuarios');
const userController={
    register: function (req,res,next){
        res.render('registracion',{})
    },
    login: function (req,res,next){
        res.render('login',{})
    },
    detail: function (req,res,next){
        for (let index = 0; index < usuarios.lista.length; index++) {
            if (usuarios.lista[index].id==req.params.id) {
                return res.render('detalleUsuario',{ detalle: usuarios.lista[index]})
            }
        }
    },
    profile: function (req,res,next){
        for (let index = 0; index < usuarios.lista.length; index++) {
            if (usuarios.lista[index].id==req.params.id) {
                return res.render('miPerfil',{ perfil: usuarios.lista[index]})
            }
        }
    },
    editProfile : function (req,res,next){
        for (let index = 0; index < usuarios.lista.length; index++) {
            if (usuarios.lista[index].id==req.params.id) {
                return res.render('editarMiPerfil',{ editarPerfil: usuarios.lista[index]})
            }
        }
    }
}
module.exports=userController;
