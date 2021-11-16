let usuarios = require('../data/usuarios')

const miPerfilController={
    index: function (req,res,next){
        res.render('miPerfil',
        {detalleDeUsuarios: usuarios.lista});
    }
};
module.exports=miPerfilController;