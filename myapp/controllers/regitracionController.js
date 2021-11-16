const registracionController={
    index: function (req,res,next){
        res.render('registracion',
        {detalleDeUsuario: usuarios})
    }
};
module.exports=registracionController;