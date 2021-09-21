const usuarios = require("../data/usuarios");

const detalleUsuarioController={
    index: function (req,res,next){
        res.render('detalleUsuario',
        {detalleDeUsuario: usuarios});
    }
};
module.exports=detalleUsuarioController;