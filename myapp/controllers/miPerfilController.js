const miPerfilController={
    index: function (req,res,next){
        res.render('miPerfil',
        {detalleDeUsuarios: usuarios});
    }
};
module.exports=miPerfilController;