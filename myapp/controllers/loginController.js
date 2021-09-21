const loginController={
    index: function (req,res,next){
        res.render('login',
        {detalleDeUsuarios: usuarios});
    }
};
module.exports=loginController;